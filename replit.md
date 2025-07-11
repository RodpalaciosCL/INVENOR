# Airontech Interactive Pitch Deck

## Overview

This is an interactive React-based pitch deck application for Airontech, a Chilean mining technology company. The application serves as a presentation platform showcasing Airontech's AI-powered solutions for the mining industry, targeting potential investors.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Styling**: Tailwind CSS with custom CSS variables
- **UI Components**: Radix UI primitives with custom Shadcn/ui components
- **Animations**: Framer Motion for smooth transitions and animations
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Development**: TSX for TypeScript execution in development
- **Production**: ESBuild for server bundling

### Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM with TypeScript-first approach
- **Schema**: Centralized schema definition in `shared/schema.ts`
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

### Authentication and Authorization
- **Simple Password Protection**: Single password authentication system
- **Session Management**: Basic state-based authentication for presentation access
- **Target Audience**: Investor-only access with shared credentials

## Key Components

### Presentation Slides
1. **Introduction Slide**: Company overview and value proposition
2. **Proof of Concept**: Showcases validated solutions with major mining clients
3. **Ready-to-Sell Solutions**: Product portfolio including HotelCommander, SafeApp, WAIhouse, Mining360
4. **AI Solutions**: Advanced AI implementations for mining operations
5. **Client Portfolio**: Current clients and prospects (BHP, Anglo American, Antofagasta Minerals)
6. **Strategic Advantages**: Market positioning and competitive benefits
7. **Mining Safety**: Digital safety solutions and compliance tools
8. **Financial Results**: Revenue projections and profitability analysis
9. **Investment Opportunity**: Funding requirements and use of funds
10. **Team & Contact**: Leadership team and contact information

### UI Components
- **Navigation**: Smooth scrolling navigation with active section tracking
- **Interactive Elements**: Video modals, image galleries, and expandable content
- **Responsive Design**: Mobile-first approach with desktop optimizations
- **Brand Consistency**: Airontech color scheme (orange accent on dark background)

## Data Flow

1. **Application Bootstrap**: React app initializes with authentication check
2. **Authentication Flow**: Password validation before accessing presentation content
3. **Navigation System**: Section-based scrolling with URL state management
4. **Content Rendering**: Slide components render with animation triggers
5. **Interactive Features**: Modal systems for detailed content viewing
6. **Contact Integration**: Direct email integration for investor inquiries

## External Dependencies

### UI and Styling
- Radix UI components for accessible primitives
- Framer Motion for animations
- Tailwind CSS for utility-first styling
- Lucide React for iconography

### Development and Build
- Vite with React plugin for development server
- ESBuild for production server bundling
- TypeScript for type safety
- PostCSS with Autoprefixer

### Database and Backend
- Neon PostgreSQL serverless for production database
- Drizzle ORM for database operations
- Express.js for API endpoints
- Zod for schema validation

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with HMR
- **Database**: In-memory storage with Drizzle ORM interface
- **Port Configuration**: Local port 5000 with external port 80

### Production Deployment
- **Platform**: Replit with autoscale deployment target
- **Build Process**: Vite build for frontend, ESBuild for backend
- **Database**: PostgreSQL 16 module with environment-based connection
- **Static Assets**: Served from dist/public directory

### Environment Configuration
- **NODE_ENV**: Environment-specific configuration
- **DATABASE_URL**: PostgreSQL connection string
- **Modules**: Node.js 20, Web, PostgreSQL 16

## Changelog

```
Changelog:
- June 23, 2025. Initial setup
- June 23, 2025. Moved mining evolution timeline from Introduction to Strategic Advantages section, positioned after mining strategic context for better narrative flow
- June 25, 2025. Redesigned home page with modern two-column layout featuring enhanced value propositions, numbered sections, and improved visual hierarchy
- June 25, 2025. Redesigned investment section "Ecosistema de Alto Potencial" with clean layout removing complex visual effects per user feedback
- June 25, 2025. Added separate documentation section with three business case downloads using real Cloudinary links
- June 25, 2025. Implemented MarIA intelligent chatbot with OpenAI integration, specialized in Airontech mining business with restrictions against code development requests
- June 30, 2025. Comprehensive financial data correction: updated chronogram structure to reflect 12-month vs 24-month strategy, corrected confusing "Month 4+ CLP $1.800M" references to clarify annual vs monthly revenue, aligned all financial projections across deck components
- June 30, 2025. Final consolidation of accurate projections: Mes 12 target CLP $166M mensual (~USD $180K), Utilidad anual CLP $1.305M, Egresos mes 12 CLP $34.595M, Investment distribution validated (76% personal, 12% tech, 6% hardware, 6% marketing), Portfolio scaling strategy to USD $1M monthly by month 24 with GAP ~USD $800K via new contracts
- July 1, 2025. Implemented comprehensive visitor analytics system: dual authentication (investor: 243678 with tracking, admin: 2026123 without tracking), PostgreSQL database for visitor logs with IP geolocation, hidden analytics dashboard at /analytics-dashboard, complete download tracking for all Excel documents including modal buttons, invisible tracking preserving original UI/UX
- July 1, 2025. Fixed critical timezone bug in analytics dashboard: corrected Santiago time display (was showing UTC+4 hours ahead), now shows accurate Chile/Santiago timezone (America/Santiago) with proper locale formatting
- July 1, 2025. Corrected download tracking behavior in business cases: moved Excel tracking from "Ver Caso de Negocio" button to "Descargar Excel Completo" button inside modals, ensuring accurate download analytics only when users actually download files
```

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: User strongly rejects elaborate visual effects, complex styling, and "million dollar effects" - demands clean, minimal aesthetics without gradients, blur effects, or complex animations.
MarIA Chatbot restrictions: Configured to reject code development requests but provides comprehensive financial analysis, business projections, ROI calculations, and mining industry insights for Airontech business cases.