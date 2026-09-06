import { useEffect, useRef } from "react";
import gsap from "gsap";
import { GaneshaEmblem } from "../ui/GaneshaEmblem";
import { ganpatiConfig } from "../../data/ganpatiConfig";
import "./hero.css";

interface HeroProps {
  reveal: boolean;
}

export function Hero({ reveal }: HeroProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const leftCurtain = useRef<HTMLDivElement>(null);
  const rightCurtain = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!reveal) return;
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(leftCurtain.current, { xPercent: -100, duration: 1.6, ease: "power4.inOut" }, 0)
      .to(rightCurtain.current, { xPercent: 100, duration: 1.6, ease: "power4.inOut" }, 0)
      .fromTo(
        emblemRef.current,
        { opacity: 0, scale: 0.85, filter: "blur(8px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.4 },
        0.5
      )
      .fromTo(
        copyRef.current?.children ?? [],
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15 },
        1.1
      );
  }, [reveal]);

  return (
    <section className="hero" ref={rootRef}>
      <div className="hero-stage">
        <div className="hero-emblem" ref={emblemRef}>
          <GaneshaEmblem className="hero-emblem-svg" />
        </div>
      </div>

      <div className="hero-copy" ref={copyRef}>
        <p className="eyebrow">{ganpatiConfig.mandalNameEn} presents</p>
        <h1 className="hero-title dev">गणपती बाप्पा मोरया!</h1>
        <p className="hero-sub">
          An invitation to welcome Bappa home — {ganpatiConfig.buildingNameEn}
        </p>
      </div>

      <div className="hero-curtain hero-curtain-left" ref={leftCurtain} />
      <div className="hero-curtain hero-curtain-right" ref={rightCurtain} />

      <div className="hero-scroll-cue">
        <span />
        <p>scroll</p>
      </div>
    </section>
  );
}
