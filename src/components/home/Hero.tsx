"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";
import Logo from "@/assets/logo.png";

const WHATSAPP_NUMBER = "96171292796";
const WHATSAPP_TEXT = encodeURIComponent("Hi Hassan, I'd like a ClinicHub demo.");

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 pt-20 pb-16 md:pt-28 md:pb-24">
      {/* ===== Background: animated beams ===== */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 10px)",
          backgroundSize: "200% 200%",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 animate-beams-pan" />

      {/* ===== Background: wandering logo system (under content) ===== */}
<div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
  {/* Centered conic ring (bonus depth) */}
  <div className="absolute left-1/2 top-1/2 h-[min(80vw,600px)] w-[min(80vw,600px)] -translate-x-1/2 -translate-y-1/2">
    <div
      className="absolute inset-0 rounded-full opacity-40 blur-2xl animate-spin-ccw-slowest"
      style={{
        background:
          "conic-gradient(from 0deg, rgba(99,102,241,0.12), rgba(236,72,153,0.12), rgba(20,184,166,0.12), rgba(99,102,241,0.12))",
      }}
    />
    <div className="absolute inset-12 rounded-full border border-white/10" />
  </div>

  {/* Wander: anchored higher + upward-biased Y motion */}
  <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 md:top-[35%] animate-wander-x-slow">
    <div className="relative -translate-y-4 md:-translate-y-6 animate-wander-y-up-slow">
      {/* Impact pulse (flashes when X hits edges; tied to X duration) */}
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 opacity-0 blur-[1px] animate-impact-pulse" />

      {/* Shadow under the ball (follows position) */}
      <div className="absolute left-1/2 top-[calc(50%+64px)] h-4 w-28 -translate-x-1/2 rounded-full bg-black/25 blur-md" />

      {/* The ball (logo) with soft squash/tilt */}
      <div className="relative">
        <img
          src={Logo}
          alt=""
          draggable={false}
          className="relative h-[min(28vw,200px)] w-auto select-none drop-shadow-xl animate-squash-soft"
        />
        {/* light halo */}
        <div className="pointer-events-none absolute -inset-2 rounded-[28px] bg-white/5 blur-[10px]" />
      </div>
    </div>
  </div>
</div>

      {/* ===== /Background system ===== */}

      {/* ===== Foreground content (clickable) ===== */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left: Copy */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Trusted by many Dental Practices
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Dental Practice Management,{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Simplified
              </span>
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl">
              Manage patient reminders, appointments, track payments, and grow your practice with ClinicHub.
              Built exclusively for dentists and their teams.
            </p>

            {/* CTA — WhatsApp */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 animate-fade-in-up-delay">
              <Button size="lg" variant="hero" asChild>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  Book a Free Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground animate-pop-in">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                Cancel anytime
              </div>
            </div>
          </div>

          {/* Right: Dashboard visual */}
          <div className="relative animate-fade-in-up-delay lg:mt-0">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src={heroDashboard}
                alt="ClinicHub dashboard showing appointment calendar and patient management"
                className="w-full h-auto"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" />
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-lg shadow-lg p-4 border border-border hidden md:block animate-pop-in-delay-1">
              <div className="text-sm text-muted-foreground">Patient Show Rate</div>
              <div className="text-2xl font-bold text-accent">+32%</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-card rounded-lg shadow-lg p-4 border border-border hidden md:block animate-pop-in-delay-2">
              <div className="text-sm text-muted-foreground">Time Saved</div>
              <div className="text-2xl font-bold text-primary">15h/week</div>
            </div>
          </div>
        </div>
      </div>
      {/* ===== /Foreground ===== */}
    </section>
  );
};

export default Hero;
