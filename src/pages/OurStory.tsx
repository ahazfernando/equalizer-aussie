import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Wrench, Heart } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "Every caravan is built to exceed Australian standards with premium materials and meticulous craftsmanship."
  },
  {
    icon: Wrench,
    title: "Australian Made",
    description: "Proudly designed and manufactured in Australia, built specifically for Australian conditions."
  },
  {
    icon: Users,
    title: "Family Business",
    description: "We're a family-owned company that treats every customer like family."
  },
  {
    icon: Heart,
    title: "Passionate Team",
    description: "Our team are caravan enthusiasts who understand what adventurers need."
  }
];

const timeline = [
  {
    year: "2010",
    title: "The Beginning",
    description: "Started as a small workshop with a dream to build better caravans for Australian adventurers."
  },
  {
    year: "2015",
    title: "Growing Strong",
    description: "Expanded our facility and introduced our first off-road capable range."
  },
  {
    year: "2019",
    title: "Innovation",
    description: "Launched our signature suspension system and began solar integration."
  },
  {
    year: "2024",
    title: "Today",
    description: "Industry leaders in quality and innovation, serving adventurers across Australia."
  }
];

export default function OurStory() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our Story
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            The journey of Equalizer RV - from a passion project to Australia's trusted caravan manufacturer.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Built for Australian Adventure
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Equalizer RV was born from a simple frustration: the lack of caravans truly built 
                  for Australian conditions. Our founders, seasoned travellers themselves, knew that 
                  exploring this vast, beautiful country required something special.
                </p>
                <p>
                  We set out to create caravans that could handle corrugated outback roads, withstand 
                  extreme temperatures, and still provide the comfort of home after a long day's adventure. 
                  Every Equalizer is designed with one question in mind: would we take this on our own journey?
                </p>
                <p>
                  Today, we're proud to see Equalizer RVs exploring every corner of Australia - from 
                  the red centre to coastal paradises, from alpine escapes to tropical adventures.
                </p>
              </div>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Equalizer RV workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">
                      {item.year.slice(-2)}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-accent font-medium">{item.year}</p>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Start Your Adventure
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Come visit our showroom and see the Equalizer difference for yourself.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
