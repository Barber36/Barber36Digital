# Barber 36 - Premium Barbering Website

## Overview

Barber 36 is a modern full-stack web application for a premium barbering business in Sutton Coldfield. The application combines a sleek frontend showcasing services with a robust backend for appointment booking and management. Built with React, Express, and PostgreSQL, it offers a professional online presence with integrated booking functionality and email notifications.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom barber-themed color palette
- **UI Components**: Radix UI components via shadcn/ui
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with hot module replacement

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM
- **Email Service**: Nodemailer for appointment notifications
- **Development**: Hot reload with tsx
- **Production**: ESBuild bundling for server code

### Key Design Decisions
- **Monorepo Structure**: Single repository with shared types and schemas
- **Type Safety**: Full TypeScript coverage across client, server, and shared code
- **Database-First**: Schema defined in shared directory for consistency
- **Email Integration**: Automatic notifications to barber on new bookings
- **Responsive Design**: Mobile-first approach with professional aesthetics

## Key Components

### Database Schema
- **Users Table**: Authentication and user management
- **Appointments Table**: Booking information with status tracking
- **Shared Types**: Zod schemas for validation and TypeScript types

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling to sections
- **Hero Section**: Eye-catching banner with call-to-action buttons
- **Services Section**: Grid layout showcasing barbering services with pricing
- **About Section**: Company information with statistics
- **Gallery Section**: Image showcase of work and facilities
- **Booking Section**: Appointment form with service selection and date/time picker
- **Contact Section**: Business information and location details
- **Footer**: Additional navigation and social media links

### Backend Routes
- **POST /api/appointments**: Create new appointment bookings
- **Email Notifications**: Automatic email alerts to barber on new bookings

## Data Flow

1. **User Interaction**: Customer visits website and navigates to booking section
2. **Form Submission**: Appointment form validates data using Zod schemas
3. **API Request**: Frontend sends booking data to Express server
4. **Database Storage**: Appointment saved to PostgreSQL via Drizzle ORM
5. **Email Notification**: Nodemailer sends booking details to barber
6. **User Feedback**: Success/error toast notifications displayed

## External Dependencies

### Production Dependencies
- **Database**: Neon PostgreSQL serverless database
- **Email Service**: SMTP configuration (Gmail/custom)
- **UI Framework**: Radix UI primitives
- **Styling**: Tailwind CSS with PostCSS
- **Fonts**: Google Fonts (Playfair Display, Inter, Cinzel)

### Development Tools
- **Build System**: Vite with React plugin
- **Database Tooling**: Drizzle Kit for migrations
- **Development Server**: Express with Vite middleware
- **Code Quality**: TypeScript with strict configuration

## Deployment Strategy

### Replit Configuration
- **Environment**: Node.js 20 with PostgreSQL 16
- **Development**: `npm run dev` starts both frontend and backend
- **Production Build**: Vite builds frontend, ESBuild bundles server
- **Port Configuration**: Server runs on port 5000, external port 80
- **Auto-deployment**: Configured for Replit's autoscale deployment

### Environment Variables
- **DATABASE_URL**: PostgreSQL connection string
- **SMTP Configuration**: Email service credentials
- **BARBER_EMAIL**: Recipient for booking notifications

### Build Process
1. Frontend assets built to `dist/public`
2. Server code bundled to `dist/index.js`
3. Static files served from Express in production
4. Database schema managed via Drizzle migrations

## Changelog

```
Changelog:
- June 18, 2025. Initial setup with complete barber website
- June 18, 2025. Updated branding from "Diamond Scissors" to "Barber 36"
- June 18, 2025. Added custom description highlighting exceptional grooming services
- June 18, 2025. Updated contact info: phone to 0121 725 1977, new opening hours, copyright to 2025
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```