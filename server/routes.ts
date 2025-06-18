import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAppointmentSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || process.env.EMAIL_USER || "your-email@gmail.com",
    pass: process.env.SMTP_PASS || process.env.EMAIL_PASS || "your-app-password",
  },
});

async function sendBookingNotification(appointment: any) {
  const barberEmail = process.env.BARBER_EMAIL || process.env.SMTP_USER || "barber@barber36.co.uk";
  
  const mailOptions = {
    from: process.env.SMTP_USER || "noreply@barber36.co.uk",
    to: barberEmail,
    subject: "New Appointment Booking - Barber 36",
    html: `
      <h2>New Appointment Booking</h2>
      <p><strong>Customer:</strong> ${appointment.firstName} ${appointment.lastName}</p>
      <p><strong>Email:</strong> ${appointment.email}</p>
      <p><strong>Phone:</strong> ${appointment.phone}</p>
      <p><strong>Service:</strong> ${appointment.service}</p>
      <p><strong>Preferred Barber:</strong> ${appointment.barber || "No preference"}</p>
      <p><strong>Date:</strong> ${appointment.date}</p>
      <p><strong>Time:</strong> ${appointment.time}</p>
      ${appointment.notes ? `<p><strong>Notes:</strong> ${appointment.notes}</p>` : ''}
      <p><strong>Booking Time:</strong> ${new Date().toLocaleString()}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Booking notification email sent successfully");
  } catch (error) {
    console.error("Failed to send booking notification email:", error);
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Create appointment
  app.post("/api/appointments", async (req, res) => {
    try {
      const validatedData = insertAppointmentSchema.parse(req.body);
      const appointment = await storage.createAppointment(validatedData);
      
      // Send email notification
      await sendBookingNotification(appointment);
      
      res.json(appointment);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid appointment data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create appointment" });
      }
    }
  });

  // Get all appointments
  app.get("/api/appointments", async (req, res) => {
    try {
      const appointments = await storage.getAppointments();
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch appointments" });
    }
  });

  // Get specific appointment
  app.get("/api/appointments/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const appointment = await storage.getAppointment(id);
      
      if (!appointment) {
        res.status(404).json({ message: "Appointment not found" });
        return;
      }
      
      res.json(appointment);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch appointment" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
