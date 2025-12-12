import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const themes = [
  {
    name: "Coastal",
    description: "Light, airy tones inspired by Australian beaches",
    colors: ["#F5F5F0", "#E8E4DE", "#2F4F4F", "#87CEEB"],
    image: "/placeholder.svg"
  },
  {
    name: "Outback",
    description: "Warm earthy tones reflecting the Australian landscape",
    colors: ["#D2B48C", "#8B4513", "#2F4F4F", "#F5DEB3"],
    image: "/placeholder.svg"
  },
  {
    name: "Modern",
    description: "Sleek contemporary design with neutral accents",
    colors: ["#1A1A1A", "#F5F5F5", "#808080", "#2E8B57"],
    image: "/placeholder.svg"
  },
  {
    name: "Classic",
    description: "Timeless elegance with rich timber tones",
    colors: ["#8B4513", "#F5F5DC", "#2F2F2F", "#DAA520"],
    image: "/placeholder.svg"
  },
  {
    name: "Alpine",
    description: "Cool, sophisticated palette inspired by mountain retreats",
    colors: ["#E8E8E8", "#4A4A4A", "#006400", "#B0C4DE"],
    image: "/placeholder.svg"
  },
  {
    name: "Desert Rose",
    description: "Soft blush tones with natural accents",
    colors: ["#E8D4C4", "#C49A6C", "#8B4513", "#DEB887"],
    image: "/placeholder.svg"
  }
];

export default function ColourThemes() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Colour Themes
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Personalise your Equalizer RV with our curated interior colour themes. 
            Each palette has been carefully designed to complement our premium finishes.
          </p>
        </div>
      </section>

      {/* Themes Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themes.map((theme) => (
              <div
                key={theme.name}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={theme.image}
                    alt={theme.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {theme.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{theme.description}</p>
                  <div className="flex gap-2">
                    {theme.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-10 h-10 rounded-lg border border-border shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            See Them in Person
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
            Visit our showroom to experience our colour themes in the flesh. 
            Our team can help you choose the perfect palette for your lifestyle.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Book a Showroom Visit
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
