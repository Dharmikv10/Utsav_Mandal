import { Reveal } from "../ui/Reveal";
import { ganpatiConfig } from "../../data/ganpatiConfig";
import "./scheduleSection.css";

export function ScheduleSection() {
  return (
    <section className="section schedule-section">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">How the festival unfolds</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="schedule-title dev">वेळापत्रक</h2>
        </Reveal>

        <div className="schedule-timeline">
          <div className="schedule-line" aria-hidden="true" />
          {ganpatiConfig.schedule.map((event, i) => (
            <Reveal key={event.id} delay={0.08 * i} y={24} className="schedule-item">
              <div className="schedule-dot" />
              <div className="schedule-content">
                <p className="schedule-mr dev-body">{event.titleMr}</p>
                <p className="schedule-en">{event.title}</p>
                <p className="schedule-detail">{event.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
