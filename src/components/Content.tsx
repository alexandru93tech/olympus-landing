import Image from "next/image";
import ManhattanLogo from "./ManhattanLogo";

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

export default function Content() {
  return (
    <>
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative overflow-visible mx-[100px] mt-[50px]">
        <Image
          src="/Banner Bonus App-150 dpi.png"
          alt="10 Rotiri Gratuite - Manhattan Casino"
          width={3457}
          height={1452}
          className="w-full h-auto"
          priority
        />
        {/* Zeus/character GIF overlay */}
        <img
          src="/olympus.gif"
          alt="Zeus character"
          className="absolute top-0 right-[20%] -translate-y-[20%] w-[35%] h-auto z-10 pointer-events-none"
        />
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
              className="px-5 py-2 border-2 border-purple-600 text-white font-bold text-sm rounded-lg hover:border-purple-400 transition-colors uppercase tracking-wider"
            >
              Termene și Condiții
            </a>
          </div>
        </div>
      </section>

      {/* ═══ APP SHOWCASE SECTION ═══ */}
      <section className="relative py-16 md:py-24 overflow-visible mx-[100px] my-[200px]">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2d1b69] via-[#4a1a8a] to-[#c026d3] rounded-2xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Phone mockups */}
            <div className="flex-shrink-0 overflow-visible">
              <Image
                src="/phones.png"
                alt="Manhattan Casino & Sports App"
                width={600}
                height={582}
                className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto phone-shadow mt-[-210px] mb-[-150px]"
                priority
              />
            </div>

            {/* Brand info */}
            <div className="text-center">
              {/* Logo + Title row */}
              <div className="flex items-center gap-4 mb-6 justify-center">
                <div className="inline-flex items-center justify-center w-28 h-28 rounded-2xl bg-[#111] shadow-lg overflow-hidden">
                  <ManhattanLogo className="text-xl" />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    MANHATTAN
                  </h2>
                  <p className="text-lg sm:text-xl font-bold text-white/80">
                    CASINO & SPORTS
                  </p>
                </div>
              </div>

              <p className="text-white font-bold mb-4 text-base">Descarcă aplicația</p>

              {/* App Store Button */}
              <a
                href="#download"
                className="inline-flex items-center gap-3 border border-white/30 rounded-xl px-5 py-2.5 hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-7 h-7 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-white/80 leading-tight">
                    Download on the
                  </div>
                  <div className="text-base font-semibold text-white leading-tight">
                    App Store
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
