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
  { value: "classic-cut", label: "Classic Cut - £25" },
  { value: "beard-trim", label: "Beard Trim - £18" },
  { value: "hot-towel-shave", label: "Hot Towel Shave - £30" },
  { value: "full-service", label: "The Full Service - £55" },
  { value: "kids-cut", label: "Kids Cut - £20" },
  { value: "wedding-prep", label: "Wedding Prep - £75" },
];

const barbers = [
  { value: "no-preference", label: "No preference" },
  { value: "mark", label: "Mark - Senior Barber" },
  { value: "james", label: "James - Master Barber" },
  { value: "alex", label: "Alex - Traditional Specialist" },
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
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      barber: "",
      date: "",
      time: "",
      notes: "",
    },
  });

  const createBookingMutation = useMutation({
    mutationFn: async (data: BookingFormData) => {
      const response = await apiRequest("POST", "/api/appointments", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Booking Successful!",
        description: "We'll contact you soon to confirm your appointment.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/appointments"] });
    },
    onError: (error: any) => {
      toast({
        title: "Booking Failed",
        description: error.message || "Failed to create appointment. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: BookingFormData) => {
    createBookingMutation.mutate(data);
  };

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="py-20 bg-barber-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-barber-gold mb-4">Book Your Appointment</h2>
          <p className="text-xl text-barber-light">Choose your preferred service and time</p>
        </div>
        
        <div className="bg-barber-gray p-8 rounded-lg border border-barber-gold/20">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-barber-light">First Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-barber-dark border-barber-gold/30 text-white focus:border-barber-gold"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-barber-light">Last Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-barber-dark border-barber-gold/30 text-white focus:border-barber-gold"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-barber-light">Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email"
                          className="bg-barber-dark border-barber-gold/30 text-white focus:border-barber-gold"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-barber-light">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="tel"
                          className="bg-barber-dark border-barber-gold/30 text-white focus:border-barber-gold"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-barber-light">Service</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-barber-dark border-barber-gold/30 text-white focus:border-barber-gold">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-barber-dark border-barber-gold/30">
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value} className="text-white hover:bg-barber-gold/20">
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="barber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-barber-light">Preferred Barber</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-barber-dark border-barber-gold/30 text-white focus:border-barber-gold">
                            <SelectValue placeholder="No preference" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-barber-dark border-barber-gold/30">
                          {barbers.map((barber) => (
                            <SelectItem key={barber.value} value={barber.value} className="text-white hover:bg-barber-gold/20">
                              {barber.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-barber-light">Preferred Date</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="date"
                          min={today}
                          className="bg-barber-dark border-barber-gold/30 text-white focus:border-barber-gold"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-barber-light">Preferred Time</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-barber-dark border-barber-gold/30 text-white focus:border-barber-gold">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-barber-dark border-barber-gold/30">
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot.value} value={slot.value} className="text-white hover:bg-barber-gold/20">
                              {slot.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-barber-light">Additional Notes</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field} 
                        placeholder="Any specific requests or information..."
                        rows={4}
                        className="bg-barber-dark border-barber-gold/30 text-white focus:border-barber-gold"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="text-center">
                <Button 
                  type="submit" 
                  disabled={createBookingMutation.isPending}
                  className="bg-barber-gold text-barber-dark px-8 py-4 text-lg font-semibold hover:bg-barber-bronze transition-colors"
                >
                  <CalendarCheck className="mr-2 h-5 w-5" />
                  {createBookingMutation.isPending ? "Booking..." : "Book Appointment"}
                </Button>
              </div>
            </form>
          </Form>
          
          <div className="mt-6 p-4 bg-barber-dark/50 rounded-md border border-barber-gold/20">
            <p className="text-sm text-barber-light text-center flex items-center justify-center">
              <Info className="mr-2 h-4 w-4 text-barber-gold" />
              We'll send you a confirmation email and our barber will contact you to confirm your appointment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
