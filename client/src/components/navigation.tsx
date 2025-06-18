import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-barber-dark/95 backdrop-blur-sm z-50 border-b border-barber-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-cinzel font-semibold text-barber-gold">Barber 36</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover-gold px-3 py-2 text-sm font-medium">Home</button>
              <button onClick={() => scrollToSection('services')} className="hover-gold px-3 py-2 text-sm font-medium">Services</button>
              <button onClick={() => scrollToSection('about')} className="hover-gold px-3 py-2 text-sm font-medium">About</button>
              <button onClick={() => scrollToSection('gallery')} className="hover-gold px-3 py-2 text-sm font-medium">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="hover-gold px-3 py-2 text-sm font-medium">Contact</button>
              <button onClick={() => scrollToSection('booking')} className="bg-barber-gold text-barber-dark px-4 py-2 rounded-md text-sm font-medium hover:bg-barber-bronze transition-colors">Book Now</button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-barber-light hover:text-barber-gold"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-barber-gray">
              <button onClick={() => scrollToSection('home')} className="hover-gold block px-3 py-2 text-base font-medium w-full text-left">Home</button>
              <button onClick={() => scrollToSection('services')} className="hover-gold block px-3 py-2 text-base font-medium w-full text-left">Services</button>
              <button onClick={() => scrollToSection('about')} className="hover-gold block px-3 py-2 text-base font-medium w-full text-left">About</button>
              <button onClick={() => scrollToSection('gallery')} className="hover-gold block px-3 py-2 text-base font-medium w-full text-left">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="hover-gold block px-3 py-2 text-base font-medium w-full text-left">Contact</button>
              <button onClick={() => scrollToSection('booking')} className="bg-barber-gold text-barber-dark block px-3 py-2 rounded-md text-base font-medium hover:bg-barber-bronze transition-colors w-full text-left">Book Now</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
