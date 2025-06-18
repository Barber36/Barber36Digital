import { Scissors, UserCheck, Sparkles, Star, Baby, Users } from "lucide-react";

const services = [
  {
    icon: <Scissors className="h-8 w-8" />,
    title: "Haircut",
    description: "Traditional barbering techniques for timeless styles. Includes consultation, cut, and styling.",
    price: "£14"
  },
  {
    icon: <UserCheck className="h-8 w-8" />,
    title: "Student Haircut",
    description: "Discounted haircut for students with valid ID. Same professional service at a reduced rate.",
    price: "£12"
  },
  {
    icon: <Baby className="h-8 w-8" />,
    title: "Kids (under 9)",
    description: "Gentle, professional haircuts for children under 9 years old with patience and care.",
    price: "£10"
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "Hair and Beard",
    description: "Complete grooming package: haircut and beard trim combination service.",
    price: "£20"
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Hot Towel & Steamer Add-on",
    description: "Luxurious hot towel treatment and steamer service to enhance any haircut.",
    price: "+£5"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Hair Special Design Add-on",
    description: "Custom hair designs and special styling to make your cut unique.",
    price: "+£5"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-barber-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-barber-gold mb-4">Our Services</h2>
          <p className="text-xl text-barber-light max-w-2xl mx-auto">Professional grooming services combining traditional barbering with contemporary style</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-barber-dark p-8 rounded-lg border border-barber-gold/20 hover:border-barber-gold/50 transition-colors fade-in">
              <div className="text-barber-gold mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-4">{service.title}</h3>
              <p className="text-barber-light mb-6">{service.description}</p>
              <div className="text-2xl font-bold text-barber-gold">{service.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
