export interface Specification {
  category: string;
  items: string[];
}

export interface CaravanModel {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  priceValue: number;
  image: string;
  features: string[];
  specifications: {
    electrical: string[];
    chassis: string[];
    appliances: string[];
    internal: string[];
    external: string[];
    plumbing: string[];
  };
}

export const caravanModels: CaravanModel[] = [
  {
    id: "cruzer",
    name: "Cruzer",
    tagline: "The Perfect Entry Point",
    description: "The Cruzer combines compact convenience with premium features, making it the ideal choice for couples and weekend adventurers seeking quality without compromise.",
    price: "From $89,990",
    priceValue: 89990,
    image: "/caravan/CruzerCaravan.png",
    features: [
      "Compact yet spacious design",
      "Off-road capable suspension",
      "Solar power ready",
      "Premium kitchen package",
    ],
    specifications: {
      electrical: [
        "200W Solar Panel",
        "200Ah Lithium Battery",
        "2000W Inverter/Charger",
        "30A DC-DC Charger",
        "LED Strip Lighting Throughout",
        "USB Charging Points x6",
        "12V/240V Power Outlets",
        "Battery Management System",
      ],
      chassis: [
        "Hot-dipped Galvanised Chassis",
        "Independent Trailing Arm Suspension",
        "DO35 Off-Road Hitch",
        "265/75 R16 All-Terrain Tyres",
        "Electric Brakes",
        "Spare Wheel & Carrier",
        "Recovery Points Front & Rear",
        "2,500kg ATM",
      ],
      appliances: [
        "190L 3-Way Fridge",
        "4 Burner Gas Cooktop",
        "Microwave Oven",
        "Rangehood",
        "Diesel Heater",
        "Air Conditioning (Optional)",
        "TV Antenna & Outlets",
        "Bluetooth Sound System",
      ],
      internal: [
        "Queen Size Bed",
        "Innerspring Mattress",
        "Overhead Storage Cupboards",
        "Full Height Wardrobe",
        "Café Style Dinette",
        "LED Downlights",
        "Premium Vinyl Flooring",
        "Block-out Blinds",
      ],
      external: [
        "2.5m Roll-Out Awning",
        "External Shower",
        "Slide-Out Kitchen",
        "Tunnel Boot Storage",
        "Jerry Can Holders x4",
        "Roof Racks",
        "LED Awning Lights",
        "Stone Guard Protection",
      ],
      plumbing: [
        "2x 95L Fresh Water Tanks",
        "95L Grey Water Tank",
        "On-Demand Hot Water System",
        "External Tap & Shower",
        "Macerator Toilet",
        "Water Level Indicators",
        "City Water Connection",
        "Water Filtration System",
      ],
    },
  },
  {
    id: "rebel",
    name: "Rebel",
    tagline: "Adventure Without Limits",
    description: "Built for those who refuse to follow the beaten path. The Rebel features enhanced off-road capabilities and extended living space for serious adventurers.",
    price: "From $119,990",
    priceValue: 119990,
    image: "/caravan/RebelCaravan.png",
    features: [
      "Heavy-duty off-road chassis",
      "Extended living space",
      "Dual battery system",
      "Premium outdoor kitchen",
    ],
    specifications: {
      electrical: [
        "400W Solar Panels",
        "400Ah Lithium Battery Bank",
        "3000W Inverter/Charger",
        "50A DC-DC Charger",
        "LED Strip & Spot Lighting",
        "USB-C Fast Charging x8",
        "Weatherproof External Outlets",
        "Smart Battery Monitor",
      ],
      chassis: [
        "Heavy-Duty Galvanised Chassis",
        "Cruisemaster XT Suspension",
        "DO35 Off-Road Hitch",
        "285/75 R16 Mud Terrain Tyres",
        "Electric & Handbrake",
        "Dual Spare Wheels",
        "Rated Recovery Points",
        "3,200kg ATM",
      ],
      appliances: [
        "220L Compressor Fridge",
        "4 Burner Cooktop + Grill",
        "Convection Microwave",
        "Rangehood with Light",
        "Truma Diesel Heater",
        "Roof-Mounted A/C",
        "32\" Smart TV",
        "Premium Sound System",
      ],
      internal: [
        "Island Queen Bed",
        "Pillow-Top Mattress",
        "Full Pantry Storage",
        "His & Hers Wardrobes",
        "Club Lounge Seating",
        "Dimmable LED Lighting",
        "Hybrid Flooring",
        "Day/Night Roller Blinds",
      ],
      external: [
        "3.5m Electric Awning",
        "Hot & Cold External Shower",
        "Premium Slide-Out Kitchen",
        "Full-Width Tunnel Boot",
        "Jerry Can Holders x6",
        "Heavy-Duty Roof Racks",
        "Perimeter LED Lighting",
        "Full Composite Cladding",
      ],
      plumbing: [
        "2x 120L Fresh Water Tanks",
        "120L Grey Water Tank",
        "Instantaneous Hot Water",
        "Dual External Taps",
        "Cassette Toilet",
        "Digital Tank Monitors",
        "Quick-Fill City Connection",
        "Dual Stage Filtration",
      ],
    },
  },
  {
    id: "rogue",
    name: "Rogue",
    tagline: "The Ultimate Expedition",
    description: "Our flagship model represents the pinnacle of Australian caravan engineering. The Rogue delivers uncompromising luxury and capability for extended off-grid adventures.",
    price: "From $159,990",
    priceValue: 159990,
    image: "/caravan/RogueCaravan.png",
    features: [
      "Flagship luxury features",
      "Maximum off-grid capability",
      "Premium entertainment system",
      "Complete self-sufficiency",
    ],
    specifications: {
      electrical: [
        "600W Solar Array",
        "600Ah Lithium Battery Bank",
        "5000W Hybrid Inverter",
        "60A DC-DC Charger",
        "Smart Home Integration",
        "Wireless Charging Stations",
        "Weatherproof Power Station",
        "Remote Monitoring System",
      ],
      chassis: [
        "Extreme-Duty Box Section Chassis",
        "Cruisemaster XT Coil Suspension",
        "DO35 with Safety Chain",
        "315/75 R16 MT Tyres",
        "ABS Electric Brakes",
        "Dual Spare Wheel Carrier",
        "8-Point Recovery System",
        "3,800kg ATM",
      ],
      appliances: [
        "280L French Door Fridge",
        "5 Burner Cooktop + Oven",
        "Steam/Convection Microwave",
        "Premium Rangehood",
        "Webasto Diesel Heater",
        "Ducted Reverse Cycle A/C",
        "43\" 4K Smart TV",
        "Dolby Surround Sound",
      ],
      internal: [
        "King Island Bed",
        "Memory Foam Mattress",
        "Walk-In Pantry",
        "Walk-In Wardrobe",
        "Leather Club Lounge",
        "Circadian LED Lighting",
        "Engineered Timber Floor",
        "Electric Blinds",
      ],
      external: [
        "4.5m Electric Awning with LED",
        "Ensuite External Access",
        "Gourmet Outdoor Kitchen",
        "Dual Access Tunnel Boot",
        "Integrated Tool Box",
        "Reinforced Roof Platform",
        "360° Lighting System",
        "Premium Composite Finish",
      ],
      plumbing: [
        "2x 150L Fresh Water Tanks",
        "150L Grey Water Tank",
        "Continuous Hot Water System",
        "External Wash Station",
        "Porcelain Swivel Toilet",
        "Smart Water Management",
        "Emergency Water Reserve",
        "Triple Stage Filtration",
      ],
    },
  },
];

export function getCaravanModelById(id: string): CaravanModel | undefined {
  return caravanModels.find(model => model.id.toLowerCase() === id.toLowerCase());
}

export function getAllCaravanModels(): CaravanModel[] {
  return caravanModels;
}



