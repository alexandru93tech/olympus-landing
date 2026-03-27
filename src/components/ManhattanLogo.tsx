export default function ManhattanLogo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-serif italic text-white tracking-wide select-none ${className}`}
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      Manhattan
    </span>
  );
}
