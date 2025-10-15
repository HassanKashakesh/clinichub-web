import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, MessageCircle, Instagram } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import devImg from "@/assets/devimg.png";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

type FormData = {
  name: string;
  email: string;
  practice?: string;
  message: string;
};

const WHATSAPP_NUMBER = "96171292796"; // country code + number (no "+")

const About = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    practice: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // 👉 Send via WhatsApp (no server / no CORS / no env vars)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setSubmitting(true);

    const text = [
      "New ClinicHub inquiry:",
      `• Name: ${formData.name}`,
      `• Email: ${formData.email}`,
      `• Practice: ${formData.practice || "-"}`,
      "",
      formData.message,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp Web / app
    window.open(url, "_blank");

    toast.success("Opening WhatsApp…");
    setFormData({ name: "", email: "", practice: "", message: "" });
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-secondary/20 pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              {/* Animated Logo */}
              <motion.img
                src={logo}
                alt="ClinicHub logo"
                className="h-16 w-16 md:h-20 md:w-20 mx-auto rounded-xl ring-8 ring-primary/10 shadow-xl"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  y: [0, -6, 0],
                  rotate: [0, 2, 0],
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  rotate: { delay: 0.6, duration: 6, repeat: Infinity, ease: "easeInOut" },
                  y: { delay: 0.6, duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              />

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                About{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  ClinicHub
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                We're on a mission to help dental practices work smarter, not harder.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Our Story</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    ClinicHub was born from a simple observation: dental practices were spending too much
                    time on administrative tasks and not enough time with their patients.
                  </p>
                  <p>
                    Dentists were juggling appointment books, chasing payments, manually sending reminders,
                    and struggling with outdated software that wasn't designed for their needs.
                  </p>
                  <p>
                    So we built ClinicHub — a modern practice management system designed exclusively for
                    dental clinics, with features that actually matter: WhatsApp reminders that reduce
                    no-shows, intelligent scheduling that prevents conflicts, treatment planning that's
                    easy to follow, and analytics that help you grow.
                  </p>
                  <p>
                    Today, we're proud to serve many dental practices, helping them save time,
                    reduce no-shows, and focus on what they do best—providing exceptional patient care.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                <Stat value="10+" label="Active Practices" />
                <Stat value="2000+" label="Appointments Managed" />
                <Stat value="35%" label="Average No-Show Reduction" accent />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-28 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Simplicity First",
                    description:
                      "We believe powerful software doesn't have to be complicated. Every feature is designed to be intuitive and easy to use.",
                  },
                  {
                    title: "Built for Dentists",
                    description:
                      "We focus exclusively on dental practices, which means every feature is tailored to your specific needs.",
                  },
                  {
                    title: "Reliable Support",
                    description:
                      "When you need help, we're here. Real humans, fast responses, and genuine care for your success.",
                  },
                  {
                    title: "Continuous Improvement",
                    description:
                      "We listen to our users and constantly improve. Your feedback directly shapes our roadmap.",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl border border-border bg-card animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Developer Section (prominent like the hero) */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in text-center">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                About{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  the Developer
                </span>
              </h2>

              <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-10 shadow-sm">
                <div className="flex flex-col items-center">
                  <img
                    src={devImg}
                    alt="Hassan Kashakesh"
                    className="h-36 w-36 rounded-full object-cover ring-4 ring-primary/20 shadow-sm"
                  />
                  <h3 className="mt-5 text-3xl font-bold">Hassan Kashakesh</h3>

                  <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                    <Badge>🇱🇧 Lebanese</Badge>
                    <Badge>🎓 Fresh Graduate</Badge>
                    <Badge>📱 Flutter Developer</Badge>
                  </div>

                  <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    Building ClinicHub to revolutionize clinic management in Lebanon with modern technology.
                  </p>

                  <div className="mt-7 flex flex-wrap justify-center gap-3">
                    <Button asChild variant="secondary">
                      <a
                        href="https://wa.me/96171292796?text=Hi%20Hassan,%20about%20ClinicHub..."
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp Chat"
                        className="inline-flex items-center gap-2"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp Chat
                      </a>
                    </Button>

                    <Button asChild variant="secondary">
                      <a
                        href="https://www.instagram.com/hassankashakesh313?igsh=MTJwZzgwdTk2Zmtodg%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="inline-flex items-center gap-2"
                      >
                        <Instagram className="h-4 w-4" />
                        Instagram
                      </a>
                    </Button>

                    <Button asChild>
                      <a
                        href="mailto:hassankashakesh313@gmail.com"
                        aria-label="Email Hassan"
                        className="inline-flex items-center gap-2"
                      >
                        <Mail className="h-4 w-4" />
                        Email
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                Version 1.0.0 — All-in-One Clinic Management
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-3xl font-bold">Get in Touch</h2>
                <p className="text-lg text-muted-foreground">
                  Have questions? Want to see a demo? We'd love to hear from you.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <InfoRow
                      icon={<Mail className="h-6 w-6 text-primary" />}
                      title="Email"
                      content={
                        <a href="mailto:HassanKashakesh313@gmail.com" className="text-primary hover:underline">
                          HassanKashakesh313@gmail.com
                        </a>
                      }
                      iconBg="bg-primary/10"
                    />
                    <InfoRow
                      icon={<Phone className="h-6 w-6 text-accent" />}
                      title="WhatsApp"
                      content={
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          Chat with us on WhatsApp
                        </a>
                      }
                      iconBg="bg-accent/10"
                    />
                    <InfoRow
                      icon={<MapPin className="h-6 w-6 text-primary" />}
                      title="Office"
                      content={
                        <p className="text-muted-foreground">
                          Beirut
                          <br />
                          Lebanon
                        </p>
                      }
                      iconBg="bg-primary/10"
                    />
                  </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Field id="name" label="Name *">
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Dr. John Smith"
                      required
                    />
                  </Field>

                  <Field id="email" label="Email *">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </Field>

                  <Field id="practice" label="Practice Name">
                    <Input
                      id="practice"
                      name="practice"
                      value={formData.practice}
                      onChange={handleChange}
                      placeholder="Bright Smile Dental"
                    />
                  </Field>

                  <Field id="message" label="Message *">
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your practice and how we can help..."
                      rows={5}
                      required
                    />
                  </Field>

                  <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                    {submitting ? "Opening WhatsApp…" : "Send via WhatsApp"}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

/* ---------- Small helpers ---------- */

function Stat({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
  return (
    <div className="text-center space-y-2">
      <div className={`text-4xl font-bold ${accent ? "text-accent" : "text-primary"}`}>{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
      {children}
    </span>
  );
}

function InfoRow({
  icon,
  title,
  content,
  iconBg,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  iconBg: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className={`rounded-lg ${iconBg} p-3`}>{icon}</div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        {content}
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}
