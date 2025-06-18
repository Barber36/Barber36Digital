import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import GallerySection from "@/components/gallery-section";
import BookingSection from "@/components/booking-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Fade in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    // Initial fade-in for hero content
    setTimeout(() => {
      document.querySelectorAll('#home .fade-in').forEach(el => {
        el.classList.add('visible');
      });
    }, 500);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-barber-dark text-white font-inter">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
