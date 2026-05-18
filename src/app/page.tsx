"use client";

import { useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Target,
  Eye,
  Repeat,
  Brain,
  CheckCircle2,
  Star,
  Zap,
  Clock,
  Shield,
  Sparkles,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/* ─── Animated Section Wrapper ─── */
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Floating Orbs (Hero Background) ─── */
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large amber glow */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-amber-500/8 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-emerald-500/6 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-amber-400/5 blur-[80px] animate-pulse-glow" style={{ animationDelay: "4s" }} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating shapes */}
      <div className="absolute top-20 left-[15%] w-2 h-2 rounded-full bg-amber-400/40 animate-float" />
      <div className="absolute top-40 right-[20%] w-1.5 h-1.5 rounded-full bg-emerald-400/40 animate-float-delayed" />
      <div className="absolute top-[60%] left-[10%] w-1 h-1 rounded-full bg-amber-300/30 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-[30%] right-[8%] w-2.5 h-2.5 rounded-full bg-amber-500/20 animate-float-delayed" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-[30%] left-[30%] w-1.5 h-1.5 rounded-full bg-emerald-400/30 animate-float" style={{ animationDelay: "2s" }} />
    </div>
  );
}

/* ─── Feature Card ─── */
function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  gradient,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay?: number;
  gradient: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 30, scale: 0.95 }
      }
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative glass rounded-2xl p-8 transition-all duration-300 hover:border-amber-500/20 cursor-default"
    >
      {/* Hover glow */}
      <div
        className={`absolute inset-0 rounded-2xl ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`}
      />

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors duration-300">
          <Icon className="w-7 h-7 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-amber-50 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Testimonial Card ─── */
