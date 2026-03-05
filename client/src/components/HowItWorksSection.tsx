/*
 * Design: Orbital Infrastructure — 工作原理
 * 三步流程：安装 → 获得号码 → 完成通话
 * 连线流程图风格
 */
import { motion } from "framer-motion";
import { Download, Smartphone, PhoneCall } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Install the Skill",
    titleZh: "Agent 安装 Skill",
    description: "Your Agent installs the PollyReach Skill with a single command. A complete cloud service powers everything behind the scenes.",
  },
  {
    icon: Smartphone,
    step: "02",
    title: "Get a Dedicated Number",
    titleZh: "首次使用获得专属号码",
    description: "On first use, PollyReach assigns a permanent phone number to your Agent, along with a dedicated Voice Agent sub-instance.",
  },
  {
    icon: PhoneCall,
    step: "03",
    title: "Make Real Calls",
    titleZh: "调用 Skill 完成真实通话",
    description: "Your Agent can now make real phone calls to businesses, government offices, and service providers worldwide.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1A] via-[#0f1025] to-[#0D0D1A]" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00C896]/10 to-transparent" />

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
            <span className="text-sm text-[#00C896] font-medium">Simple Setup</span>
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Three simple steps from installation to your first real phone call.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[16.67%] right-[16.67%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-[#00C896]/30 via-[#00C896]/50 to-[#00C896]/30" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#00C896]/30 via-[#00C896]/50 to-[#00C896]/30 blur-sm" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                {/* Icon circle */}
                <div className="relative inline-flex mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-[#00C896]/10 border border-[#00C896]/20 flex items-center justify-center relative z-10">
                    <step.icon size={32} className="text-[#00C896]" />
                  </div>
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-2xl bg-[#00C896]/5 pulse-ring" />
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#00C896] flex items-center justify-center z-20">
                    <span className="text-xs font-bold text-[#0D0D1A]">{step.step}</span>
                  </div>
                </div>

                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#00C896]/50 mb-3">{step.titleZh}</p>
                <p className="text-sm text-white/50 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
