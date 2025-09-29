import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Menu = () => {
  const menuData = {
    food: [
      {
        name: "Avocado Toast Deluxe",
        description: "House-made sourdough, smashed avocado, cherry tomatoes, feta, microgreens",
        price: "75K",
        badges: ["V", "GF*"]
      },
      {
        name: "Bali Bowl",
        description: "Coconut rice, grilled tofu, vegetables, peanut sauce, fried shallots",
        price: "85K",
        badges: ["VG", "GF"]
      },
      {
        name: "Nasi Goreng Kampung",
        description: "Traditional Indonesian fried rice, free-range egg, keropok, pickles",
        price: "65K",
        badges: ["GF*"]
      },
      {
        name: "Smoothie Bowl",
        description: "Acai, banana, coconut, granola, fresh fruits, chia seeds",
        price: "70K",
        badges: ["VG", "GF"]
      },
      {
        name: "Grilled Fish Tacos",
        description: "Fresh catch of the day, cabbage slaw, sriracha mayo, lime",
        price: "95K",
        badges: ["GF*"]
      },
      {
        name: "Croissant & Jam",
        description: "Buttery French croissant with house-made tropical fruit jam",
        price: "45K",
        badges: ["V"]
      }
    ],
    drinks: [
      {
        name: "Single Origin Pour Over",
        description: "Rotating selection of premium Indonesian coffee beans",
        price: "50K",
        badges: ["VG"]
      },
      {
        name: "Dirty Chai Latte",
        description: "Spiced chai blend with espresso shot, steamed oat milk",
        price: "55K",
        badges: ["VG*"]
      },
      {
        name: "Coconut Flat White",
        description: "Double espresso with steamed coconut milk, house signature",
        price: "48K",
        badges: ["VG"]
      },
      {
        name: "Tropical Green Smoothie",
        description: "Spinach, mango, pineapple, coconut water, chia seeds",
        price: "65K",
        badges: ["VG", "GF"]
      },
      {
        name: "Cold Brew Tonic",
        description: "House cold brew, tonic water, orange peel, refreshing twist",
        price: "52K",
        badges: ["VG"]
      },
      {
        name: "Fresh Coconut Water",
        description: "Straight from the shell, naturally hydrating",
        price: "35K",
        badges: ["VG", "GF"]
      }
    ]
  };

  const badgeColors = {
    "V": "bg-accent text-accent-foreground",
    "VG": "bg-primary text-primary-foreground",
    "GF": "bg-secondary text-secondary-foreground",
    "GF*": "bg-muted text-muted-foreground"
  };

  const MenuCard = ({ item }: { item: any }) => (
    <Card className="p-6 hover-lift border-none bg-card">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-card-title text-foreground">{item.name}</h3>
        <span className="font-display text-xl font-bold text-primary">{item.price}</span>
      </div>
      <p className="text-muted-foreground mb-4">{item.description}</p>
      <div className="flex gap-2">
        {item.badges.map((badge: string) => (
          <Badge 
            key={badge} 
            variant="secondary" 
            className={badgeColors[badge as keyof typeof badgeColors] || "bg-muted"}
          >
            {badge}
          </Badge>
        ))}
      </div>
    </Card>
  );

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section text-foreground mb-4">
            Our Menu
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Crafted with love using fresh, locally-sourced ingredients. 
            Every dish tells a story of Bali's rich culinary heritage.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <span><Badge className="bg-accent text-accent-foreground mr-1">V</Badge> Vegetarian</span>
            <span><Badge className="bg-primary text-primary-foreground mr-1">VG</Badge> Vegan</span>
            <span><Badge className="bg-secondary text-secondary-foreground mr-1">GF</Badge> Gluten Free</span>
            <span><Badge className="bg-muted text-muted-foreground mr-1">GF*</Badge> Gluten Free Option</span>
          </div>
        </div>

        <Tabs defaultValue="food" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="food" className="text-lg">Food</TabsTrigger>
            <TabsTrigger value="drinks" className="text-lg">Drinks</TabsTrigger>
          </TabsList>

          <TabsContent value="food">
            <div className="grid md:grid-cols-2 gap-6">
              {menuData.food.map((item, index) => (
                <MenuCard key={index} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="drinks">
            <div className="grid md:grid-cols-2 gap-6">
              {menuData.drinks.map((item, index) => (
                <MenuCard key={index} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;