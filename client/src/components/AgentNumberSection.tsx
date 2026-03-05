/*
 * Design: Orbital Infrastructure — Agent 专属号码
 * 非对称布局：左侧手机插图 + 右侧文案
 * 强调双向通话能力
 */
import { motion } from "framer-motion";
import { Phone, PhoneIncoming, PhoneOutgoing, Building2 } from "lucide-react";

const AGENT_PHONE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663040690800/TQPpRy3UD32k7nEQ6SpKow/agent-phone-XLSnks2yHA2jxYYHnDA83R.webp";

const capabilities = [
  {
    icon: PhoneOutgoing,
    title: "Agent Calls Businesses",
    description: "Your Agent uses its dedicated number to call restaurants, hotels, government offices, and more on your behalf.",
  },
  {
    icon: PhoneIncoming,
    title: "You Call Your Agent",
    description: "Dial your Agent's number directly to give instructions or check on task progress — like calling your personal assistant.",
  },
  {
    icon: Phone,
    title: "Agent Calls You Back",
    description: "After binding your phone number, your Agent can proactively call you with updates, confirmations, and notifications.",
  },
  {
    icon: Building2,
    title: "B2B Only — Safe by Design",
    titleZh: "只联系 B 端",
    description: "PollyReach only contacts businesses and public institutions. Your Agent will never cold-call individuals.",
  },
];

export default function AgentNumberSection() {
  return (
    <section id="agent-number" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1A] via-[#0a0f20] to-[#0D0D1A]" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#00C896]/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Phone illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#00C896]/10 rounded-3xl blur-3xl scale-110" />
              <img
                src={AGENT_PHONE_IMG}
                alt="Agent's dedicated phone with holographic interface"
                className="relative w-full max-w-sm rounded-3xl shadow-2xl"
              />
              {/* Floating number badge */}
              <div className="absolute top-6 -right-4 glass-card rounded-xl px-4 py-2.5 shadow-xl border border-[#00C896]/20">
                <div className="text-xs text-white/40 mb-0.5">Agent's Number</div>
                <div className="font-[family-name:var(--font-heading)] text-sm font-bold text-[#00C896]">+1 (415) 555-0199</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00C896]/10 border border-[#00C896]/20 mb-6">
              <span className="text-sm text-[#00C896] font-medium">Dedicated Identity</span>
            </div>

            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Your Agent Gets Its Own{" "}
              <span className="text-gradient">Phone Number</span>
            </h2>

            <p className="text-lg text-white/50 mb-4 leading-relaxed">
              When your Agent first uses PollyReach, it receives a permanent, dedicated phone number — 
              creating a real-world identity for your AI assistant.
            </p>
            <p className="text-sm text-white/30 mb-10">
              当 Agent 第一次使用打电话功能时，PollyReach 会为其分配一个永久归属于该 Agent 的专属电话号码
            </p>

            {/* Capability cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card rounded-xl p-4 border border-white/5 hover:border-[#00C896]/15 transition-colors"
                >
                  <cap.icon size={20} className="text-[#00C896] mb-3" />
                  <h4 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-white mb-1.5">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-white/40 leading-relaxed">
                    {cap.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
