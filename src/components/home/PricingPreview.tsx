import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plan = {
  name: "Lifetime Access",
  price: "$450",
  description: "One-time payment for unlimited lifetime access",
  features: [
    "Unlimited patients",
    "Unlimited dentist accounts",
    "Appointment scheduling",
    "Manual WhatsApp reminders",
    "Treatment planning",
    "Payment tracking",
    "Analytics dashboard",
    "Lifetime updates",
    "Email support",
  ],
};

const PricingPreview = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One simple price. Pay once, use forever.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto mb-12">
          <div className="relative rounded-xl border border-primary shadow-2xl bg-card p-8 hover:shadow-md transition-all duration-300 animate-slide-up">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
              Best Value
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">one-time</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className="w-full"
              size="lg"
              variant="default"
              asChild
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Have questions?{" "}
            <a href="mailto:hello@clinichub.com" className="text-primary hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
