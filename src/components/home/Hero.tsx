import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Trusted by 500+ Dental Practices
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Dental Practice Management,{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Simplified
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl">
              Manage patient reminders, appointments, track payments, and grow your practice with Clinic Hub. Built exclusively for dentists and their teams.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
              <Button size="lg" variant="hero" asChild>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="group">
                  Book a Free Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <a href="#video-tour" className="group">
                  <Play className="mr-2 h-4 w-4" />
                  Watch 2-Min Tour
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                Free 14-day trial
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                Cancel anytime
              </div>
            </div>
          </div>

          {/* Right: Dashboard Image */}
          <div className="relative animate-slide-up lg:mt-0">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src={heroDashboard}
                alt="Clinic Hub dashboard showing appointment calendar and patient management"
                className="w-full h-auto"
              />
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-lg shadow-lg p-4 border border-border hidden md:block">
              <div className="text-sm text-muted-foreground">Patient Show Rate</div>
              <div className="text-2xl font-bold text-accent">+32%</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card rounded-lg shadow-lg p-4 border border-border hidden md:block">
              <div className="text-sm text-muted-foreground">Time Saved</div>
              <div className="text-2xl font-bold text-primary">15h/week</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
