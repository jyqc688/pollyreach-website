/*
 * Design: Orbital Infrastructure — 五个"无需"亮点区
 * 毛玻璃卡片 + 发光边框 + 图标
 * 非对称网格布局
 */
import { motion } from "framer-motion";
import { UserX, CreditCard, KeyRound, Settings, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: UserX,
    title: "No Sign-Up Required",
    titleZh: "无需注册或登录",
    description: "Your Agent starts making calls immediately. No accounts, no passwords, no friction.",
    color: "#00C896",
  },
  {
    icon: CreditCard,
    title: "No Pre-Payment",
    titleZh: "无需提前充值",
    description: "Every Agent gets a daily free quota. Pay only when you exceed it — no upfront costs.",
    color: "#00A3FF",
  },
  {
    icon: KeyRound,
    title: "No API Key Needed",
    titleZh: "无需配置 API Key",
    description: "Install the Skill and go. Authentication is handled automatically behind the scenes.",
    color: "#00E5A0",
  },
  {
    icon: Settings,
    title: "No Complex Config",
    titleZh: "无需复杂配置",
    description: "Global phone numbers and multilingual Voice Agent capabilities are pre-configured and ready.",
    color: "#7B61FF",
  },
  {
    icon: ShieldCheck,
    title: "No Security Worries",
    titleZh: "无需担心安全问题",
    description: "Enterprise-grade security with end-to-end encryption. Your Agent's calls are always protected.",
    color: "#FF6B35",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const } },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00C896]/5 rounded-full blur-[150px]" />

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
            <span className="text-sm text-[#00C896] font-medium">Zero Friction</span>
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Five <span className="text-gradient">"No-Need"</span> Promises
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            We removed every barrier between your Agent and real-world phone calls.
          </p>
        </motion.div>

        {/* Feature cards — asymmetric grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-wrap justify-center gap-5"
        >
          {features.map((feature, _i) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="glass-card glow-border rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 w-full md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.833rem)]"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon size={24} style={{ color: feature.color }} />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-white mb-1.5">
                {feature.title}
              </h3>
              <p className="text-xs text-[#00C896]/60 mb-3">{feature.titleZh}</p>
              <p className="text-sm text-white/50 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
