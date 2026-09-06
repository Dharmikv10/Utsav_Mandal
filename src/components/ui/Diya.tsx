import "./diya.css";

interface DiyaProps {
  lit?: boolean;
  size?: number;
  delay?: number;
}

export function Diya({ lit = true, size = 48, delay = 0 }: DiyaProps) {
  return (
    <div className="diya" style={{ width: size, height: size * 1.3 }}>
      <div
        className={`diya-flame-wrap ${lit ? "is-lit" : ""}`}
        style={{ transitionDelay: `${delay}ms`, animationDelay: `${delay}ms` }}
      >
        <div className="diya-flame" />
        <div className="diya-glow" />
      </div>
      <svg viewBox="0 0 100 60" className="diya-vessel">
        <path
          d="M5 25 Q50 65 95 25 L88 20 Q50 45 12 20 Z"
          fill="url(#diyaGradient)"
        />
        <defs>
          <linearGradient id="diyaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d4a544" />
            <stop offset="100%" stopColor="#7a5417" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
