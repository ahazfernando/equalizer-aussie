import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { getModelById, models } from "@/data/models";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ArrowLeft, Zap, Truck, UtensilsCrossed, Home, Tent, Droplets } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Truck,
  UtensilsCrossed,
  Home,
  Tent,
  Droplets,
};

export default function ModelDetail() {
  const { id } = useParams<{ id: string }>();
  const model = getModelById(id || "");

  if (!model) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-heading font-bold mb-4">Model Not Found</h1>
            <Link to="/models">
              <Button>View All Models</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src={model.heroImage}
            alt={model.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8">
          <Link 
            to="/models" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Models
          </Link>
          
          <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-accent font-medium mb-2">{model.tagline}</p>
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-4">
                  {model.name}
                </h1>
                <p className="text-muted-foreground max-w-2xl text-lg">
                  {model.description}
                </p>
              </div>
              <div className="text-right">
                <p className="text-muted-foreground text-sm">Starting from</p>
                <p className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  From ${model.price.toLocaleString()}
                </p>
                <p className="text-muted-foreground text-sm">*Drive away pricing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {model.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-accent" />
                </div>
                <span className="font-medium text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-accent font-medium mb-2 uppercase tracking-wide">
              Detailed Specifications
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Every Detail Matters
            </h2>
          </div>

          <Tabs defaultValue={model.specifications[0]?.category.toLowerCase()} className="w-full">
            <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent p-0 h-auto flex-wrap gap-2 mb-8">
              {model.specifications.map((spec) => {
                const IconComponent = iconMap[spec.icon];
                return (
                  <TabsTrigger
                    key={spec.category}
                    value={spec.category.toLowerCase()}
                    className="flex items-center gap-2 px-4 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-accent bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    {spec.category}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {model.specifications.map((spec) => (
              <TabsContent key={spec.category} value={spec.category.toLowerCase()}>
                <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {spec.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 py-3 border-b border-border/50 last:border-0"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Make the {model.name} Yours?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Book a viewing at our showroom or get in touch to discuss your perfect setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Book a Viewing
              </Button>
            </Link>
            <Link to="/build">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Build Your {model.name}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Other Models */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">
            Explore Other Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {models
              .filter((m) => m.id !== model.id)
              .map((otherModel) => (
                <Link
                  key={otherModel.id}
                  to={`/models/${otherModel.id}`}
                  className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={otherModel.heroImage}
                      alt={otherModel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-accent text-sm font-medium">{otherModel.tagline}</p>
                    <h3 className="text-xl font-heading font-bold text-foreground mt-1">
                      {otherModel.name}
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      From ${otherModel.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
