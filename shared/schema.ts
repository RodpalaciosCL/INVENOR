import { pgTable, text, serial, integer, boolean, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Analytics table for tracking visitor logins
export const analytics = pgTable("analytics", {
  id: serial("id").primaryKey(),
  ipAddress: varchar("ip_address", { length: 45 }).notNull(), // IPv6 support
  userAgent: text("user_agent"),
  country: varchar("country", { length: 100 }),
  city: varchar("city", { length: 100 }),
  region: varchar("region", { length: 100 }),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
  success: boolean("success").default(true),
  eventType: varchar("event_type", { length: 50 }).default("login"), // "login", "download"
  documentName: varchar("document_name", { length: 200 }), // Track which document was downloaded
});

export const insertAnalyticsSchema = createInsertSchema(analytics).omit({
  id: true,
  timestamp: true,
});

export type InsertAnalytics = z.infer<typeof insertAnalyticsSchema>;
export type Analytics = typeof analytics.$inferSelect;
