import { FadeInStagger, FadeInStaggerItem } from './FadeIn';

export function Hero() {
  return (
    <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden flex flex-col items-center text-center px-6">
      <div className="hero-glow"></div>
      
      <FadeInStagger className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        <FadeInStaggerItem>
          <h1 className="text-[48px] md:text-[72px] font-[800] leading-[1.05] tracking-tight text-white mb-6 text-balance">
            Your Phone Rings. No One Answers. <span className="text-blue-500">You Just Lost $500.</span>
          </h1>
        </FadeInStaggerItem>
        
        <FadeInStaggerItem>
          <p className="text-[20px] md:text-[22px] font-normal text-white/70 max-w-3xl mb-10 text-balance">
            <strong className="text-white font-semibold block mb-4">Every missed call is a job booked by your competitor.</strong>
            Missed calls are the #1 silent revenue killer in HVAC. GoPeakCall answers every call, books the appointment, and keeps your schedule full — 24/7, no exceptions. Stop the bleeding before we even talk about AI.
          </p>
        </FadeInStaggerItem>
        
        <FadeInStaggerItem className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <a href="#contact" className="h-[56px] px-[32px] flex items-center justify-center rounded-lg bg-blue-500 text-[16px] font-semibold hover:-translate-y-[2px] hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] transition-all duration-180 w-full sm:w-auto">
            Book a meeting with us
          </a>
        </FadeInStaggerItem>
      </FadeInStagger>
    </section>
  );
}
