export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-barber-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-barber-gold mb-6">About Barber 36</h2>
            <p className="text-lg text-barber-light mb-6">
              Our team of skilled barbers are dedicated to providing an experience that combines traditional barbering with contemporary style. Step into our shop and let us redefine your grooming routine.
            </p>
            <p className="text-lg text-barber-light mb-8">
              Located in the heart of Sutton Coldfield, we've been serving the community with exceptional grooming services. Every cut is crafted with precision, every shave is executed with care, and every client leaves feeling confident and refreshed.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-barber-gold mb-2">5+</div>
                <div className="text-barber-light">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-barber-gold mb-2">1000+</div>
                <div className="text-barber-light">Happy Clients</div>
              </div>
            </div>
          </div>
          <div className="fade-in">
            <img 
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional barber at work" 
              className="rounded-lg shadow-2xl w-full" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
