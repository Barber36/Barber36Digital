
# Barber 36 - Professional Barbering Experience

A modern, full-stack web application for Barber 36 in Sutton Coldfield.

## Features

- Responsive design optimized for all devices
- Online appointment booking system
- Service showcase with pricing
- Contact information and location details
- Professional gallery section
- Email notifications for new bookings

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Email**: Nodemailer for appointment notifications
- **UI Components**: Radix UI with custom styling

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables (create `.env` file):
   ```
   DATABASE_URL=your_database_url
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password
   BARBER_EMAIL=barber36sutton@gmail.com
   ```

3. Push database schema:
   ```bash
   npm run db:push
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

Deploy on Replit with autoscale deployment for full functionality including the booking system and email notifications.

## Contact Information

- **Address**: 36A High Street, Sutton Coldfield, Birmingham, West Midlands, B73 6LB
- **Phone**: 0121 725 1977
- **Email**: barber36sutton@gmail.com
