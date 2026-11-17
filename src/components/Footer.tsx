import React from "react";

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="bg-[#08090B] text-[#FAF8F3] pt-20 pb-12 border-t-2 border-[#CDF22B]/30 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-5 pr-0 md:pr-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#CDF22B] flex items-center justify-center font-display font-black text-[#08090B] text-lg">
                U
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter text-[#FAF8F3]">UNSEEN</span>
            </div>

            <p className="text-[#CDF22B] font-display font-bold text-sm tracking-wide mb-3">
              Make the Invisible Visible.
            </p>

            <p className="text-white/60 text-sm leading-relaxed font-body mb-6 max-w-sm">
              A comprehensive Resource Intelligence Platform designed to identify, measure, visualize and help reduce invisible resource losses.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-[#CDF22B] font-display">
              <span className="w-2 h-2 rounded-full bg-[#CDF22B] animate-pulse" />
              Built to reveal what matters.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-xs tracking-widest uppercase text-white/90 mb-5">Navigation</h4>
            <ul className="space-y-3 text-sm text-white/60 font-body">
              <li><a href="/" onClick={(e) => handleLink(e, "/")} className="hover:text-[#CDF22B] transition-colors">Home</a></li>
              <li><a href="/about" onClick={(e) => handleLink(e, "/about")} className="hover:text-[#CDF22B] transition-colors">About Our Mission</a></li>
              <li><a href="/tools" onClick={(e) => handleLink(e, "/tools")} className="hover:text-[#CDF22B] transition-colors">Explore Tools</a></li>
              <li><a href="/impact" onClick={(e) => handleLink(e, "/impact")} className="hover:text-[#CDF22B] transition-colors">Our Impact</a></li>
              <li><a href="/contact" onClick={(e) => handleLink(e, "/contact")} className="hover:text-[#CDF22B] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Tools Links */}
          <div className="md:col-span-4">
            <h4 className="font-display font-bold text-xs tracking-widest uppercase text-white/90 mb-5">Intelligence Tools</h4>
            <ul className="space-y-3 text-sm text-white/60 font-body">
              <li><a href="/tools#tool-time" onClick={(e) => handleLink(e, "/tools#tool-time")} className="hover:text-[#CDF22B] transition-colors">01 // Time Intelligence</a></li>
              <li><a href="/tools#tool-student" onClick={(e) => handleLink(e, "/tools#tool-student")} className="hover:text-[#CDF22B] transition-colors">02 // Student Time Tracker</a></li>
              <li><a href="/tools#tool-group" onClick={(e) => handleLink(e, "/tools#tool-group")} className="hover:text-[#CDF22B] transition-colors">03 // Group Contribution Analyzer</a></li>
              <li><a href="/tools#tool-privacy" onClick={(e) => handleLink(e, "/tools#tool-privacy")} className="hover:text-[#CDF22B] transition-colors">04 // Privacy & Terms Analyzer</a></li>
              <li><a href="/tools#tool-metadata" onClick={(e) => handleLink(e, "/tools#tool-metadata")} className="hover:text-[#CDF22B] transition-colors">05 // Image Metadata Intelligence</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50 font-body">
          <p>© 2026 UNSEEN. All rights reserved. Resource Intelligence Platform.</p>
          <div className="flex items-center gap-6">
            <a href="/contact" onClick={(e) => handleLink(e, "/contact")} className="hover:text-[#CDF22B] transition-colors">contact@unseen.intelligence</a>
            <span>•</span>
            <span className="text-[#CDF22B] font-display font-bold">Make the Invisible Visible</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
