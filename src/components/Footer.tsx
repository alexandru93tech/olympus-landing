import ManhattanLogo from "./ManhattanLogo";

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-7 h-7 rounded-md bg-[#1e1e1e] flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-10 pb-6">
      <div className="px-[100px]">
        {/* Social icons + time/language row */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-3">
            <SocialIcon>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </SocialIcon>
            <SocialIcon>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z"/></svg>
            </SocialIcon>
            <SocialIcon>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </SocialIcon>
            <SocialIcon>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </SocialIcon>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-[#2a2a2a] rounded-md px-2 py-1 text-gray-400 text-xs tabular-nums">
              {new Date().toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </span>
            <div className="border-l border-white/10 h-8" />
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="w-7 h-5 rounded-sm overflow-hidden flex">
                <div className="w-1/3 h-full bg-[#002B7F]" />
                <div className="w-1/3 h-full bg-[#FCD116]" />
                <div className="w-1/3 h-full bg-[#CE1126]" />
              </div>
              <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Footer links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 text-sm text-left">
          <div>
            <h4 className="text-white/60 font-bold mb-3 uppercase text-xs tracking-wider">
              Regulile Manhattan
            </h4>
            <ul className="space-y-2 text-gray-500 uppercase text-xs tracking-wide">
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Termeni și Condiții Generale
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Politica privind Jocul Responsabil
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Politica de Confidențialitate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Politica de Utilizare a Cookie-urilor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Reguli Jocuri
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Jocuri Excluse
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Termeni și Condiții pentru Acordarea Bonusurilor
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white/60 font-bold mb-3 uppercase text-xs tracking-wider">
              Ajutor
            </h4>
            <ul className="space-y-2 text-gray-500 uppercase text-xs tracking-wide">
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Reguli de Pariuri Sportive
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Casino
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Contactați-ne
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white/60 font-bold mb-3 uppercase text-xs tracking-wider">
              Link-uri Utile
            </h4>
            <ul className="space-y-2 text-gray-500 uppercase text-xs tracking-wide">
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Licență
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Decizia Autorizării
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulations & Partners */}
        <div className="text-center border-t border-white/5 pt-8 mb-8">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-4">
            Regulamente și Parteneri
          </p>
          {/* App Store button */}
          <div className="flex justify-center mb-6">
            <a
              href="#download"
              className="inline-flex items-center gap-2 bg-black border border-white/20 rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors"
            >
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-[8px] text-gray-400">Download on the</div>
                <div className="text-sm font-semibold text-white">App Store</div>
              </div>
            </a>
          </div>

          {/* Partner logos placeholder */}
          <div className="flex justify-center items-center gap-6 mb-6 flex-wrap">
            {["18+", "ONJN", "IBIA"].map((label) => (
              <div
                key={label}
                className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-[10px] text-gray-500 font-bold"
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Legal text */}
        <div className="text-center mb-8">
          <p className="text-[10px] text-gray-600 leading-relaxed max-w-5xl mx-auto">
            Website-ul este operat și administrat de V Venture Limited, o
            companie înființată și operând în conformitate cu legile din Malta,
            având număr de înregistrare în Registrul Companiilor din Malta
            C71935, cu sediul social oficial la adresa ST. Julians STJ 4010,
            Luxe Pavilion, 2nd Level, Diamonds International Building,
            Portomaso, Malta.
          </p>
        </div>

        {/* Payment methods */}
        <div className="border-t border-white/5 pt-6">
          <p className="text-center text-[10px] text-gray-600 mb-4 uppercase tracking-wider">
            Plăți
          </p>
          <div className="flex justify-center items-center gap-4 sm:gap-6 flex-wrap mb-6">
            {["Mastercard", "VISA", "Apple Pay", "G Pay", "Revolut"].map(
              (method) => (
                <span
                  key={method}
                  className="text-xs text-gray-500 font-semibold"
                >
                  {method}
                </span>
              )
            )}
          </div>
        </div>

        {/* Age restriction & copyright */}
        <div className="flex items-center justify-between text-[10px] text-gray-600 pt-4 border-t border-white/5">
          <div className="w-6 h-6 rounded-full bg-red-900/50 border border-red-800 flex items-center justify-center text-red-400 text-[8px] font-bold">
            18+
          </div>
          <span>2025 - 2026 Manhattan</span>
        </div>
      </div>
    </footer>
  );
}
