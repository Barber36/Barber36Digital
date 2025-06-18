import { Scissors, UserCheck, Sparkles, Star, Baby, Users } from "lucide-react";

const services = [
  {
    icon: <Scissors className="h-8 w-8" />,
    title: "Classic Cut",
    description: "Traditional barbering techniques for timeless styles. Includes consultation, cut, and styling.",
    price: "£25"
  },
  {
    icon: <UserCheck className="h-8 w-8" />,
    title: "Beard Trim",
    description: "Professional beard shaping and trimming to complement your facial structure perfectly.",
    price: "£18"
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Hot Towel Shave",
    description: "Luxurious traditional wet shave with hot towel treatment for the ultimate experience.",
    price: "£30"
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "The Full Service",
    description: "Complete grooming package: cut, beard trim, hot towel shave, and styling.",
    price: "£55"
  },
  {
    icon: <Baby className="h-8 w-8" />,
    title: "Kids Cut",
    description: "Gentle, professional haircuts for children with patience and care.",
    price: "£20"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Wedding Prep",
    description: "Special occasion grooming for your big day. Includes consultation and trial run.",
    price: "£75"
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
