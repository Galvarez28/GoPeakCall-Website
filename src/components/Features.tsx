import { Calendar, Clock, PhoneForwarded, ShieldAlert, MessageSquare, MessageCircle } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from './FadeIn';

const features = [
  {
    icon: <Clock className="w-6 h-6 text-blue-400" />,
    title: "24/7 Availability",
    desc: "Nights, weekends, holidays. Your business never sleeps, even when you do."
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
    title: "Sounds Just Like a Human",
    desc: "Advanced conversational AI that sounds exactly like a human to hook callers instantly."
  },
  {
    icon: <Calendar className="w-6 h-6 text-blue-400" />,
    title: "Direct Scheduling",
    desc: "Integrates with your CRM to book appointments directly on your calendar. Works natively with ServiceTitan, Housecall Pro, and Jobber — no switching tools, no double entry."
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-blue-400" />,
    title: "SMS & Google Reviews",
    desc: "After every completed job, GoPeakCall automatically sends your customer a review request via SMS — turning a booked appointment into a 5-star Google review without you lifting a finger. More reviews mean higher local rankings and more inbound calls."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 px-6 bg-[#0a0e1a] relative z-10">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="eyebrow mx-auto">What It Actually Does</span>
          <h2 className="text-[36px] md:text-[48px] font-bold leading-tight">
            Human-first benefits.
          </h2>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {features.map((f, i) => (
            <FadeInStaggerItem key={i}>
              <div className="bg-white/[0.06] border border-white/[0.12] rounded-xl p-7 hover:border-blue-500/40 hover:shadow-[0_8px_32px_rgba(59,130,246,0.15)] transition-all duration-200 group h-full">
                <div className="w-12 h-12 rounded-lg bg-white/[0.05] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  {f.icon}
                </div>
                <h3 className="text-[20px] font-semibold mb-3">{f.title}</h3>
                <p className="text-[15px] text-white/70 leading-relaxed">{f.desc}</p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <FadeIn className="mb-24">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
            <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
              <PhoneForwarded className="w-7 h-7 text-blue-400" />
            </div>
            <div>
              <h3 className="text-[22px] font-bold text-white mb-2">Emergency? We Don't Drop the Ball.</h3>
              <p className="text-[16px] text-white/80 leading-relaxed">
                When a caller describes an emergency — no heat, a gas smell, a system failure — GoPeakCall instantly transfers the call to your on-call technician in real time. No voicemail. No delays. No liability.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="max-w-4xl mx-auto bg-blue-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <ShieldAlert className="w-10 h-10 text-blue-500 mx-auto mb-6" />
          <h3 className="text-[24px] md:text-[32px] font-bold mb-4">One thing, done well.</h3>
          <p className="text-[18px] md:text-[20px] text-white/80 leading-relaxed max-w-2xl mx-auto">
            It won't dispatch. It won't quote. It won't override your tech assignments. <br className="hidden md:block" />
            <span className="text-white font-semibold">It books, confirms, and reschedules.</span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
