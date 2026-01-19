
import React from 'react';
import { motion } from 'framer-motion';
import { AUTHORIZE_LOGO_URL } from '../constants';

const HomeContent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-screen w-full bg-[#050505] overflow-y-auto"
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-black/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={AUTHORIZE_LOGO_URL} alt="Logo" className="w-6 h-6 brightness-0 invert" />
            <span className="text-sm font-medium tracking-tight">Authorize</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Solutions', 'Security', 'Enterprise', 'Support'].map((item) => (
              <a key={item} href="#" className="text-[13px] text-white/60 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
          <button className="text-[13px] bg-white text-black px-4 py-1.5 rounded-full font-medium hover:bg-white/90 transition-all">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-medium text-white/50 mb-6 tracking-wide">
              IDENTITY REIMAGINED
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
              The standard for <br /> digital security.
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Experience a new era of authentication. Elegant, invisible, and uncompromisingly secure. Built for the modern web.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full font-medium hover:scale-[1.02] active:scale-[0.98] transition-all">
                Start for Free
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 rounded-full font-medium hover:bg-white/10 transition-all backdrop-blur-sm">
                View Documentation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Encryption",
              desc: "Military-grade AES-256 standards protecting every byte of your data.",
              icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            },
            {
              title: "Performance",
              desc: "Zero-latency verification ensures your users stay in the flow.",
              icon: "M13 10V3L4 14h7v7l9-11h-7z"
            },
            {
              title: "Compliance",
              desc: "Fully SOC2, GDPR, and HIPAA compliant infrastructure.",
              icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            }
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (i * 0.1), duration: 0.8 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-white/40 font-light leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Decorative Background Elements */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 blur-[160px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[140px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </motion.div>
  );
};

export default HomeContent;
