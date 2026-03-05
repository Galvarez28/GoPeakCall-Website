import { Check } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from './FadeIn';

const tiers = [
  {
    name: "Basic",
    price: "$399",
    desc: "Month-to-month. Cancel anytime.",
    features: [
      "24/7 availability",
      "Direct scheduling (ServiceTitan, Housecall Pro, Jobber)",
      "Emergency call transfers",
      "Handles new & returning clients",
      "Full CRM database updates",
      "Client analytics dashboard"
    ],
    buttonText: "Get Started"
  },
  {
    name: "Pro",
    price: "$499",
    desc: "Month-to-month. Cancel anytime.",
    popular: true,
    features: [
      "Everything in Basic",
      "SMS review request after appointment",
      "Rescheduling handling",
      "Cancellation handling",
      "Priority support"
    ],
    buttonText: "Get Started"
  },
  {
    name: "Pro",
    price: "$399",
    desc: "Lock in Pro features at the Basic price.",
    commitment: "6-Month Commitment",
    features: [
      "Everything in Pro",
      "Discounted rate locked for 6 months"
    ],
    buttonText: "Get Started — Save $600"
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 px-6 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="eyebrow mx-auto">Pricing</span>
          <h2 className="text-[36px] md:text-[48px] font-bold leading-tight">
            Simple plans for any size fleet.
          </h2>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <FadeInStaggerItem key={i} className={`relative rounded-2xl p-8 flex flex-col ${
              tier.popular 
                ? 'bg-blue-500/10 border border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.1)]' 
                : 'bg-white/[0.03] border border-white/10'
            }`}>
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-[24px] font-semibold mb-2 flex items-center gap-2">
                {tier.name}
                {tier.commitment && (
                  <span className="text-xs font-medium bg-white/10 text-white/80 px-2 py-1 rounded-md tracking-wide">
                    {tier.commitment}
                  </span>
                )}
              </h3>
              <p className="text-[15px] text-white/60 mb-6 h-10">{tier.desc}</p>
              
              <div className="mb-8">
                <span className="text-[48px] font-bold tracking-tight">{tier.price}</span>
                <span className="text-white/50">/month</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="text-[15px] text-white/80">{f}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className={`w-full h-[52px] flex items-center justify-center rounded-lg font-semibold transition-all duration-180 ${
                tier.popular 
                  ? 'bg-blue-500 text-white hover:-translate-y-[2px] hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}>
                {tier.buttonText}
              </a>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
