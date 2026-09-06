import { Reveal } from "../ui/Reveal";
import { Diya } from "../ui/Diya";
import "./communitySection.css";

export function CommunitySection() {
  return (
    <section className="section community-section">
      <div className="section-inner community-inner">
        <Reveal>
          <h2 className="community-title dev">बाप्पा आपल्याला एकत्र आणतो</h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="community-text">Bappa brings us together.</p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="community-sub">
            Every family at {" "}
            <strong>Kapol Niwas</strong>, one celebration — from the youngest
            resident lighting their first diya, to the elders leading the
            aarti.
          </p>
        </Reveal>

        <div className="community-diyas" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <Diya key={i} size={26 + (i % 3) * 6} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
