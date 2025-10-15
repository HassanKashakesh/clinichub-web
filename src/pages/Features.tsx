import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MessageSquare, FileText, CreditCard, BarChart3, Users, Clock, Bell, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import analyticsImg from "@/assets/analytics-dashboard.png";

const featureDetails = [
  {
    icon: Calendar,
    title: "Appointments & Scheduling",
    description: "Powerful calendar management designed specifically for dental practices.",
    features: [
      "Drag-and-drop appointment scheduling",
      "Color-coded by treatment type",
      "Automatic conflict detection",
      "Recurring appointment support",
      "Multi-dentist calendar view",
      "Chair and room assignment",
    ],
  },
  {
    icon: MessageSquare,
    title: "Manual WhatsApp Reminders",
    description: "One-tap WhatsApp messages sent by your staff to reduce no-shows and improve retention.",
    features: [
      "Quick send from patient profile or schedule",
      "Editable reminder & follow-up templates",
      "Pre-filled message with appointment details",
      "Supports recalls and post-visit follow-ups",
      "Works with WhatsApp on phone or desktop",
      "Respect patient opt-out preferences",
    ],
  },
  {
    icon: FileText,
    title: "Treatment Planning",
    description: "Create comprehensive treatment plans and track patient progress.",
    features: [
      "Multi-visit procedure planning",
      "Treatment cost estimation",
      "Progress tracking per visit",
      "Before/after photo uploads",
      "Treatment notes and history",
      "Insurance pre-authorization tracking",
    ],
  },
  {
    icon: CreditCard,
    title: "Payments & Billing",
    description: "Streamlined financial management with full transparency.",
    features: [
      "Payment recording and receipts",
      "Outstanding balance tracking",
      "Payment reminder support (manual via WhatsApp)",
      "Multiple payment methods",
      "Installment plan support",
      "Financial reports generation",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Gain insights into your practice performance with comprehensive analytics.",
    features: [
      "Revenue trends and forecasting",
      "Most common treatments analysis",
      "Patient retention metrics",
      "No-show rate tracking",
      "Peak hours identification",
      "Custom report generation",
    ],
  },
  {
    icon: Users,
    title: "Patient Management",
    description: "Complete patient profiles with full history at your fingertips.",
    features: [
      "Comprehensive patient profiles",
      "Medical history tracking",
      "Contact information management",
      "Visit notes and records",
      "Allergy and medication tracking",
      "Patient portal access",
    ],
  },
];

const additionalFeatures = [
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "Changes sync instantly across all devices and team members.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Stay informed with intelligent alerts for important events.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description: "Built for speed with 99.9% uptime guarantee.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Industry-standard encryption and role-based access control.",
  },
];

const whatsappHref =
  "https://wa.me/96171292796?text=Hi%20Clinic%20Hub!%20I%E2%80%99d%20like%20to%20see%20how%20it%20works%20and%20get%20started.";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-secondary/20 pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Features Built for{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Dental Practices
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Everything you need to manage your dental practice efficiently, all in one place.
              </p>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {featureDetails.map((feature, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={`space-y-6 animate-fade-in ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className={`inline-flex rounded-lg bg-primary/10 p-3`}>
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    
                    <div>
                      <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                      <p className="text-lg text-muted-foreground">{feature.description}</p>
                    </div>

                    <ul className="space-y-3">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                            <div className="h-2 w-2 rounded-full bg-accent" />
                          </div>
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image Placeholder */}
                  <div className={`animate-slide-up ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 p-12 border border-border aspect-video flex items-center justify-center">
                      <feature.icon className="h-24 w-24 text-primary/20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Showcase */}
        <section className="py-20 md:py-28 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Powerful Analytics Dashboard
                </h2>
                <p className="text-lg text-muted-foreground">
                  Make data-driven decisions with comprehensive practice insights.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden shadow-2xl border border-border animate-slide-up">
                <img
                  src={analyticsImg}
                  alt="Clinic Hub analytics dashboard with charts and reports"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                And Much More
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built with the latest technology to provide the best experience.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {additionalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="text-center space-y-4 p-6 rounded-xl border border-border bg-card hover:shadow-md transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex rounded-lg bg-primary/10 p-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section (Calendly -> WhatsApp) */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                See Clinic Hub in Action
              </h2>
              <p className="text-lg md:text-xl opacity-90">
                Chat with us on WhatsApp and we’ll walk you through how Clinic Hub can transform your practice.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
