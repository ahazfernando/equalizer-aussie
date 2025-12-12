import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { FinanceCalculator } from "@/components/finance/FinanceCalculator";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { getCaravanById } from "@/data/caravans";
import { getReviewsByCaravan, getAverageRating } from "@/data/reviews";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Phone, Calendar, Zap, Truck, UtensilsCrossed, Home, Sun, Droplets, ChevronLeft } from "lucide-react";
import heroCaravan from "@/assets/hero-caravan.jpg";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Zap,
  Truck,
  UtensilsCrossed,
  Home,
  Sun,
  Droplets,
};

export default function ModelDetail() {
  const { id } = useParams();
  const caravan = getCaravanById(id || "");
  const reviews = getReviewsByCaravan(id || "");
  const rating = getAverageRating(id || "");

  if (!caravan) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Model Not Found</h1>
          <Link to="/" className="text-accent hover:underline">
            Back to Home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroCaravan})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
        
        {/* Back Link */}
        <Link
          to="/"
          className="absolute top-24 left-6 text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1 z-10"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to All Models
        </Link>

        {/* Hero Content Card */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="bg-background rounded-t-3xl p-8 md:p-12 max-w-5xl mx-auto shadow-lg">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <span className="text-accent font-medium text-sm tracking-wide">
                  {caravan.tagline}
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2">
                  {caravan.name}
                </h1>
                <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
                  {caravan.description}
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-sm text-muted-foreground">Starting from</span>
                <p className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  From ${caravan.price.toLocaleString()}
                </p>
                <span className="text-xs text-muted-foreground">*Drive away pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {caravan.highlights?.map((highlight, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-background rounded-xl p-4 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-accent font-medium text-sm tracking-wide uppercase">
              Detailed Specifications
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Every Detail Matters
            </h2>
          </div>

          <Tabs defaultValue={caravan.specs[0]?.category.toLowerCase()} className="space-y-8">
            <TabsList className="w-full justify-start overflow-x-auto border-b rounded-none bg-transparent p-0 flex-nowrap">
              {caravan.specs.map((spec) => {
                const IconComponent = iconMap[spec.icon] || Zap;
                return (
                  <TabsTrigger
                    key={spec.category}
                    value={spec.category.toLowerCase()}
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-accent data-[state=active]:bg-transparent flex items-center gap-2 px-6 py-4 whitespace-nowrap"
                  >
                    <IconComponent className="w-4 h-4" />
                    {spec.category}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {caravan.specs.map((spec) => (
              <TabsContent key={spec.category} value={spec.category.toLowerCase()} className="mt-8">
                <div className="bg-background border border-border rounded-2xl p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    {spec.items.map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 py-3 border-b border-border/50 last:border-0"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
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
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Ready to See the {caravan.name} in Person?
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a personal viewing at our showroom and experience the quality firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a Viewing
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Finance Calculator */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-accent font-medium text-sm tracking-wide uppercase">
              Finance Options
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Calculate Your Payments
            </h2>
          </div>
          <div className="max-w-xl mx-auto">
            <FinanceCalculator defaultPrice={caravan.price} />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      {reviews.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="text-accent font-medium text-sm tracking-wide uppercase">
                Customer Reviews
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
                What Our Customers Say
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.slice(0, 3).map((review) => (
                <ReviewCard key={review.id} review={review} showCaravanLink={false} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
