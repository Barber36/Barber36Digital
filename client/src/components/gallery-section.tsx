const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Modern professional haircut"
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Professional barber tools"
  },
  {
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Hot towel shave service"
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Barber shop interior"
  },
  
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Modern barber shop setup"
  }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-barber-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-barber-gold mb-4">Our Work</h2>
          <p className="text-xl text-barber-light max-w-2xl mx-auto">See the quality and craftsmanship that defines Barber 36</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="fade-in">
              <img 
                src={image.src}
                alt={image.alt}
                className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform cursor-pointer" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
