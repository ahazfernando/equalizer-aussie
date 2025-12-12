import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const modelItems = [
  { label: "Cruzer", href: "/models/cruzer" },
  { label: "Rebel", href: "/models/rebel" },
  { label: "Rogue", href: "/models/rogue" },
];

const moreItems = [
  { label: "Our Story", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Logo */}
          <Link to="/" className="lg:hidden flex flex-col">
            <span className="font-heading font-bold text-lg tracking-wider text-foreground">
              EQUALIZER
            </span>
            <span className="text-[10px] tracking-[0.2em] text-muted-foreground">
              RV AUSTRALIA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`nav-link text-sm ${location.pathname === "/" ? "active text-foreground" : ""}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-link text-sm ${location.pathname === "/about" ? "active text-foreground" : ""}`}
            >
              About
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link text-sm flex items-center gap-1">
                Models <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="bg-background border border-border shadow-lg z-50">
                {modelItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link to={item.href} className="w-full">{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Logo Center */}
          <Link to="/" className="hidden lg:flex flex-col items-center">
            <span className="font-heading font-bold text-xl tracking-wider text-foreground">
              EQUALIZER
            </span>
            <span className="text-xs tracking-[0.3em] text-muted-foreground">
              RV AUSTRALIA
            </span>
          </Link>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/colour-themes"
              className={`nav-link text-sm ${location.pathname === "/colour-themes" ? "active text-foreground" : ""}`}
            >
              Colour Themes
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link text-sm flex items-center gap-1">
                More <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background border border-border shadow-lg z-50">
                {moreItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link to={item.href} className="w-full">{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Contact Us
              </Button>
            </Link>
          </div>


          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className={`px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === "/" ? "bg-accent/10 text-accent font-medium" : "hover:bg-secondary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === "/about" ? "bg-accent/10 text-accent font-medium" : "hover:bg-secondary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="px-4 py-2 text-sm text-muted-foreground font-medium">Models</div>
              {modelItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    location.pathname === item.href ? "bg-accent/10 text-accent font-medium" : "hover:bg-secondary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/colour-themes"
                className={`px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === "/colour-themes" ? "bg-accent/10 text-accent font-medium" : "hover:bg-secondary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Colour Themes
              </Link>
              {moreItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === item.href ? "bg-accent/10 text-accent font-medium" : "hover:bg-secondary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 px-4">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
