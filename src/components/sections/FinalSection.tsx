import { Reveal } from "../ui/Reveal";
import { Diya } from "../ui/Diya";
import { ganpatiConfig } from "../../data/ganpatiConfig";
import "./finalSection.css";

export function FinalSection() {
  return (
    <section className="section final-section">
      <div className="final-glow" aria-hidden="true" />
      <div className="section-inner final-inner">
        <Diya size={64} />
        <Reveal delay={0.1}>
          <h2 className="final-title">Come. Celebrate. Welcome Bappa.</h2>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="final-mantra dev">गणपती बाप्पा मोरया!</p>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="final-line">We await your presence.</p>
        </Reveal>
        <Reveal delay={0.55}>
          <p className="final-host">
            {ganpatiConfig.mandalNameEn} · {ganpatiConfig.buildingNameEn}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
