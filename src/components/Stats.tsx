import { FadeInStagger, FadeInStaggerItem } from './FadeIn';

export function Stats() {
  return (
    <section className="py-24 px-6 bg-[#0f1420] border-y border-white/10">
      <div className="max-w-5xl mx-auto text-center">
        <FadeInStaggerItem>
          <span className="eyebrow mx-auto">The Real Cost</span>
          <h2 className="text-[32px] md:text-[44px] font-bold leading-tight mb-16">
            Thousands lost every week — <span className="text-blue-500">silently.</span>
          </h2>
        </FadeInStaggerItem>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <FadeInStaggerItem className="flex flex-col items-center text-center pt-8 md:pt-0 px-4">
            <div className="text-[64px] md:text-[80px] font-bold leading-none mb-4 tracking-tighter">
              30-40<span className="text-blue-500">%</span>
            </div>
            <div className="text-[17px] font-medium text-white/80 max-w-xs">
              Of after-hours calls are missed by the average HVAC business.
            </div>
          </FadeInStaggerItem>
          
          <FadeInStaggerItem className="flex flex-col items-center text-center pt-8 md:pt-0 px-4">
            <div className="text-[64px] md:text-[80px] font-bold leading-none mb-4 tracking-tighter">
              <span className="text-blue-500">$</span>300-800
            </div>
            <div className="text-[17px] font-medium text-white/80 max-w-xs">
              Average job value lost per missed call.
            </div>
          </FadeInStaggerItem>
        </FadeInStagger>
      </div>
    </section>
  );
}
