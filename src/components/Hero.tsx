import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cafe-interior.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful interior of Miel.Bali Cafe with natural lighting and tropical plants"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-hero text-white mb-6">
            Welcome to
            <span className="block text-primary">Miel.Bali</span>
          </h1>
          <p className="text-body-large text-white/90 mb-8 max-w-2xl mx-auto">
            Where tropical warmth meets artisanal coffee. A sanctuary for digital nomads, 
            coffee enthusiasts, and those seeking authentic Balinese hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg" 
              className="text-lg px-8 py-4 hover-lift"
            >
              View Our Menu
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-4 hover-lift"
            >
              Book a Table
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;