function TestimonialCard({
  name,
  role,
  text,
  delay = 0,
}: {
  name: string;
  role: string;
  text: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="glass rounded-2xl p-6 flex flex-col gap-4"
    >
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-amber-400 text-amber-400"
          />
        ))}
      </div>
      <p className="text-foreground/80 leading-relaxed text-sm">&ldquo;{text}&rdquo;</p>
      <div className="flex items-center gap-3 mt-auto pt-2">
        <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-semibold text-sm">
          {name[0]}
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Stat Counter ─── */
function StatCounter({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setEmail("");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col relative noise-overlay">
      <FloatingOrbs />

      {/* ─── Navigation ─── */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 glass-strong"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <Zap className="w-4 h-4 text-amber-400" />
            </div>
            <span className="font-bold text-lg text-foreground">
              Habit<span className="text-amber-400">Shift</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a
              href="#features"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              Testimonials
            </a>
            <a
              href="#guide"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              Get the Guide
            </a>
          </nav>
          <a href="#guide">
            <Button
              variant="outline"
              size="sm"
              className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10 hover:text-amber-300 hover:border-amber-500/50 transition-all duration-300"
            >
              Free Access
            </Button>
          </a>
        </div>
      </motion.header>

      <main className="flex-1 relative z-10">
        {/* ─── Hero Section ─── */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-amber-400 mb-8"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Inspired by Atomic Habits</span>
              <span className="w-1 h-1 rounded-full bg-amber-400" />
              <span>100% Free</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6"
            >
              Transform your habits.{" "}
              <br className="hidden sm:block" />
              <span className="text-gradient">Transform your future.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
            >
              This free self-improvement guide will help you build discipline,
              stay focused, eliminate distractions, and create systems that
              actually work.
            </motion.p>

            {/* Email Capture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-md mx-auto"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex gap-3"
                  >
                    <div className="flex-1 relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-10 h-12 bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-amber-500/50 focus:ring-amber-500/20 rounded-xl"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-12 px-6 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                        />
                      ) : (
                        <>
                          Get Access
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="glass rounded-xl p-4 flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                    <div className="text-left">
                      <p className="text-sm font-medium text-foreground">
                        You&apos;re in! Check your inbox.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Your free guide is on its way.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <p className="text-xs text-muted-foreground/60 mt-3">
                No spam, ever. Unsubscribe anytime.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center gap-6 md:gap-10 mt-12"
            >
              <StatCounter value={12} suffix="K+" label="Downloads" />
              <div className="w-px h-10 bg-white/10" />
              <StatCounter value={98} suffix="%" label="Satisfaction" />
              <div className="w-px h-10 bg-white/10" />
              <StatCounter value={30} suffix="+" label="Daily Habits" />
            </motion.div>
          </div>
        </section>

        {/* ─── Features Section ─── */}
        <section id="features" className="py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs mb-4">
                <Target className="w-3.5 h-3.5" />
                What You&apos;ll Achieve
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Inside, you&apos;ll discover{" "}
                <span className="text-gradient">simple daily habits</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Used by successful people to improve productivity, strengthen
                mindset, and stay consistent — even when motivation disappears.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                icon={Target}
                title="Build Better Habits"
                description="Learn the science-backed framework for creating habits that stick. Discover how tiny changes compound into remarkable results, and build a system that makes good habits inevitable and bad habits impossible."
                delay={0}
                gradient="bg-amber-500/10"
              />
              <FeatureCard
                icon={Eye}
                title="Stay Focused Longer"
                description="Master proven techniques to eliminate distractions and enter deep focus states. Train your attention like a muscle, and learn environment design strategies that make concentration your default mode."
                delay={0.1}
                gradient="bg-emerald-500/8"
              />
              <FeatureCard
                icon={Repeat}
                title="Create Powerful Routines"
                description="Design morning and evening routines that set you up for success every single day. Learn habit stacking, implementation intentions, and how to anchor new behaviors to existing patterns for lasting change."
                delay={0.2}
                gradient="bg-amber-400/10"
              />
              <FeatureCard
                icon={Brain}
                title="Improve Your Mindset Daily"
                description="Develop a growth-oriented mindset through daily reflection and micro-shifts in thinking. Replace self-doubt with self-belief, and learn how identity-based habits transform who you are from the inside out."
                delay={0.3}
                gradient="bg-emerald-400/8"
              />
            </div>
          </div>
        </section>

        {/* ─── What You Get Section ─── */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative corner glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-amber-500/10 blur-[80px]" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-emerald-500/8 blur-[80px]" />

              <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    Free Guide
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Whether you want to{" "}
                    <span className="text-gradient">stop procrastinating</span>,
                    improve focus, or completely change your life
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    This guide gives you practical steps you can start using
                    today. No fluff, no theory overload — just actionable
                    strategies that have helped thousands build the life they
                    want, one habit at a time.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      icon: CheckCircle2,
                      text: "Step-by-step habit building framework",
                    },
                    {
                      icon: Clock,
                      text: "Daily routine templates you can customize",
                    },
                    {
                      icon: Shield,
                      text: "Strategies to overcome procrastination",
                    },
                    {
                      icon: Brain,
                      text: "Mindset shifts for lasting motivation",
                    },
                    {
                      icon: Target,
                      text: "Goal-setting system that actually works",
                    },
                    {
                      icon: Zap,
                      text: "Quick-start action plan for immediate results",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-amber-400" />
                      </div>
                      <span className="text-foreground/80 text-sm">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ─── Testimonials Section ─── */}
        <section id="testimonials" className="py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs mb-4">
                <Star className="w-3.5 h-3.5" />
                Loved by thousands
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                People are{" "}
                <span className="text-gradient-emerald">transforming</span>{" "}
                their lives
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Join the community of people who have already started their
                journey to better habits and a better life.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TestimonialCard
                name="Sarah M."
                role="Freelance Designer"
                text="I've tried dozens of productivity guides, but this one actually gave me a system I could follow. My morning routine is now non-negotiable and I've never been more focused."
                delay={0}
              />
              <TestimonialCard
                name="James K."
                role="Software Engineer"
                text="The habit stacking technique alone changed everything. I went from scrolling my phone for an hour every morning to meditating, journaling, and exercising — all before 7am."
                delay={0.1}
              />
              <TestimonialCard
                name="Amira R."
                role="Entrepreneur"
                text="I was skeptical about another 'free guide,' but this is genuinely packed with value. The identity-based habit framework shifted how I think about self-improvement entirely."
                delay={0.2}
              />
            </div>
          </div>
        </section>

        {/* ─── Final CTA Section ─── */}
        <section id="guide" className="py-20 md:py-28 px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="relative glass-strong rounded-3xl p-8 md:p-12 text-center overflow-hidden">
                {/* Animated shimmer */}
                <div className="absolute inset-0 animate-shimmer rounded-3xl" />

                {/* Decorative glows */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-amber-500/10 blur-[100px]" />

                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center mx-auto mb-6"
                  >
                    <Zap className="w-8 h-8 text-amber-400" />
                  </motion.div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Start your transformation{" "}
                    <span className="text-gradient">today</span>
                  </h2>
                  <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed mb-8">
                    Enter your email and get instant access to the free guide.
                    Your future self will thank you for taking this first step.
                  </p>

                  <AnimatePresence mode="wait">
                    {!submitted ? (
                      <motion.form
                        key="cta-form"
                        onSubmit={handleSubmit}
                        className="max-w-sm mx-auto flex flex-col sm:flex-row gap-3"
                      >
                        <div className="flex-1 relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="pl-10 h-12 bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-amber-500/50 focus:ring-amber-500/20 rounded-xl"
                          />
                        </div>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="h-12 px-8 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 shrink-0"
                        >
                          {isSubmitting ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                            />
                          ) : (
                            <>
                              Get Instant Access
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </Button>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="cta-success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="glass rounded-xl p-5 flex items-center gap-3 max-w-sm mx-auto"
                      >
                        <CheckCircle2 className="w-7 h-7 text-emerald-400 shrink-0" />
                        <div className="text-left">
                          <p className="font-medium text-foreground">
                            Welcome aboard!
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Your guide is on its way to your inbox.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <p className="text-xs text-muted-foreground/50 mt-4 flex items-center justify-center gap-1.5">
                    <Shield className="w-3 h-3" />
                    Your email is safe. No spam, unsubscribe anytime.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="relative z-10 border-t border-white/5 py-8 px-6 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-amber-500/20 flex items-center justify-center">
              <Zap className="w-3 h-3 text-amber-400" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              Habit<span className="text-amber-400">Shift</span>
            </span>
          </div>
          <p className="text-xs text-muted-foreground/50">
            &copy; {new Date().getFullYear()} HabitShift. Transform your habits,
            transform your life.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground/50">
            <a href="#" className="hover:text-amber-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
