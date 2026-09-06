import { Reveal } from "../ui/Reveal";
import "./arrivalSection.css";

export function ArrivalSection() {
  return (
    <section className="section arrival-section">
      <div className="arrival-ribbon" aria-hidden="true" />
      <div className="section-inner arrival-inner">
        <Reveal>
          <p className="eyebrow">The divine arrival begins…</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="arrival-title dev">बाप्पांचे आगमन</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="arrival-text">
            Every year, our building comes alive with dhol beats and marigold
            garlands as Bappa arrives among us. This year, Kapol Niwas opens
            its doors once again — to welcome him home.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
