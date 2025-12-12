export interface CaravanSpec {
  category: string;
  icon: string;
  items: string[];
}

export interface Caravan {
  id: string;
  name: string;
  series: string;
  tagline: string;
  price: number;
  length: string;
  berth: number;
  tare: string;
  atm: string;
  features: string[];
  highlights: string[];
  description: string;
  images: string[];
  specs: CaravanSpec[];
  variants: { name: string; priceModifier: number }[];
  available: boolean;
  featured: boolean;
}

export const caravans: Caravan[] = [
  {
    id: "cruzer",
    name: "Cruzer",
    series: "Cruzer",
    tagline: "The Perfect Entry Point",
    price: 89990,
    length: "21ft",
    berth: 2,
    tare: "2,450kg",
    atm: "3,200kg",
    highlights: [
      "Compact yet spacious design",
      "Off-road capable suspension",
      "Solar power ready",
      "Premium kitchen package"
    ],
    features: [
      "Queen Island Bed",
      "Full Ensuite",
      "Diesel Heater",
      "200W Solar",
      "150L Fresh Water",
      "LED Lighting Throughout"
    ],
    description: "The Cruzer combines compact convenience with premium features, making it the ideal choice for couples and weekend adventurers seeking quality without compromise.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specs: [
      {
        category: "Electrical",
        icon: "Zap",
        items: [
          "200W Solar Panel",
          "200Ah Lithium Battery",
          "2000W Inverter/Charger",
          "30A DC-DC Charger",
          "LED Strip Lighting Throughout",
          "USB Charging Points x6",
          "12V/240V Power Outlets",
          "Battery Management System"
        ]
      },
      {
        category: "Chassis",
        icon: "Truck",
        items: [
          "Hot-dipped galvanised chassis",
          "Independent coil suspension",
          "Off-road tyres 265/75R16",
          "Spare wheel & carrier",
          "DO35 coupling",
          "Dual shock absorbers",
          "Stone guard protection",
          "Recovery points front & rear"
        ]
      },
      {
        category: "Appliances",
        icon: "UtensilsCrossed",
        items: [
          "190L 3-way fridge",
          "4 burner gas cooktop",
          "Grill oven combo",
          "Rangehood with light",
          "Microwave cavity",
          "Diesel heater",
          "Dometic air conditioner",
          "TV bracket with 12V point"
        ]
      },
      {
        category: "Internal",
        icon: "Home",
        items: [
          "Queen island bed",
          "Innerspring mattress",
          "Overhead storage lockers",
          "Full-height wardrobe",
          "Dinette seating area",
          "Premium vinyl flooring",
          "Block-out blinds",
          "USB points at bedhead"
        ]
      },
      {
        category: "External",
        icon: "Sun",
        items: [
          "Roll-out awning 4m",
          "External shower",
          "Gas bayonet",
          "Picnic table rail",
          "LED awning strip",
          "External speakers",
          "Jerry can holders x2",
          "Mud flaps"
        ]
      },
      {
        category: "Plumbing",
        icon: "Droplets",
        items: [
          "150L fresh water tank",
          "100L grey water tank",
          "20L gas hot water",
          "Water tank gauge",
          "Mains water inlet",
          "Water pump with filter",
          "External tap",
          "Toilet cassette"
        ]
      }
    ],
    variants: [
      { name: "Standard", priceModifier: 0 },
      { name: "Off-Road Pack", priceModifier: 8500 },
      { name: "Premium Interior", priceModifier: 5500 }
    ],
    available: true,
    featured: true
  },
  {
    id: "rebel",
    name: "Rebel",
    series: "Rebel",
    tagline: "Built for Adventure",
    price: 119990,
    length: "23ft",
    berth: 4,
    tare: "2,850kg",
    atm: "3,500kg",
    highlights: [
      "Extreme off-road capability",
      "Extended battery capacity",
      "Family-friendly layout",
      "External slide-out kitchen"
    ],
    features: [
      "Off-Road Suspension",
      "Dual Batteries",
      "300W Solar",
      "External Kitchen",
      "Kids Bunks",
      "Premium Audio System"
    ],
    description: "The Rebel is designed for families who want to explore Australia's rugged beauty without sacrificing comfort. With genuine off-road capability and smart family-friendly layouts, this caravan opens up a world of adventure.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specs: [
      {
        category: "Electrical",
        icon: "Zap",
        items: [
          "300W Solar Panel",
          "400Ah Lithium Battery",
          "3000W Inverter/Charger",
          "40A DC-DC Charger",
          "LED Strip Lighting Throughout",
          "USB Charging Points x8",
          "12V/240V Power Outlets",
          "Smart Battery Management"
        ]
      },
      {
        category: "Chassis",
        icon: "Truck",
        items: [
          "Heavy-duty galvanised chassis",
          "Cruisemaster XT suspension",
          "All-terrain tyres 285/75R16",
          "Dual spare wheels",
          "DO35 coupling",
          "Triple shock absorbers",
          "Full underbody protection",
          "Recovery points x4"
        ]
      },
      {
        category: "Appliances",
        icon: "UtensilsCrossed",
        items: [
          "220L compressor fridge",
          "4 burner gas cooktop",
          "Full oven",
          "Rangehood with extractor",
          "Microwave included",
          "Diesel heater",
          "Rooftop air conditioner",
          "32\" Smart TV"
        ]
      },
      {
        category: "Internal",
        icon: "Home",
        items: [
          "Queen island bed",
          "Triple bunk system",
          "Premium innerspring mattress",
          "Full-height wardrobes x2",
          "Club lounge seating",
          "Premium timber flooring",
          "Day/night blinds",
          "Internal entertainment system"
        ]
      },
      {
        category: "External",
        icon: "Sun",
        items: [
          "Dometic awning 5m",
          "Slide-out BBQ kitchen",
          "External fridge slide",
          "Dual gas bayonets",
          "LED strip lighting",
          "Bluetooth speakers",
          "Jerry can holders x4",
          "Bike rack mounts"
        ]
      },
      {
        category: "Plumbing",
        icon: "Droplets",
        items: [
          "200L fresh water tank",
          "150L grey water tank",
          "Gas/Electric hot water",
          "Digital tank gauges",
          "Mains water inlet",
          "Dual pump system",
          "External shower hot/cold",
          "Cassette toilet"
        ]
      }
    ],
    variants: [
      { name: "Standard", priceModifier: 0 },
      { name: "Bunk Layout", priceModifier: 3500 },
      { name: "Extreme Off-Road", priceModifier: 12000 }
    ],
    available: true,
    featured: true
  },
  {
    id: "rogue",
    name: "Rogue",
    series: "Rogue",
    tagline: "The Ultimate Touring Experience",
    price: 149990,
    length: "25ft",
    berth: 2,
    tare: "3,100kg",
    atm: "3,800kg",
    highlights: [
      "Full slide-out living",
      "Residential kitchen",
      "Premium finishes throughout",
      "Ultimate off-grid capability"
    ],
    features: [
      "Full Slide-Out",
      "Residential Kitchen",
      "Separate Lounge",
      "400W Solar",
      "Washing Machine Ready",
      "Club Lounge"
    ],
    description: "The Rogue redefines what's possible in touring comfort. With an innovative slide-out design, you'll enjoy residential-sized living space while parked, then effortlessly pack down for the road ahead.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specs: [
      {
        category: "Electrical",
        icon: "Zap",
        items: [
          "400W Solar Panel",
          "600Ah Lithium Battery",
          "5000W Inverter/Charger",
          "50A DC-DC Charger",
          "Smart LED Lighting",
          "USB-C Fast Charging x10",
          "12V/240V Power Throughout",
          "Victron Battery System"
        ]
      },
      {
        category: "Chassis",
        icon: "Truck",
        items: [
          "Premium galvanised chassis",
          "Cruisemaster ATX suspension",
          "Cooper AT3 tyres 285/75R16",
          "Dual spare wheels",
          "DO35 premium coupling",
          "Quad shock absorbers",
          "Checker plate underbody",
          "Integrated recovery kit"
        ]
      },
      {
        category: "Appliances",
        icon: "UtensilsCrossed",
        items: [
          "280L compressor fridge",
          "Induction cooktop",
          "Full-size oven",
          "Premium rangehood",
          "Convection microwave",
          "Truma diesel heating",
          "Dual zone air conditioning",
          "43\" Smart TV with satellite"
        ]
      },
      {
        category: "Internal",
        icon: "Home",
        items: [
          "King island bed",
          "Pillow-top mattress",
          "Walk-in wardrobe",
          "Full-size bathroom",
          "Leather club lounge",
          "Engineered timber flooring",
          "Electric blinds",
          "Surround sound system"
        ]
      },
      {
        category: "External",
        icon: "Sun",
        items: [
          "Thule awning 6m",
          "Full outdoor kitchen",
          "Dual fridge slides",
          "Multiple gas bayonets",
          "Programmable LED lighting",
          "Marine-grade speakers",
          "Storage boxes x4",
          "Rear view camera system"
        ]
      },
      {
        category: "Plumbing",
        icon: "Droplets",
        items: [
          "250L fresh water tank",
          "180L grey water tank",
          "Continuous hot water",
          "Smart tank monitoring",
          "Water filtration system",
          "Premium pump system",
          "Dual external showers",
          "Ceramic toilet"
        ]
      }
    ],
    variants: [
      { name: "Standard", priceModifier: 0 },
      { name: "Luxury Pack", priceModifier: 15000 },
      { name: "Tech Package", priceModifier: 8000 }
    ],
    available: true,
    featured: true
  }
];

export const getFeaturedCaravans = () => caravans.filter(c => c.featured);
export const getCaravanById = (id: string) => caravans.find(c => c.id === id);
export const getCaravansBySeries = (series: string) => caravans.filter(c => c.series === series);
