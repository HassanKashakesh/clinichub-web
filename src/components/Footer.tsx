import { Link } from "react-router-dom";
import { Mail, Phone, ExternalLink } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Top */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <span className="text-lg font-semibold tracking-tight text-foreground">
              ClinicHub
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
              Modern practice management for dental teams—fast, friendly, and
              focused on what matters.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground/80">
                Product
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/features"
                    className="text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-sm"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-sm"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-sm"
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground/80">
                Company
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-sm"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground/80">
              Support
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" aria-hidden />
                <a
                  href="mailto:HassanKashakesh313@gmail.com"
                  className="text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-sm font-medium"
                >
                  Email Support
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" aria-hidden />
                <a
                  href="https://wa.me/96171292796"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-sm font-medium inline-flex items-center"
                >
                  WhatsApp Support
                  <ExternalLink className="ml-1 h-3 w-3 opacity-70" aria-hidden />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-4 text-xs text-muted-foreground/80 md:flex-row">
          <p>© {year} ClinicHub. All rights reserved.</p>

          {/* Optional socials slot */}
          <div className="flex items-center gap-4">
            {/* <a href="#" className="hover:text-primary">Twitter</a> */}
            {/* <a href="#" className="hover:text-primary">LinkedIn</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
