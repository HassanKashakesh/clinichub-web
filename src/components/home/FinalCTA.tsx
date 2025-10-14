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
            Join hundreds of dental practices saving time and growing their patient base with Clinic Hub. Get lifetime access today with our one-time payment.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="group" asChild>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book a Free Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="#video-tour">
                Watch 2-Min Tour
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
              14-day free trial
            </div>
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
