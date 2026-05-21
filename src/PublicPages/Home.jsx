import React from 'react';
import { motion } from 'framer-motion';
import { Code, PenTool, Video, Megaphone, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="pt-32 pb-16">
      <HeroSection />
      <CategoryGrid />
      <HowItWorks />
    </div>
  );
}

// --- SUB-COMPONENTS ---

function HeroSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Text Content */}
      <div className="flex-1 z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          Hire the best <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
            freelance talent.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-slate-400 mb-8 max-w-xl"
        >
          Connect with top-tier developers, designers, and marketers. Build your dream project with experts on demand.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all">
            Find Talent <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all">
            Earn Money Freelancing
          </button>
        </motion.div>
      </div>

      {/* Floating Glassmorphism Cards */}
      <div className="flex-1 relative h-100 w-full z-10">
        <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl w-64"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-full bg-linear-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-bold">
              SJ
            </div>
            <div>
              <h4 className="font-bold">Sarah J.</h4>
              <p className="text-xs text-slate-400">UI/UX Designer</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-yellow-400 text-sm mt-3">
            ★ 4.9 (120 reviews)
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [10, -10, 10] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl w-56"
        >
          <h4 className="text-slate-400 text-sm font-medium mb-1">Total Paid Out</h4>
          <p className="text-3xl font-bold text-white">$2M+</p>
          <p className="text-xs text-green-400 mt-2 flex items-center gap-1">
             <CheckCircle2 className="w-3 h-3"/> Secure Escrow
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CategoryGrid() {
  const categories = [
    { name: "Development & IT", icon: <Code className="w-8 h-8 text-blue-400" />, count: "1,240 skills" },
    { name: "Design & Creative", icon: <PenTool className="w-8 h-8 text-purple-400" />, count: "980 skills" },
    { name: "Video & Animation", icon: <Video className="w-8 h-8 text-pink-400" />, count: "450 skills" },
    { name: "Digital Marketing", icon: <Megaphone className="w-8 h-8 text-orange-400" />, count: "720 skills" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Browse talent by category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div 
            key={index} 
            className="group bg-slate-900 border border-slate-800 p-6 rounded-2xl cursor-pointer hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 hover:border-slate-700 transition-all duration-300"
          >
            <div className="bg-slate-800/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {cat.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
            <p className="text-slate-400 flex items-center gap-2">
              {cat.count} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { title: "Post a job", desc: "Tell us about your project. Upwork connects you with top talent around the world, or near you." },
    { title: "Bids come to you", desc: "Get qualified proposals within 24 hours. Compare bids, reviews, and prior work." },
    { title: "Collaborate easily", desc: "Use our platform to chat, share files, and collaborate from your desktop or mobile." },
    { title: "Payment simplified", desc: "Pay hourly or fixed-price and receive invoices through our secure system." },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-800">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
        <p className="text-slate-400">Everything you need to get your project done safely and securely.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        {/* Connecting Line (Hidden on Mobile) */}
        <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-slate-800 -z-10" />

        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-6 border-4 border-slate-950">
              {index + 1}
            </div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}