/*
 * Design: Orbital Infrastructure — 定价区
 * 两列卡片：Free + Pro
 * 强调免费额度和按需计费
 */
import { motion } from "framer-motion";
import { Check, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    icon: Zap,
    price: "$0",
    period: "forever",
    description: "Get started with monthly free calls. No credit card required.",
    features: [
      "200 Credits per month",
      "Inbound calls supported",
      "Dedicated phone number",
      "Multilingual voice support",
      "Standard call quality",
      "Basic call transcripts",
      "Community support",
    ],
    cta: "Install Skill",
    highlighted: false,
  },
  {
    name: "Pro",
    icon: Crown,
    price: "$20",
    period: "per month",
    description: "2,000 Credits per month with premium features. Scale as you grow.",
    features: [
      "2,000 Credits per month",
      "Inbound calls supported",
      "Priority phone numbers",
      "All languages supported",
      "HD call quality",
      "Detailed call analytics",
      "Priority support",
      "Custom voice persona",
      "Webhook notifications",
    ],
    cta: "Upgrade to Pro",
    highlighted: true,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00C896]/3 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00C896]/10 border border-[#00C896]/20 mb-6">
            <span className="text-sm text-[#00C896] font-medium">Simple Pricing</span>
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Start Free. <span className="text-gradient">Scale as You Grow.</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            No upfront costs. No hidden fees. Pay only when you exceed the monthly free quota.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-[#00C896]/10 to-transparent border-2 border-[#00C896]/30 shadow-[0_0_40px_rgba(0,200,150,0.1)]"
                  : "glass-card border border-white/8"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00C896] text-xs font-semibold text-[#0D0D1A]">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  plan.highlighted ? "bg-[#00C896]/20" : "bg-white/5"
                }`}>
                  <plan.icon size={20} className={plan.highlighted ? "text-[#00C896]" : "text-white/60"} />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">
                  {plan.name}
                </h3>
              </div>

              <div className="mb-6">
                <span className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-white/40 ml-2">/ {plan.period}</span>
              </div>

              <p className="text-sm text-white/50 mb-8">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check size={16} className={plan.highlighted ? "text-[#00C896]" : "text-white/30"} />
                    <span className="text-sm text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full h-12 rounded-xl font-semibold ${
                  plan.highlighted
                    ? "bg-[#00C896] hover:bg-[#00B085] text-[#0D0D1A] shadow-[0_0_20px_rgba(0,200,150,0.3)]"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
