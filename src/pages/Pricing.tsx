import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FinalCTA from "@/components/home/FinalCTA"; // <-- Use your FinalCTA widget

const plan = {
  name: "Lifetime Access",
  price: "$399", // <-- updated
  period: "one-time",
  description: "Pay once, use forever. Complete dental practice management.",
  popular: true,
  features: [
    "Unlimited patients",
    "Unlimited dentist accounts",
    "Appointment scheduling",
    "Manual WhatsApp reminders",
    "Treatment planning",
    "Payment tracking & installments",
    "Full analytics dashboard",
    "Lifetime software updates",
    "Email support",
    "Mobile-friendly interface",
    "Secure data storage",
    "No recurring fees ever",
  ],
  cta: "Get Started",
};

const faqs = [
  {
    question: "How do WhatsApp reminders work?",
    answer:
      "WhatsApp reminders are sent manually by your dental assistant. They can click the WhatsApp icon next to any patient to send appointment reminders, follow-ups, or recall messages directly through WhatsApp.",
  },
  {
    question: "Is my patient data secure?",
    answer:
      "Yes. We use industry-standard encryption (AES-256) for data at rest and in transit. We employ role-based access control, regular security audits, and comply with data protection regulations. Your data is backed up daily.",
  },
  {
    question: "Are there any limits on patients or staff?",
    answer:
      "No. With the lifetime access plan, you get unlimited patients and unlimited dentist accounts. There are no artificial limits on your practice's growth.",
  },
  // Removed refunds FAQ per your request
  {
    question: "Can I use Clinic Hub on mobile devices?",
    answer:
      "Yes! Clinic Hub has a fully responsive web interface that works great on tablets and phones.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "All users receive email support with responses within 24 hours. We're here to help you get the most out of Clinic Hub.",
  },
  {
    question: "Will I have to pay again for updates?",
    answer:
      "No. Your one-time payment includes lifetime access to all future updates and improvements. You'll never be charged again.",
  },
];

const whatsappHref =
  "https://wa.me/96171292796?text=Hi%20Clinic%20Hub!%20I%E2%80%99d%20like%20to%20get%20Lifetime%20Access%20(%24399).";

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-secondary/20 pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Simple,{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Transparent Pricing
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                One simple price. Pay once, use forever. No subscriptions, no hidden fees.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Card */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto">
              <div className="relative rounded-xl border border-primary shadow-2xl bg-card p-8 hover:shadow-md transition-all duration-300 animate-slide-up">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
                  Best Value
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
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

                {/* Get Started -> WhatsApp */}
                <Button className="w-full" size="lg" variant="default" asChild>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    {plan.cta}
                  </a>
                </Button>
              </div>
            </div>

            {/* Additional Info (removed money-back guarantee) */}
            <div className="mt-16 text-center space-y-4">
              {/* Removed: 30-day money-back guarantee */}
              <p className="text-sm text-muted-foreground">
                Have questions?{" "}
                <a href="mailto:hello@clinichub.com" className="text-primary hover:underline">
                  Contact us
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-28 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <div className="inline-flex items-center gap-2 text-primary">
                  <HelpCircle className="h-6 w-6" />
                  <span className="text-sm font-semibold uppercase tracking-wide">FAQ</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Have a question not answered here? Contact our support team.
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border rounded-lg px-6 bg-card"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Replace CTA section with FinalCTA widget */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
