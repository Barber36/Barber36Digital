import { Calendar, Eye } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 fade-in">
          <span className="text-barber-gold">Barber 36</span><br />
          Barbering Experience
        </h1>
        <p className="text-xl md:text-2xl text-barber-light mb-8 max-w-3xl mx-auto fade-in">
          Welcome to Barber 36 in Sutton Coldfield. We take pride in delivering exceptional grooming services tailored to the modern man. Our team of skilled barbers are dedicated to providing an experience that combines traditional barbering with contemporary style. Step into our shop and let us redefine your grooming routine.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center fade-in">
          <button 
            onClick={() => scrollToSection('booking')}
            className="inline-flex items-center bg-barber-gold text-barber-dark px-8 py-4 rounded-md text-lg font-semibold hover:bg-barber-bronze transition-colors"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Appointment
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="inline-flex items-center border-2 border-barber-gold text-barber-gold px-8 py-4 rounded-md text-lg font-semibold hover:bg-barber-gold hover:text-barber-dark transition-colors"
          >
            <Eye className="mr-2 h-5 w-5" />
            View Services
          </button>
        </div>
      </div>
    </section>
  );
}
