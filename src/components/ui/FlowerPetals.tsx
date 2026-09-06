import { useMemo } from "react";
import "./flowerPetals.css";

interface FlowerPetalsProps {
  count?: number;
  reducedMotion?: boolean;
}

const COLORS = ["#ff8a3d", "#ffb930", "#e05a3e", "#f2cb7c"];

export function FlowerPetals({ count = 14, reducedMotion = false }: FlowerPetalsProps) {
  const petals = useMemo(
    () =>
      Array.from({ length: reducedMotion ? Math.min(4, count) : count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 14,
        duration: 14 + Math.random() * 12,
        delay: Math.random() * -20,
        rotate: Math.random() * 360,
        drift: (Math.random() - 0.5) * 160,
        color: COLORS[i % COLORS.length],
      })),
    [count, reducedMotion]
  );

  return (
    <div className="petal-field" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={
            {
              left: `${p.left}%`,
              width: p.size,
              height: p.size * 1.2,
              background: p.color,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--rotate": `${p.rotate}deg`,
              "--drift": `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
