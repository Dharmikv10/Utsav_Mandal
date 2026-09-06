interface GaneshaEmblemProps {
  className?: string;
}

/**
 * A minimal, devotional single-line emblem evoking Ganpati's silhouette —
 * crown, ears, trunk curve — in the spirit of a temple ornament rather than
 * a literal figure. Rendered in gold gradient with a soft aura.
 */
export function GaneshaEmblem({ className }: GaneshaEmblemProps) {
  return (
    <svg
      viewBox="0 0 400 440"
      className={className}
      role="img"
      aria-label="Shree Ganesha emblem"
    >
      <defs>
        <radialGradient id="auraGrad" cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#ffdca0" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#ff8a3d" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#ff8a3d" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6d68a" />
          <stop offset="55%" stopColor="#d4a544" />
          <stop offset="100%" stopColor="#9a6f22" />
        </linearGradient>
      </defs>

      <circle cx="200" cy="190" r="185" fill="url(#auraGrad)" />

      {/* crown */}
      <path
        d="M150 70 Q200 20 250 70 Q235 60 200 62 Q165 60 150 70 Z"
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="200" cy="48" r="9" fill="none" stroke="url(#lineGrad)" strokeWidth="3" />

      {/* head + ears, single flowing contour */}
      <path
        d="
          M140 105
          C 95 108, 60 150, 68 195
          C 72 222, 100 232, 118 218
          C 122 245, 140 270, 165 282
          L 150 300
          C 175 320, 225 320, 250 300
          L 235 282
          C 260 270, 278 245, 282 218
          C 300 232, 328 222, 332 195
          C 340 150, 305 108, 260 105
          C 250 88, 225 78, 200 78
          C 175 78, 150 88, 140 105
          Z
        "
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* trunk, gentle curve */}
      <path
        d="M182 250 C 178 285, 195 315, 175 345 C 160 366, 130 366, 118 348"
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* tusk accent */}
      <path
        d="M205 258 Q220 268 215 285"
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* seated base / lotus suggestion */}
      <path
        d="M110 372 Q200 410 290 372"
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M95 388 Q200 425 305 388"
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}
