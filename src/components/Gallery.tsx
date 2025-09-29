import heroImage from "@/assets/hero-cafe-interior.jpg";
import outdoorSeating from "@/assets/outdoor-seating.jpg";
import coffeeDrinks from "@/assets/coffee-drinks.jpg";
import featuredFood from "@/assets/featured-food.jpg";

const Gallery = () => {
  const images = [
    {
      src: heroImage,
      alt: "Modern Balinese cafe interior with natural lighting",
      title: "Main Dining Area"
    },
    {
      src: outdoorSeating,
      alt: "Cozy outdoor patio with tropical plants",
      title: "Garden Patio"
    },
    {
      src: coffeeDrinks,
      alt: "Specialty coffee drinks with beautiful latte art",
      title: "Artisan Coffee"
    },
    {
      src: featuredFood,
      alt: "Healthy breakfast and coffee spread",
      title: "Fresh Cuisine"
    }
  ];

  return (
    <section id="space" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section text-foreground mb-4">
            Our Space
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            A thoughtfully designed environment that seamlessly blends work and relaxation. 
            Discover corners that inspire creativity and spaces that foster connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg hover-lift"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white font-display text-2xl font-semibold">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary text-2xl">📶</span>
            </div>
            <h3 className="font-display font-semibold mb-2">Fast Wi-Fi</h3>
            <p className="text-sm text-muted-foreground">High-speed internet</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary text-2xl">🔌</span>
            </div>
            <h3 className="font-display font-semibold mb-2">Power Outlets</h3>
            <p className="text-sm text-muted-foreground">Every seat powered</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary text-2xl">🐕</span>
            </div>
            <h3 className="font-display font-semibold mb-2">Pet-Friendly</h3>
            <p className="text-sm text-muted-foreground">Outdoor patio welcome</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary text-2xl">❄️</span>
            </div>
            <h3 className="font-display font-semibold mb-2">AC & Fan</h3>
            <p className="text-sm text-muted-foreground">Perfect temperature</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;