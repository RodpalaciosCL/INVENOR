import { users, analytics, type User, type InsertUser, type Analytics, type InsertAnalytics } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Analytics methods
  logVisitor(data: InsertAnalytics): Promise<Analytics>;
  getRecentVisitors(limit?: number): Promise<Analytics[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private visitors: Analytics[];
  currentId: number;
  currentVisitorId: number;

  constructor() {
    this.users = new Map();
    this.visitors = [];
    this.currentId = 1;
    this.currentVisitorId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async logVisitor(data: InsertAnalytics): Promise<Analytics> {
    const id = this.currentVisitorId++;
    const visitor: Analytics = {
      id,
      ipAddress: data.ipAddress,
      userAgent: data.userAgent || null,
      country: data.country || null,
      city: data.city || null,
      region: data.region || null,
      success: data.success || true,
      eventType: data.eventType || 'login',
      documentName: data.documentName || null,
      timestamp: new Date()
    };
    this.visitors.push(visitor);
    return visitor;
  }

  async getRecentVisitors(limit: number = 50): Promise<Analytics[]> {
    return this.visitors
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
      .slice(0, limit);
  }
}

// Database Storage Implementation
export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async logVisitor(data: InsertAnalytics): Promise<Analytics> {
    const [visitor] = await db
      .insert(analytics)
      .values({
        ipAddress: data.ipAddress,
        userAgent: data.userAgent || null,
        country: data.country || null,
        city: data.city || null,
        region: data.region || null,
        success: data.success || true,
        eventType: data.eventType || 'login',
        documentName: data.documentName || null
      })
      .returning();
    return visitor;
  }

  async getRecentVisitors(limit: number = 50): Promise<Analytics[]> {
    return await db
      .select()
      .from(analytics)
      .orderBy(desc(analytics.timestamp))
      .limit(limit);
  }
}

export const storage = new DatabaseStorage();
