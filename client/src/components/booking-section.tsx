import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { CalendarCheck, Info } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

const bookingSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  barber: z.string().optional(),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  notes: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const services = [
  { value: "haircut", label: "Haircut - £14" },
  { value: "student-haircut", label: "Student Haircut - £12" },
  { value: "kids-cut", label: "Kids (under 9) - £10" },
  { value: "hair-and-beard", label: "Hair and Beard - £20" },
  { value: "hot-towel-addon", label: "Hot Towel & Steamer Add-on - +£5" },
  { value: "special-design-addon", label: "Hair Special Design Add-on - +£5" },
];

const barbers = [
  { value: "no-preference", label: "No preference" },
  { value: "nash", label: "Nash - Master Barber" },
];

const timeSlots = [
  { value: "09:00", label: "9:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "13:00", label: "1:00 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "16:00", label: "4:00 PM" },
  { value: "17:00", label: "5:00 PM" },
];

export default function BookingSection() {
  return (
    <section id="booking" className="py-20 bg-barber-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-barber-gold mb-4">Book Your Appointment</h2>
          <p className="text-xl text-barber-light">Schedule your appointment directly with our calendar</p>
        </div>

        <div className="bg-barber-gray p-8 rounded-lg border border-barber-gold/20">
          {/* Google Calendar Appointment Scheduling begin */}
          <iframe 
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0K8h9YPuSMhmYGEbolFziLfR9t2E8cYaPSHZMZo6rLF6qzZGZqw95KQAzFuYDOacovrwi8mlrz?gv=true" 
            style={{border: 0}} 
            width="100%" 
            height="600" 
            frameBorder="0"
            className="rounded-lg"
          />
          {/* end Google Calendar Appointment Scheduling */}
        </div>
      </div>
    </section>
  );
}