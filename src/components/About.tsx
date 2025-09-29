import { Card } from "@/components/ui/card";
import featuredFood from "@/assets/featured-food.jpg";

const About = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-section text-foreground">
              Where Coffee Meets
              <span className="text-accent block">Community</span>
            </h2>
            <p className="text-body-large text-muted-foreground">
              Nestled in the heart of Canggu, Miel.Bali is more than just a cafe - 
              it's a haven for creators, dreamers, and coffee lovers. Our space blends 
              traditional Balinese warmth with modern comfort, creating the perfect 
              environment for work, connection, and inspiration.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4 border-none bg-card hover-lift">
                <h3 className="font-display font-semibold text-lg mb-2 text-accent">
                  Fast Wi-Fi
                </h3>
                <p className="text-sm text-muted-foreground">
                  High-speed internet perfect for digital nomads and remote workers.
                </p>
              </Card>
              <Card className="p-4 border-none bg-card hover-lift">
                <h3 className="font-display font-semibold text-lg mb-2 text-accent">
                  Power Outlets
                </h3>
                <p className="text-sm text-muted-foreground">
                  Every table equipped with power outlets for all your devices.
                </p>
              </Card>
              <Card className="p-4 border-none bg-card hover-lift">
                <h3 className="font-display font-semibold text-lg mb-2 text-accent">
                  Pet-Friendly
                </h3>
                <p className="text-sm text-muted-foreground">
                  Bring your furry friends to our welcoming outdoor patio.
                </p>
              </Card>
              <Card className="p-4 border-none bg-card hover-lift">
                <h3 className="font-display font-semibold text-lg mb-2 text-accent">
                  Fresh Ingredients
                </h3>
                <p className="text-sm text-muted-foreground">
                  Locally sourced, organic ingredients in every dish and drink.
                </p>
              </Card>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={featuredFood}
              alt="Artisanal coffee and healthy breakfast at Miel.Bali Cafe"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover hover-lift"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
              <p className="font-display text-xl font-bold">Since 2023</p>
              <p className="text-sm">Serving Canggu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;