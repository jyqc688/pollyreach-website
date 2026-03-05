/*
 * Design: Orbital Infrastructure — 使用场景
 * 8 个典型场景卡片，配图标和说明
 * 两行布局：4+4
 */
import { motion } from "framer-motion";
import { UtensilsCrossed, Hotel, Scissors, ParkingCircle, RotateCcw, Landmark, Globe, PiggyBank } from "lucide-react";

const useCases = [
  {
    icon: UtensilsCrossed,
    title: "Restaurant Reservations",
    description: "Book a table at any restaurant by having your Agent call ahead and confirm availability.",
    color: "#00C896",
  },
  {
    icon: Hotel,
    title: "Hotel Bookings",
    description: "Reserve rooms, request special accommodations, or modify existing bookings via phone.",
    color: "#00A3FF",
  },
  {
    icon: Scissors,
    title: "Salon Appointments",
    description: "Schedule haircuts, spa treatments, and beauty appointments without lifting a finger.",
    color: "#00E5A0",
  },
  {
    icon: ParkingCircle,
    title: "Parking Ticket Appeals",
    description: "Dispute parking violations by having your Agent navigate phone trees and file appeals.",
    color: "#FF6B35",
  },
  {
    icon: RotateCcw,
    title: "Refunds & Returns",
    description: "Contact merchants to process refunds, returns, and warranty claims on your behalf.",
    color: "#7B61FF",
  },
  {
    icon: Landmark,
    title: "Government Inquiries",
    description: "Ask about subsidies, permits, and public services through official phone channels.",
    color: "#FFB800",
  },
  {
    icon: Globe,
    title: "Cross-Language Calls",
    description: "Handle phone calls in foreign languages when traveling abroad — your Agent speaks the local tongue.",
    color: "#00C896",
  },
  {
    icon: PiggyBank,
    title: "Save Money",
    description: "Cancel unwanted subscriptions, negotiate lower bills, and dispute overcharges — your Agent fights for your wallet.",
    color: "#22D3EE",
  },
];

const RESTAURANT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663040690800/TQPpRy3UD32k7nEQ6SpKow/use-case-restaurant-H7YR6coahczGBf6PyxjkZk.webp";

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00A3FF]/5 rounded-full blur-[150px]" />

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
            <span className="text-sm text-[#00C896] font-medium">Real-World Impact</span>
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Your Agent Can <span className="text-gradient">Do</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            From restaurant bookings to government inquiries — your Agent handles it all with a real phone call.
          </p>
        </motion.div>

        {/* Featured use case */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="glass-card glow-border rounded-3xl p-6 lg:p-8 mb-8 grid lg:grid-cols-2 gap-8 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C896]/10 text-xs text-[#00C896] font-medium mb-4">
              Featured Scenario
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-3">
              "Hey Polly, book me a table for two at 7pm tonight."
            </h3>
            <p className="text-white/50 leading-relaxed">
              Your Agent receives the instruction, calls the restaurant using its dedicated phone number, 
              navigates the conversation in the local language, confirms the reservation, and reports back — 
              all in under a minute.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={RESTAURANT_IMG}
              alt="AI Agent making a restaurant reservation call"
              className="rounded-2xl w-full max-w-sm shadow-lg"
            />
          </div>
        </motion.div>

        {/* Use case grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card rounded-2xl p-5 group hover:-translate-y-1 transition-all duration-300 border border-white/5 hover:border-white/10"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${uc.color}12` }}
              >
                <uc.icon size={20} style={{ color: uc.color }} />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-white mb-2">
                {uc.title}
              </h3>
              <p className="text-xs text-white/40 leading-relaxed">
                {uc.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
