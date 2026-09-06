import { Reveal } from "../ui/Reveal";
import { ganpatiConfig } from "../../data/ganpatiConfig";
import "./aagmanSection.css";

export function AagmanSection() {
  return (
    <section className="section aagman-section">
      <div className="aagman-bars" aria-hidden="true">
        {Array.from({ length: 7 }).map((_, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.12}s` }} />
        ))}
      </div>
      <div className="section-inner aagman-inner">
        <Reveal y={60}>
          <h2 className="aagman-title dev">श्री गणेश आगमन सोहळा</h2>
        </Reveal>
        <Reveal delay={0.15} y={30}>
          <p className="aagman-en">AAGMAN</p>
        </Reveal>
        <Reveal delay={0.3} y={20}>
          <p className="aagman-detail">
            {ganpatiConfig.aagman.dateLabel} · {ganpatiConfig.aagman.time} ·{" "}
            {ganpatiConfig.aagman.venue}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
