import ManhattanLogo from "./ManhattanLogo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/5 pt-4 pb-2">
      <div className="px-[100px] h-16 flex items-center justify-between">
        <ManhattanLogo className="text-2xl sm:text-3xl" />
        <div className="flex items-center gap-3">
          <button className="px-5 py-1 rounded-lg bg-gradient-to-r from-[#d946ef] to-[#a855f7] text-white text-sm font-bold hover:from-[#e879f9] hover:to-[#c084fc] transition-all">
            DESCHIDE CONT
          </button>
          <button className="px-5 py-1 rounded-lg border border-purple-500 text-white text-sm font-bold hover:bg-purple-500/10 transition-colors">
            CONECTARE
          </button>
        </div>
      </div>
    </header>
  );
}
