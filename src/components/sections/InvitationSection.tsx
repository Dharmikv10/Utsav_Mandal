import { Reveal } from "../ui/Reveal";
import { ganpatiConfig } from "../../data/ganpatiConfig";
import "./invitationSection.css";

export function InvitationSection() {
  return (
    <section className="section invitation-section">
      <div className="section-inner">
        <Reveal>
          <div className="invitation-card">
            <div className="invitation-border" aria-hidden="true" />
            <p className="invitation-mandal">{ganpatiConfig.mandalName}</p>
            <h2 className="invitation-headline dev">गणपती बाप्पा मोरया!</h2>
            <p className="invitation-line dev-body">आपणांस सहर्ष आमंत्रित</p>

            <div className="invitation-details">
              <div className="invitation-row">
                <span className="invitation-label">Society</span>
                <span className="invitation-value">{ganpatiConfig.buildingNameEn}</span>
              </div>
              <div className="invitation-row">
                <span className="invitation-label">Date</span>
                <span className="invitation-value">{ganpatiConfig.aagman.dateLabel}</span>
              </div>
              <div className="invitation-row">
                <span className="invitation-label">Time</span>
                <span className="invitation-value">{ganpatiConfig.aagman.time}</span>
              </div>
              <div className="invitation-row">
                <span className="invitation-label">Venue</span>
                <span className="invitation-value">{ganpatiConfig.aagman.venue}</span>
              </div>
            </div>

            <p className="invitation-footer">
              Hosted with devotion by <strong>{ganpatiConfig.mandalNameEn}</strong>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
