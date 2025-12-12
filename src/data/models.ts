export interface ModelSpec {
  category: string;
  icon: string;
  items: string[];
}

export interface Model {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  heroImage: string;
  features: string[];
  specifications: ModelSpec[];
}

export const models: Model[] = [
  {
    id: "cruzer",
    name: "Cruzer",
    tagline: "The Perfect Entry Point",
    description: "The Cruzer combines compact convenience with premium features, making it the ideal choice for couples and weekend adventurers seeking quality without compromise.",
    price: 89990,
    heroImage: "/placeholder.svg",
    features: [
      "Compact yet spacious design",
      "Off-road capable suspension",
      "Solar power ready",
      "Premium kitchen package"
    ],
    specifications: [
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
          "Heavy-Duty Steel Chassis",
          "Independent Coil Suspension",
          "Electric Brakes",
          "Spare Wheel Carrier",
          "Mud Flaps",
          "Stone Guard Protection",
          "DO35 Coupling",
          "Heavy-Duty Jockey Wheel"
        ]
      },
      {
        category: "Appliances",
        icon: "UtensilsCrossed",
        items: [
          "190L 3-Way Fridge",
          "4 Burner Gas Cooktop",
          "Griller/Oven",
          "Rangehood with LED",
          "Microwave",
          "Diesel Heater",
          "Hot Water System",
          "Washing Machine Ready"
        ]
      },
      {
        category: "Internal",
        icon: "Home",
        items: [
          "Queen Size Bed",
          "Innerspring Mattress",
          "Full Height Wardrobe",
          "Overhead Storage",
          "Club Lounge Seating",
          "Dining Table",
          "Premium Vinyl Flooring",
          "Insulated Walls & Ceiling"
        ]
      },
      {
        category: "External",
        icon: "Tent",
        items: [
          "Roll-Out Awning",
          "LED Awning Lights",
          "External Speakers",
          "Storage Compartment",
          "Jerry Can Holders",
          "Gas Bottle Holders x2",
          "External Shower",
          "Checker Plate Protection"
        ]
      },
      {
        category: "Plumbing",
        icon: "Droplets",
        items: [
          "150L Fresh Water Tank",
          "100L Grey Water Tank",
          "12V Water Pump",
          "Water Tank Gauge",
          "Thetford Cassette Toilet",
          "Full Ensuite Bathroom",
          "Vanity with Mirror",
          "Hot & Cold Mixer Taps"
        ]
      }
    ]
  },
  {
    id: "rebel",
    name: "Rebel",
    tagline: "Break Free from the Ordinary",
    description: "The Rebel is engineered for those who refuse to follow the crowd. With enhanced off-road capabilities and rugged durability, this caravan is built to take you where others can't go.",
    price: 109990,
    heroImage: "/placeholder.svg",
    features: [
      "True off-road capability",
      "Extended water capacity",
      "Heavy-duty construction",
      "Adventure-ready package"
    ],
    specifications: [
      {
        category: "Electrical",
        icon: "Zap",
        items: [
          "300W Solar Panel",
          "300Ah Lithium Battery",
          "3000W Inverter/Charger",
          "40A DC-DC Charger",
          "LED Strip Lighting Throughout",
          "USB Charging Points x8",
          "12V/240V Power Outlets",
          "Victron Battery Monitor"
        ]
      },
      {
        category: "Chassis",
        icon: "Truck",
        items: [
          "Extra Heavy-Duty Chassis",
          "Cruisemaster XT Suspension",
          "Electric Drum Brakes",
          "Dual Spare Wheel Carriers",
          "Heavy-Duty Mud Flaps",
          "Full Checker Plate",
          "DO35 Coupling",
          "Treg Jockey Wheel"
        ]
      },
      {
        category: "Appliances",
        icon: "UtensilsCrossed",
        items: [
          "225L Compressor Fridge",
          "4 Burner Gas Cooktop",
          "Oven with Griller",
          "Rangehood with LED",
          "Microwave",
          "Diesel Heater",
          "Instant Gas Hot Water",
          "Washing Machine Included"
        ]
      },
      {
        category: "Internal",
        icon: "Home",
        items: [
          "King Size Bed",
          "Pillow Top Mattress",
          "Double Full Height Wardrobe",
          "Overhead Storage Throughout",
          "L-Shaped Lounge",
          "Café Dining",
          "Hybrid Flooring",
          "Full Insulation Package"
        ]
      },
      {
        category: "External",
        icon: "Tent",
        items: [
          "Dometic 3m Awning",
          "LED Awning Lights",
          "Fusion Speakers x4",
          "Front Boot Storage",
          "Dual Jerry Can Holders",
          "Dual Gas Bottles",
          "External Shower",
          "Full Aluminium Cladding"
        ]
      },
      {
        category: "Plumbing",
        icon: "Droplets",
        items: [
          "200L Fresh Water Tank",
          "150L Grey Water Tank",
          "Shurflo Water Pump",
          "Digital Tank Gauges",
          "Thetford Cassette Toilet",
          "Separate Shower",
          "Large Vanity",
          "Premium Tapware"
        ]
      }
    ]
  },
  {
    id: "rogue",
    name: "Rogue",
    tagline: "Ultimate Luxury, Unlimited Adventure",
    description: "The Rogue represents the pinnacle of Australian caravan engineering. Combining uncompromising luxury with serious off-road capability, this is for those who accept nothing but the best.",
    price: 139990,
    heroImage: "/placeholder.svg",
    features: [
      "Premium luxury fitout",
      "Maximum off-grid capability",
      "Slide-out living space",
      "Top-tier appliances"
    ],
    specifications: [
      {
        category: "Electrical",
        icon: "Zap",
        items: [
          "500W Solar Array",
          "400Ah Lithium Battery Bank",
          "5000W Inverter/Charger",
          "50A DC-DC Charger",
          "Smart LED Lighting",
          "USB-C Fast Charging x10",
          "Multiple 240V Outlets",
          "Victron Smart Monitor"
        ]
      },
      {
        category: "Chassis",
        icon: "Truck",
        items: [
          "Extreme Duty Chassis",
          "Cruisemaster ATX Airbag",
          "Disc Brake System",
          "Dual Spare Carriers",
          "Rock Sliders",
          "Full Checker Plate",
          "Hitchmaster DO45",
          "Electric Jockey Wheel"
        ]
      },
      {
        category: "Appliances",
        icon: "UtensilsCrossed",
        items: [
          "285L Compressor Fridge",
          "Induction Cooktop",
          "Convection Oven",
          "Ducted Rangehood",
          "Built-in Coffee Machine",
          "Reverse Cycle A/C",
          "Instant Hot Water x2",
          "Fisher & Paykel Washer"
        ]
      },
      {
        category: "Internal",
        icon: "Home",
        items: [
          "California King Bed",
          "Memory Foam Mattress",
          "Walk-in Wardrobe",
          "Soft-Close Throughout",
          "Electric Slide-Out",
          "Theatre Lounge",
          "Engineered Timber Floor",
          "Triple Insulation"
        ]
      },
      {
        category: "External",
        icon: "Tent",
        items: [
          "Fiamma 4m Awning",
          "Smart LED Strip",
          "JBL Sound System",
          "Massive Boot Storage",
          "Quad Jerry Holders",
          "9kg Gas x2",
          "External Kitchen",
          "Composite Cladding"
        ]
      },
      {
        category: "Plumbing",
        icon: "Droplets",
        items: [
          "300L Fresh Water",
          "200L Grey Water",
          "Dual Water Pumps",
          "Smart Tank Monitoring",
          "Ceramic Toilet",
          "Rain Shower Head",
          "Stone Vanity Top",
          "Brass Premium Tapware"
        ]
      }
    ]
  }
];

export const getModelById = (id: string) => models.find(m => m.id === id);
