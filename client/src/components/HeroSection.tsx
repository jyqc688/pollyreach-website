/*
 * Design: Orbital Infrastructure — Hero 区
 * 非对称布局：左侧文案 + 右侧主图（鹦鹉和龙虾）
 * 背景使用全球通信网络图
 * 品牌色 #00C896 发光效果
 */
import { Check, Copy } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663040690800/TQPpRy3UD32k7nEQ6SpKow/hero-bg-WDmSAFtX8bvijQ28sCn3KN.webp";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663040690800/TQPpRy3UD32k7nEQ6SpKow/pollyreach-hero_80deb440.jpg";

const INSTALL_COMMAND = "polly install pollyreach";

function InstallCommand() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_COMMAND);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textarea = document.createElement("textarea");
      textarea.value = INSTALL_COMMAND;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="inline-flex items-center gap-0 rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm max-w-md">
      <div className="flex items-center gap-3 px-5 py-3">
        <span className="text-white/40 select-none">$</span>
        <code className="text-[#00C896] font-mono text-sm sm:text-base font-medium select-all">
          {INSTALL_COMMAND}
        </code>
      </div>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 px-5 py-3 bg-[#00C896] hover:bg-[#00B085] text-[#0D0D1A] font-semibold text-sm transition-all border-l border-[#00C896]/30 cursor-pointer"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" />
            Copy
          </>
        )}
      </button>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1A]/60 via-[#0D0D1A]/40 to-[#0D0D1A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D1A]/80 to-transparent" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00C896]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-[#00A3FF]/8 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00C896]/10 border border-[#00C896]/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00C896] animate-pulse" />
              <span className="text-sm text-[#00C896] font-medium">Built for AI Agents</span>
            </div>

            <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Give Your Agent{" "}
              <span className="text-gradient">a Voice.</span>
              <br />
              Anywhere in the World.
            </h1>

            <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-4 max-w-xl">
              PollyReach gives every AI Agent its own phone number and the ability to make real calls — no sign-up, no config, no limits.
            </p>

            <p className="text-sm text-white/40 mb-8 max-w-xl">
              让每一个 AI Agent 拥有属于自己的全球电话号码和真实打电话的能力
            </p>

            {/* Install Command */}
            <InstallCommand />

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/5">
              <div>
                <div className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-white/40 mt-1">Countries Covered</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white">0</div>
                <div className="text-sm text-white/40 mt-1">Config Required</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/40 mt-1">Always Available</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-[#00C896]/15 rounded-3xl blur-3xl scale-110" />
              <img
                src={HERO_IMG}
                alt="Polly the parrot and OpenClaw mascot shaking hands"
                className="relative w-full max-w-md lg:max-w-lg rounded-3xl shadow-2xl animate-float"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-5 py-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00C896]/20 flex items-center justify-center">
                    <span className="text-lg">📞</span>
                  </div>
                  <div>
                    <div className="text-xs text-white/50">Agent calling...</div>
                    <div className="text-sm font-semibold text-white">+1 (555) 0123</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
