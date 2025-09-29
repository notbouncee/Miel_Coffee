import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Clock, Phone, Instagram, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Request Sent!",
      description: "We'll confirm your booking within 2 hours. Thank you!",
    });
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      guests: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      info: "Jl. Pantai Batu Bolong No. 88",
      detail: "Canggu, Bali 80361"
    },
    {
      icon: Clock,
      title: "Opening Hours",
      info: "Daily: 7:00 AM - 10:00 PM",
      detail: "Extended hours on weekends"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+62 361 123 4567",
      detail: "WhatsApp available"
    },
    {
      icon: Instagram,
      title: "Social Media",
      info: "@miel.bali",
      detail: "Follow for daily updates"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section text-foreground mb-4">
            Visit Us
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Ready to experience Miel.Bali? Reserve your table or simply drop by. 
            We're here to make your visit memorable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="p-6 border-none bg-card hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm font-medium text-foreground">{item.info}</p>
                      <p className="text-xs text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="p-6 border-none bg-card">
              <div className="aspect-video bg-gradient-subtle rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-foreground font-semibold">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">
                    Located in the heart of Canggu
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Reservation Form */}
          <Card className="p-8 border-none bg-card">
            <div className="mb-6">
              <h3 className="text-card-title text-foreground mb-2">
                Book a Table
              </h3>
              <p className="text-muted-foreground">
                Secure your spot for the perfect cafe experience
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="guests">Guests</Label>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="12"
                    value={formData.guests}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Special Requests (Optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Any dietary requirements or special occasions?"
                />
              </div>

              <Button type="submit" size="lg" className="w-full hover-lift">
                Reserve Table
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;