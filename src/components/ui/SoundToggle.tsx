import "./soundToggle.css";

interface SoundToggleProps {
  muted: boolean;
  onToggle: () => void;
}

export function SoundToggle({ muted, onToggle }: SoundToggleProps) {
  return (
    <button
      className="sound-toggle"
      onClick={onToggle}
      data-cursor={muted ? "UNMUTE" : "MUTE"}
      aria-label={muted ? "Unmute ambient sound" : "Mute ambient sound"}
    >
      <span className={`sound-bars ${muted ? "" : "is-playing"}`}>
        <i />
        <i />
        <i />
      </span>
    </button>
  );
}
