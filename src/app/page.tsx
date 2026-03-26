import Image from "next/image";

/* ─── Reusable small components ─── */

function ManhattanLogo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-serif italic text-white tracking-wide select-none ${className}`}
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      Manhattan
    </span>
  );
}



function StepBadge({
  number,
  color,
}: {
  number: number;
  color: "pink" | "cyan" | "green";
}) {
  const gradients = {
    pink: "from-pink-500 to-rose-600",
    cyan: "from-cyan-400 to-blue-500",
    green: "from-green-400 to-emerald-600",
  };
  return (
    <div
      className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${gradients[color]} flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg`}
    >
      {number}
    </div>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  return (
    <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors cursor-pointer text-sm">
      {icon}
    </div>
  );
}

/* ─── Main Page ─── */

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      {/* ═══ HEADER ═══ */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <ManhattanLogo className="text-2xl sm:text-3xl" />
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg border-2 border-yellow-500 text-yellow-500 text-sm font-bold hover:bg-yellow-500 hover:text-black transition-colors">
              DESCHIDE CONT
            </button>
            <button className="px-4 py-2 rounded-lg border-2 border-yellow-500 text-yellow-500 text-sm font-bold hover:bg-yellow-500 hover:text-black transition-colors hidden sm:block">
              CONECTARE
            </button>
          </div>
        </div>
      </header>

      {/* ═══ HERO SECTION ═══ */}
      <section className="relative overflow-visible">
        <div className="hero-gradient relative overflow-visible">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 mt-8 md:mt-12 lg:mt-16">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Left content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-4 md:mb-6">
                  <span className="text-7xl sm:text-8xl md:text-9xl font-black text-white leading-none">
                    10
                  </span>
                  <div className="inline-block ml-2 align-top mt-2 sm:mt-4">
                    <span className="block text-4xl sm:text-5xl md:text-6xl font-black text-yellow-400 leading-tight">
                      ROTIRI
                    </span>
                    <span className="block text-4xl sm:text-5xl md:text-6xl font-black text-yellow-400 leading-tight">
                      GRATUITE
                    </span>
                  </div>
                </div>

                <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8">
                  la Gates of Olympus la descărcarea aplicației
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                  <span className="badge-dashed text-yellow-400 font-bold text-sm sm:text-base rounded">
                    FĂRĂ RULAJ!
                  </span>
                  <span className="badge-dashed text-yellow-400 font-bold text-sm sm:text-base rounded">
                    FĂRĂ DEPUNERE
                  </span>
                </div>

                {/* CTA Button */}
                <button className="btn-pulse bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all hover:scale-105 uppercase tracking-wide">
                  DESCARCĂ ACUM
                </button>
              </div>

              {/* Right - Character GIF + Phone hero image */}
              <div className="relative flex-shrink-0 lg:mt-[-120px] flex items-end">
                {/* Zeus/character GIF */}
                <img
                  src="/olympus.gif"
                  alt="Zeus character"
                  className="relative z-10 w-72 sm:w-80 md:w-96 lg:w-[450px] h-auto -mr-12"
                />
                {/* Phone mockup */}
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500/30 blur-3xl rounded-full scale-125" />
                  <Image
                    src="/phone-hero.png"
                    alt="Manhattan Casino App"
                    width={400}
                    height={500}
                    className="relative z-10 w-48 sm:w-56 md:w-64 lg:w-72 h-auto phone-shadow"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STEPS SECTION ═══ */}
      <section className="py-12 md:py-16 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Step 1 */}
            <div className="step-card flex flex-col items-center text-center bg-[#111] rounded-2xl p-6 md:p-8 border border-white/5">
              <StepBadge number={1} color="pink" />
              <h3 className="text-xl font-bold text-white mt-4 mb-2 uppercase">
                Descarcă
              </h3>
              <p className="text-gray-400 text-sm">
                Instalează aplicația din App Store.
              </p>
            </div>

            {/* Step 2 */}
            <div className="step-card flex flex-col items-center text-center bg-[#111] rounded-2xl p-6 md:p-8 border border-white/5">
              <StepBadge number={2} color="cyan" />
              <h3 className="text-xl font-bold text-white mt-4 mb-2 uppercase">
                Înregistrează-te
              </h3>
              <p className="text-gray-400 text-sm">
                Creează-ți contul Manhattan în câteva secunde.
              </p>
            </div>

            {/* Step 3 */}
            <div className="step-card flex flex-col items-center text-center bg-[#111] rounded-2xl p-6 md:p-8 border border-white/5">
              <StepBadge number={3} color="green" />
              <h3 className="text-xl font-bold text-white mt-4 mb-2 uppercase">
                Felicitări!
              </h3>
              <p className="text-gray-400 text-sm">
                Verifică-ți contul și rotirile intră automat!
              </p>
            </div>
          </div>

          {/* Terms link */}
          <div className="flex justify-center mt-10">
            <a
              href="#termeni"
              className="px-6 py-3 border-2 border-white/30 text-white/80 font-bold text-sm rounded hover:border-white/60 hover:text-white transition-colors uppercase tracking-wider"
            >
              Termene și Condiții
            </a>
          </div>
        </div>
      </section>

      {/* ═══ APP SHOWCASE SECTION ═══ */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Phone mockups */}
            <div className="flex-shrink-0">
              <Image
                src="/phones.png"
                alt="Manhattan Casino & Sports App"
                width={600}
                height={582}
                className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto phone-shadow"
                priority
              />
            </div>

            {/* Brand info */}
            <div className="text-center lg:text-left">
              {/* Logo circle */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#1a1a2e] border-2 border-purple-500/30 mb-6">
                <ManhattanLogo className="text-lg" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                MANHATTAN
              </h2>
              <p className="text-xl sm:text-2xl font-bold text-white/80 mb-6">
                CASINO & SPORTS
              </p>

              <p className="text-gray-400 mb-6 text-lg">Descarcă aplicația</p>

              {/* App Store Button */}
              <a
                href="#download"
                className="inline-flex items-center gap-3 bg-black border border-white/20 rounded-xl px-6 py-3 hover:bg-gray-900 transition-colors"
              >
                <svg
                  className="w-8 h-8 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 leading-tight">
                    Download on the
                  </div>
                  <div className="text-lg font-semibold text-white leading-tight">
                    App Store
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-[#0a0a0a] border-t border-white/5 pt-10 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Social icons */}
          <div className="flex gap-3 mb-8">
            <SocialIcon icon="f" />
            <SocialIcon icon="♪" />
            <SocialIcon icon="▶" />
            <SocialIcon icon="📷" />
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 text-sm">
            <div>
              <h4 className="text-white/60 font-bold mb-3 uppercase text-xs tracking-wider">
                Regulile Manhattan
              </h4>
              <ul className="space-y-2 text-gray-500">
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
              <ul className="space-y-2 text-gray-500">
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
              <ul className="space-y-2 text-gray-500">
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
            <p className="text-xs text-gray-600 uppercase tracking-wider mb-4">
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
    </div>
  );
}
