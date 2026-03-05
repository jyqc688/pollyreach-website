/*
 * Design: Orbital Infrastructure — CTA 底部区
 * 大标题召唤行动 + 发光背景
 */
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HOW_IT_WORKS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663040690800/TQPpRy3UD32k7nEQ6SpKow/how-it-works-bg-gsak3TXc2fJqDQGm8VPMif.webp";

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={HOW_IT_WORKS_BG} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A] via-[#0D0D1A]/80 to-[#0D0D1A]" />
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00C896]/8 rounded-full blur-[150px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Polly emoji */}
          <div className="text-6xl mb-8">🦜</div>

          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let Polly Make{" "}
            <span className="text-gradient">the Call.</span>
          </h2>

          <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
            Give your AI Agent the power of voice. Install the PollyReach Skill today and let your Agent handle the real world.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#00C896] hover:bg-[#00B085] text-[#0D0D1A] font-semibold px-8 h-14 rounded-xl shadow-[0_0_40px_rgba(0,200,150,0.3)] hover:shadow-[0_0_50px_rgba(0,200,150,0.5)] transition-all text-lg"
            >
              Install Skill
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="text-sm text-white/30 mt-6">
            Free to start. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
