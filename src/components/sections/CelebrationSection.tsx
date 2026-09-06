import { Reveal } from "../ui/Reveal";
import { ganpatiConfig } from "../../data/ganpatiConfig";
import "./celebrationSection.css";

const ICONS: Record<string, string> = {
  diya: "🪔",
  flower: "🌺",
  dhol: "🥁",
  music: "🎶",
  prasad: "🍛",
  community: "🙏",
};

export function CelebrationSection() {
  return (
    <section className="section celebration-section">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">What awaits at Kapol Niwas</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="celebration-title dev">उत्सवाचे रंग</h2>
        </Reveal>

        <div className="celebration-grid">
          {ganpatiConfig.celebrationCards.map((card, i) => (
            <Reveal key={card.id} delay={0.05 * i} y={30} className="celebration-card-wrap">
              <div className="celebration-card">
                <span className="celebration-icon">{ICONS[card.icon]}</span>
                <p className="celebration-card-title-mr dev-body">{card.titleMr}</p>
                <p className="celebration-card-title-en">{card.titleEn}</p>
                <p className="celebration-card-desc">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
