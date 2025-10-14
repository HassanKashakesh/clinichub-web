import { CheckCircle2 } from "lucide-react";
import whatsappReminder from "@/assets/whatsapp-reminder.png";

const benefits = [
  "Reduce no-shows by up to 40% with automated reminders",
  "Save 15+ hours per week on administrative tasks",
  "Increase revenue with better payment tracking",
  "Improve patient retention with 6-month recalls",
  "Get started in minutes—no training required",
  "Industry-standard encryption and data security",
];

const Benefits = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Benefits List */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                Built for Busy Dental Practices
              </h2>
              <p className="text-lg text-muted-foreground">
                Clinic Hub streamlines your workflow so you can spend more time with patients and less time on paperwork.
              </p>
            </div>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: WhatsApp Reminder Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-accent/5 p-8">
              <img
                src={whatsappReminder}
                alt="WhatsApp reminder notification for dental appointment"
                className="w-full max-w-sm mx-auto h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-4 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
