import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 md:p-12 border border-border shadow-lg animate-fade-in">
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8 bg-primary rounded-full p-3">
              <Quote className="h-6 w-6 text-primary-foreground" />
            </div>

            {/* Testimonial Content */}
            <blockquote className="mt-4 space-y-6">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                “ClinicHub has truly simplified my daily workflow. Unlike other medical software I’ve used, it’s refreshingly straightforward and easy to navigate. I find it incredibly helpful in managing appointments and patient information without unnecessary complications. It’s friendly, efficient, and thoughtfully designed for doctors. I’m very happy with my experience and would strongly recommend ClinicHub to all fellow doctors.”
              </p>

              <footer className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-lg">
                  DS
                </div>
                <div>
                  <div className="font-semibold text-foreground">Dr. Bilal Dabaja</div>
                  <div className="text-sm text-muted-foreground">Founder of Dabaja OralCare</div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
