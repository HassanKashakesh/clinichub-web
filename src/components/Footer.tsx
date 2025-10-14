import { Link } from "react-router-dom";
import { Calendar, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Calendar className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">Clinic Hub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Modern dental practice management software for busy dentists and their teams.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@clinichub.com" className="hover:text-primary transition-colors">
                  hello@clinichub.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="https://wa.me/+96171292796" className="hover:text-primary transition-colors">
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Clinic Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
