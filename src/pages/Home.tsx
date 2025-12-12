import { Link } from "react-router-dom";
import { ArrowRight, Shield, Wrench, Award, MapPin, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { CaravanCard } from "@/components/caravans/CaravanCard";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { getFeaturedCaravans } from "@/data/caravans";
import { reviews } from "@/data/reviews";
import heroImage from "@/assets/hero-caravan.jpg";
import lifestyleImage1 from "@/assets/caravan-lifestyle-1.jpg";
import lifestyleImage2 from "@/assets/caravan-lifestyle-2.jpg";

const trustPillars = [
  {
    icon: Shield,
    title: "5-Year Warranty",
    description: "Industry-leading coverage for complete peace of mind on the road.",
  },
  {
    icon: Wrench,
    title: "Australian Made",
    description: "Designed and built right here in Australia for our unique conditions.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognised for excellence in design, quality and innovation.",
  },
  {
    icon: MapPin,
    title: "Nationwide Service",
    description: "Network of authorised service centres across the country.",
  },
];

export default function Home() {
  const featuredCaravans = getFeaturedCaravans();
  const featuredReviews = reviews.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium Equalizer RV Caravan in Australian landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent-foreground text-sm font-medium">
                Australian Designed & Engineered
              </span>
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground hero-text-shadow leading-tight">
              Adventure Awaits.<br />
              <span className="text-accent">Travel in Luxury.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-xl leading-relaxed">
              Experience the freedom of the open road in a caravan built for Australian 
              conditions. Premium quality, exceptional comfort, unforgettable journeys.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/caravans">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
                  Explore Our Range
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8">
                  Book a Viewing
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" />
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="trust-badge animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <pillar.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Caravans */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div>
              <p className="text-accent font-medium mb-2">Our Range</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                Featured Caravans
              </h2>
              <p className="text-muted-foreground mt-2 max-w-lg">
                Discover our most popular models, each designed for different adventures 
                and lifestyles.
              </p>
            </div>
            <Link
              to="/caravans"
              className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
            >
              View All Models
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCaravans.map((caravan, index) => (
              <div
                key={caravan.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CaravanCard caravan={caravan} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-accent font-medium mb-2">The Equalizer Difference</p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight">
                  Built for Australia.<br />
                  Designed for You.
                </h2>
              </div>
              
              <p className="text-primary-foreground/80 leading-relaxed">
                Every Equalizer RV is engineered from the ground up to handle 
                Australia's diverse terrain and climate. From the red dust of the 
                outback to the salt spray of coastal highways, our caravans are 
                built to go wherever your adventure takes you.
              </p>

              <ul className="space-y-4">
                {[
                  "Heavy-duty chassis and suspension systems",
                  "Premium Australian-sourced materials",
                  "Comprehensive off-grid capability",
                  "Thoughtful, practical layouts",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <ChevronRight className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/about">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Learn Our Story
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src={lifestyleImage1}
                    alt="Caravan adventure in Australian outback"
                    className="rounded-2xl w-full aspect-[3/4] object-cover"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src={lifestyleImage2}
                    alt="Couple relaxing by their caravan at sunset"
                    className="rounded-2xl w-full aspect-[3/4] object-cover"
                  />
                </div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="font-heading text-3xl font-bold text-accent">500+</p>
                    <p className="text-sm text-muted-foreground">Happy Owners</p>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="text-center">
                    <p className="font-heading text-3xl font-bold text-foreground">15+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent font-medium mb-2">Customer Stories</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              What Our Owners Say
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-muted-foreground">4.9 average from 50+ reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredReviews.map((review, index) => (
              <div
                key={review.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/reviews">
              <Button variant="outline" size="lg">
                Read All Reviews
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8">
            Visit our showroom to experience the Equalizer difference in person. 
            Our team is ready to help you find the perfect caravan for your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Book a Viewing
              </Button>
            </Link>
            <Link to="/build">
              <Button size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 px-8">
                Build Your Dream RV
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
