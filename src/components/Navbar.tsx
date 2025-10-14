import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoUrl from "@/assets/logo.png"; // place your logo at src/assets/logo.svg (or swap to .png)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {/* Image logo instead of Calendar icon */}
            <img
              src={logoUrl}
              alt="ClinicHub logo"
              className="h-8 w-8 rounded-lg object-cover"
            />
            <span className="text-xl font-bold text-foreground">ClinicHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button size="sm" asChild>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book a Demo
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-md p-2 hover:bg-secondary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button className="w-full" size="sm" asChild>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  Book a Demo
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
