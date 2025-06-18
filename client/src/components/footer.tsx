import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-barber-dark border-t border-barber-gold/20 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-cinzel font-semibold text-barber-gold mb-4">Barber 36</h3>
            <p className="text-barber-light mb-4">Premium barbering services in Sutton Coldfield. Traditional techniques, contemporary style.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-barber-light hover:text-barber-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-barber-light hover:text-barber-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-barber-light hover:text-barber-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('home')} className="text-barber-light hover:text-barber-gold transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-barber-light hover:text-barber-gold transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-barber-light hover:text-barber-gold transition-colors">About</button></li>
              <li><button onClick={() => scrollToSection('booking')} className="text-barber-light hover:text-barber-gold transition-colors">Book Now</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-2 text-barber-light">
              <p>36 High Street, Sutton Coldfield</p>
              <p>Phone: 0121 355 8888</p>
              <p>Email: info@barber36.co.uk</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-barber-gold/20 mt-12 pt-8 text-center">
          <p className="text-barber-light">&copy; 2024 Barber 36. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
