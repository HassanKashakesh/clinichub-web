import { Link } from "react-router-dom";
import { Calendar, MessageSquare, FileText, CreditCard, BarChart3, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Intuitive appointment calendar with drag-and-drop, color-coded by treatment type, and automatic conflict detection.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Reminders",
    description: "Automated patient reminders before appointments, no-show follow-ups, and 6-month recall messages.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: FileText,
    title: "Treatment Planning",
    description: "Create detailed treatment plans, track progress, and manage multi-visit procedures seamlessly.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: CreditCard,
    title: "Payment Tracking",
    description: "Record payments, track outstanding balances, send payment reminders, and generate financial reports.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: BarChart3,
    title: "Practice Analytics",
    description: "View revenue trends, most common treatments, patient retention, and operational KPIs at a glance.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Users,
    title: "Patient Profiles",
    description: "Complete patient histories, contact details, treatment records, and visit notes all in one place.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything You Need to Run Your Practice
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clinic Hub handles the administrative work so you can focus on what matters most—your patients.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex rounded-lg ${feature.bgColor} p-3 mb-4`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/features">
              Explore All Features
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
