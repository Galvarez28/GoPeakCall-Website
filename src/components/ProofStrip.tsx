import { FadeIn } from './FadeIn';

export function ProofStrip() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-6 px-6">
      <FadeIn className="max-w-7xl mx-auto flex flex-col justify-center items-center text-center">
        <div className="text-[15px] md:text-[17px] uppercase tracking-widest font-semibold text-white/90">
          {/* CHANGE 1 */}
          30-day free pilot — includes up to 150 minutes of live call answering. No setup fee. Card required to activate
        </div>
        {/* CHANGE 4 */}
        <div className="mt-2 text-[13px] md:text-[14px] text-white/50 font-normal tracking-normal normal-case">
          We build your AI receptionist and let you run it free for 30 days. If it doesn't work for your business, you owe us nothing.
        </div>
      </FadeIn>
    </section>
  );
}
