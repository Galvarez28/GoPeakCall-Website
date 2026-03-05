import { FadeInStagger, FadeInStaggerItem } from './FadeIn';

const steps = [
  {
    title: "Discovery",
    desc: "Book a call with us. We'll get specific insight into your business and build a plan tailored to you.",
  },
  {
    title: "Build",
    desc: "We'll spend 1–2 weeks building your personalized AI agent with check-ins along the way where you can add details or adjustments.",
  },
  {
    title: "Launch & Integration",
    desc: "Start your 30-day free trial. Get exclusive end-of-month insights, and reach us anytime for support or optimization.",
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#0f1420] relative z-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <span className="eyebrow">The Process</span>
            <h2 className="text-[36px] md:text-[48px] font-bold leading-tight mb-12">
              Results are instant.<br />Setup is guided.
            </h2>
            
            <FadeInStagger className="space-y-12 relative">
              <div className="absolute left-[15px] top-2 bottom-2 w-px bg-white/10"></div>
              
              {steps.map((step, i) => (
                <FadeInStaggerItem key={i} className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#0f1420] border-2 border-blue-500 flex items-center justify-center text-xs font-bold z-10 text-blue-500">
                    {i + 1}
                  </div>
                  <h3 className="text-[24px] font-semibold mb-2">{step.title}</h3>
                  <p className="text-[17px] text-white/70 leading-relaxed">{step.desc}</p>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="sticky top-32 glass-panel rounded-2xl overflow-hidden p-8 h-[500px] flex flex-col justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Data and integration" 
                className="relative z-10 rounded-xl border border-white/10 shadow-2xl object-cover w-full h-full opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
