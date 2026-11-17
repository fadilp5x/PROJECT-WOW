import React, { useState } from "react";

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Tools", path: "/tools" },
    { label: "Impact", path: "/impact" },
    { label: "Contact", path: "/contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[72px] bg-[#FAF8F3]/95 backdrop-blur-md border-b border-black/[0.07] transition-all">
      <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between">
        {/* Left: UNSEEN Logo */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, "/")}
          className="flex items-center gap-2.5 group"
          aria-label="UNSEEN Home"
        >
          <div className="relative w-8 h-8 flex-shrink-0">
            <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
              <circle cx="20" cy="20" r="17" stroke="#08090B" strokeWidth="2" strokeDasharray="45 55" strokeLinecap="round" />
              <circle cx="20" cy="20" r="8.5" fill="#CDF22B" className="transition-transform duration-300 group-hover:scale-110" />
              <circle cx="20" cy="20" r="3.5" fill="#08090B" />
              <line x1="2" y1="20" x2="10" y2="20" stroke="#CDF22B" strokeWidth="2" strokeLinecap="round" />
              <line x1="30" y1="20" x2="38" y2="20" stroke="#CDF22B" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-display text-xl font-bold tracking-tighter text-[#08090B]">UNSEEN</span>
        </a>

        {/* Center: Route-based Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 bg-[#08090B]/[0.04] p-1.5 rounded-full border border-black/[0.05]">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleLinkClick(e, item.path)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all inline-flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#CDF22B]/25 text-[#08090B] font-bold border border-[#CDF22B]/50 shadow-sm"
                    : "text-[#08090B]/70 hover:text-[#08090B]"
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CDF22B] shadow-[0_0_6px_#CDF22B]" />
                )}
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: Explore UNSEEN Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/tools"
            onClick={(e) => handleLinkClick(e, "/tools")}
            className="btn-tactile-dark inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold font-display"
          >
            <span>Explore UNSEEN</span>
            <span className="text-sm">→</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-xl text-[#08090B] hover:bg-black/5 transition-colors focus:outline-none"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Animated Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FAF8F3]/98 border-b border-black/10 px-6 py-5 shadow-xl transition-all">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.path)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-[#CDF22B]/20 text-[#08090B] font-bold border border-[#CDF22B]/40"
                      : "text-[#08090B]/80 hover:bg-black/5"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#CDF22B]" />}
                </a>
              );
            })}
            <div className="pt-3">
              <a
                href="/tools"
                onClick={(e) => handleLinkClick(e, "/tools")}
                className="btn-tactile-dark block text-center py-3 rounded-2xl text-xs font-bold font-display"
              >
                Explore UNSEEN →
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
export default Navbar;
