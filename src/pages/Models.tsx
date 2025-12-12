import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { models } from "@/data/models";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Models() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our Models
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover our range of premium Australian-made caravans, each designed for adventure without compromise.
          </p>
        </div>
      </section>

      {/* Models Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {models.map((model, index) => (
              <div
                key={model.id}
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-8 lg:gap-16 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <Link to={`/models/${model.id}`} className="block group">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img
                        src={model.heroImage}
                        alt={model.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                </div>
                <div className="w-full lg:w-1/2">
                  <p className="text-accent font-medium mb-2">{model.tagline}</p>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                    {model.name}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {model.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {model.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-6">
                    <div>
                      <p className="text-muted-foreground text-sm">Starting from</p>
                      <p className="text-2xl font-heading font-bold text-foreground">
                        ${model.price.toLocaleString()}
                      </p>
                    </div>
                    <Link to={`/models/${model.id}`}>
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Can't Decide?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Visit our showroom to see all models in person, or book a consultation with our team.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Book a Viewing
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
