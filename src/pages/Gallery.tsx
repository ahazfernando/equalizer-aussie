import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import heroCaravan from "@/assets/hero-caravan.jpg";
import caravanInterior from "@/assets/caravan-interior.jpg";
import lifestyleImage1 from "@/assets/caravan-lifestyle-1.jpg";
import lifestyleImage2 from "@/assets/caravan-lifestyle-2.jpg";

const galleryImages = [
  { src: heroCaravan, alt: "Equalizer RV caravan coastal view", category: "Exterior" },
  { src: caravanInterior, alt: "Luxury caravan interior", category: "Interior" },
  { src: lifestyleImage1, alt: "Caravan adventure outback", category: "Lifestyle" },
  { src: lifestyleImage2, alt: "Sunset camping by the beach", category: "Lifestyle" },
  { src: heroCaravan, alt: "Premium caravan design", category: "Exterior" },
  { src: caravanInterior, alt: "Modern kitchen interior", category: "Interior" },
  { src: lifestyleImage1, alt: "Red centre adventure", category: "Lifestyle" },
  { src: lifestyleImage2, alt: "Coastal camping experience", category: "Lifestyle" },
];

const categories = ["All", "Exterior", "Interior", "Lifestyle"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-2">Media Gallery</p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
              See the Equalizer Difference
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our collection of images showcasing our caravans in action, 
              premium interiors, and the Australian adventures they enable.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <button
                    className="relative aspect-[4/3] rounded-xl overflow-hidden group animate-fade-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
                    <span className="absolute bottom-3 left-3 badge-sage opacity-0 group-hover:opacity-100 transition-opacity">
                      {image.category}
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl p-0 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
