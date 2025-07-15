export default function BookingSection() {
  return (
    <section id="booking" className="py-20 bg-barber-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-barber-dark mb-4">
            Book Your Appointment
          </h2>
          <p className="text-barber-dark/70 max-w-2xl mx-auto">
            Schedule your appointment with Nash using our online booking system.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-barber-dark mb-2">
                Online Booking
              </h3>
              <p className="text-barber-dark/70">
                Select your preferred date and time below to book with Nash.
              </p>
            </div>

            {/* Google Calendar Appointment Scheduling */}
            <div className="w-full">
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0K8h9YPuSMhmYGEbolFziLfR9t2E8cYaPSHZMZo6rLF6qzZGZqw95KQAzFuYDOacovrwi8mlrz?gv=true" 
                style={{ border: 0 }} 
                width="100%" 
                height="600" 
                frameBorder="0"
                title="Book Appointment"
              />
            </div>

            <div className="mt-8 p-4 bg-barber-cream rounded-lg">
              <h4 className="font-semibold text-barber-dark mb-2">
                Need Help Booking?
              </h4>
              <p className="text-barber-dark/70 mb-2">
                Call us directly at <strong>0121 725 1977</strong> or email{' '}
                <strong>barber36sutton@gmail.com</strong>
              </p>
              <p className="text-barber-dark/70">
                We're located at 36A High Street, Sutton Coldfield, Birmingham, West Midlands, B73 6LB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}