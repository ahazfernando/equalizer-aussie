"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const models = [
  {
    id: "cruzer",
    name: "Cruzer",
    route: "/models/cruzer",
    image: "/caravan/CruzerCaravan.png",
    logo: "/caravanlogos/CruzerLogo.png",
    description: "Perfect on-road model for touring in luxury! Designed to provide an unparalleled experience, combining functionality and style.",
    accentColor: "from-blue-500/20 to-blue-600/10",
    hoverColor: "hover:from-blue-500/30 hover:to-blue-600/20",
  },
  {
    id: "rebel",
    name: "Rebel",
    route: "/models/rebel",
    image: "/caravan/RebelCaravan.png",
    logo: "/caravanlogos/RebelLogo.png",
    description: "This semi-offroad model is the ideal choice for those seeking to explore both on and off-road in style",
    accentColor: "from-yellow-500/20 to-yellow-600/10",
    hoverColor: "hover:from-yellow-500/30 hover:to-yellow-600/20",
  },
  {
    id: "rogue",
    name: "Rogue",
    route: "/models/rogue",
    image: "/caravan/RogueCaravan.png",
    logo: "/caravanlogos/RogueLogo.png",
    description: "Ultimate off-road caravan designed for those that enjoy exploring locations off the beaten track.",
    accentColor: "from-green-500/20 to-green-600/10",
    hoverColor: "hover:from-green-500/30 hover:to-green-600/20",
  },
];

export function ModelSelector() {
  return (
    <section className="section-padding bg-gradient-to-b from-background via-background to-muted/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Explore Our Models
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            CHOOSE YOUR{" "}
            <span className="text-accent relative inline-block">
              CARAVAN
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
            </span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
            As a customisation expert we cater for everyone&apos;s needs, whether it&apos;s 
            tackling the Gibb River Road, heading to the Cape or going on that Christmas 
            holiday at the caravan park.
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: false,
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {models.map((model, index) => (
                <CarouselItem
                  key={model.id}
                  className="pl-2 md:pl-4 basis-full md:basis-1/3"
                >
                  <Link
                    href={model.route}
                    className="group block h-full"
                  >
                    <div className="h-full relative overflow-hidden rounded-2xl transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:shadow-2xl">
                      {/* Gradient overlay that appears on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${model.accentColor} ${model.hoverColor} transition-all duration-500 rounded-2xl opacity-0 group-hover:opacity-100 z-10`} />
                      
                      {/* Content wrapper */}
                      <div className="relative z-20 h-full flex flex-col">
                        {/* Image container with enhanced styling */}
                        <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-gradient-to-b from-muted/5 to-transparent">
                          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                          <Image
                            src={model.image}
                            alt={`${model.name} Caravan`}
                            fill
                            className="object-contain p-4 md:p-8 group-hover:scale-110 transition-all duration-700 ease-out"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            priority={index === 0}
                          />
                          {/* Shine effect on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                        </div>

                        {/* Content section */}
                        <div className="p-6 md:p-8 space-y-5 bg-background/80 backdrop-blur-sm group-hover:bg-background/95 transition-all duration-500">
                          {/* Logo with animation */}
                          <div className="relative h-14 md:h-20 w-full transform group-hover:scale-105 transition-transform duration-500">
                            <Image
                              src={model.logo}
                              alt={`${model.name} Logo`}
                              fill
                              className="object-contain object-left"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                          </div>

                          {/* Description with better typography */}
                          <p className="text-muted-foreground leading-relaxed text-sm md:text-base group-hover:text-foreground/90 transition-colors duration-500">
                            {model.description}
                          </p>

                          {/* CTA Button */}
                          <div className="pt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-between group/btn hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                              onClick={(e) => e.preventDefault()}
                            >
                              <span>Explore {model.name}</span>
                              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Border glow effect */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/30 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-14 h-12 w-12 rounded-full bg-background/90 backdrop-blur-md border-2 border-border hover:bg-background hover:border-accent/50 hover:scale-110 transition-all duration-300 shadow-lg" />
            <CarouselNext className="right-2 md:-right-14 h-12 w-12 rounded-full bg-background/90 backdrop-blur-md border-2 border-border hover:bg-background hover:border-accent/50 hover:scale-110 transition-all duration-300 shadow-lg" />
          </Carousel>
        </div>

        {/* Decorative dots indicator */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {models.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-muted-foreground/30 group-hover:bg-accent transition-colors duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

