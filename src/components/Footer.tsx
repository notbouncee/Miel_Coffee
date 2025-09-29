import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-4">Miel.Bali</h3>
            <p className="text-accent-foreground/80 mb-4 max-w-md">
              Where tropical warmth meets artisanal coffee. Creating spaces for 
              connection, creativity, and community in the heart of Canggu.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                Instagram
              </a>
              <a href="#" className="text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                WhatsApp
              </a>
              <a href="#" className="text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                Google Maps
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#space" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Our Space
                </a>
              </li>
              <li>
                <a href="#contact" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold mb-4">Visit Us</h4>
            <div className="space-y-2 text-accent-foreground/80">
              <p>Jl. Pantai Batu Bolong No. 88</p>
              <p>Canggu, Bali 80361</p>
              <p className="pt-2">Daily: 7:00 AM - 10:00 PM</p>
              <p>+62 361 123 4567</p>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center">
          <p className="text-accent-foreground/60 flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-current" />
            <span>in Bali © 2024 Miel.Bali</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;