import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to Transform Your Practice?
          </h2>

          <p className="text-lg md:text-xl opacity-90">
            Join dental practices saving time and growing their patient base with Clinic Hub. Get lifetime access today with our one-time payment.
          </p>

          {/* Primary CTA -> WhatsApp */}
          <div className="flex justify-center pt-4">
            <Button size="lg" variant="secondary" className="group" asChild>
              <a
                href="https://wa.me/96171292796?text=Hi%20Clinic%20Hub!%20I%E2%80%99d%20like%20to%20learn%20more%20and%20book%20a%20demo."
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Trust badges (removed 14-day trial) */}
          <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
              Setup in 5 minutes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
