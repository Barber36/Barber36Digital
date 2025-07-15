import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-barber-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-barber-gold mb-4">Contact Us</h2>
          <p className="text-xl text-barber-light">Visit us in Sutton Coldfield or get in touch</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 fade-in">
            <div className="flex items-start space-x-4">
              <div className="text-barber-gold text-2xl mt-1">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-barber-light">
                  36A High Street<br />
                  Sutton Coldfield<br />
                  Birmingham<br />
                  West Midlands<br />
                  B73 6LB
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-barber-gold text-2xl mt-1">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-barber-light">0121 725 1977</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-barber-gold text-2xl mt-1">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-barber-light">info@barber36.co.uk</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-barber-gold text-2xl mt-1">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                <div className="text-barber-light space-y-1">
                  <p>Mon - Wed: 9:00 AM - 6:00 PM</p>
                  <p>Thu - Fri: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in">
            <img 
              src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional barber at work" 
              className="rounded-lg shadow-2xl w-full" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}