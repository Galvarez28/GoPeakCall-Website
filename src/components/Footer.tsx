import { FadeIn } from './FadeIn';

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0f1420] pt-24 pb-12 px-6 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Form */}
        <div>
          <FadeIn className="mb-8">
            <h2 className="text-[36px] md:text-[48px] font-bold leading-tight mb-4">
              Book a meeting with us.
            </h2>
            <p className="text-[17px] text-white/70">
              Let's build a plan tailored to your business.
            </p>
          </FadeIn>

          <FadeIn>
            <form className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Full Name</label>
                  <input type="text" className="form-input" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Phone Number</label>
                  <input type="tel" className="form-input" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Email</label>
                <input type="email" className="form-input" required />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Business Name</label>
                <input type="text" className="form-input" required />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Any other details we should know?</label>
                <textarea 
                  className="w-full bg-white/[0.07] border border-white/[0.14] rounded-lg text-white p-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all outline-none resize-none h-32"
                  placeholder="Tell us about your current call volume, CRM, etc."
                ></textarea>
              </div>
              
              <button type="submit" className="w-full h-[56px] rounded-lg bg-blue-500 text-white font-semibold text-[16px] hover:-translate-y-[2px] hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] transition-all duration-180 mt-4">
                Submit Request
              </button>
            </form>
          </FadeIn>
        </div>

        {/* Right Side: Links & Info */}
        <div className="flex flex-col justify-center lg:pl-12">
          <div className="mb-12">
            <img src="/logo.png" alt="GoPeakCall Logo" className="h-12 object-contain mb-6" />
            <p className="text-[15px] text-white/60 max-w-md leading-relaxed">
              The intelligent voice agent built to help HVAC and home service businesses capture every lead and book more jobs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-3">
                {['How It Works', 'Features', 'Pricing', 'FAQ'].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-[15px] text-white/60 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:gabriel.alvarez@gopeakcall.com" className="text-[15px] text-white/60 hover:text-white transition-colors break-all">
                    gabriel.alvarez@gopeakcall.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <p className="text-[13px] text-white/40">
          © {new Date().getFullYear()} GoPeakCall. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
