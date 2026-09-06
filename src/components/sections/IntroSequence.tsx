import { useEffect, useState } from "react";
import { Diya } from "../ui/Diya";
import "./introSequence.css";

interface IntroSequenceProps {
  onEnter: () => void;
  reducedMotion: boolean;
}

type Stage = "dark" | "diyas" | "om" | "mantra" | "title" | "ready" | "igniting" | "done";

export function IntroSequence({ onEnter, reducedMotion }: IntroSequenceProps) {
  const [stage, setStage] = useState<Stage>("dark");

  useEffect(() => {
    if (reducedMotion) {
      setStage("ready");
      return;
    }
    const timers = [
      setTimeout(() => setStage("diyas"), 600),
      setTimeout(() => setStage("om"), 2600),
      setTimeout(() => setStage("mantra"), 4000),
      setTimeout(() => setStage("title"), 5600),
      setTimeout(() => setStage("ready"), 7200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [reducedMotion]);

  const handleEnter = () => {
    setStage("igniting");
    setTimeout(() => {
      setStage("done");
      onEnter();
    }, 1100);
  };

  if (stage === "done") return null;

  const diyasLit = stage !== "dark";
  const showOm = ["om", "mantra", "title", "ready", "igniting"].includes(stage);
  const showMantra = ["mantra", "title", "ready", "igniting"].includes(stage);
  const showTitle = ["title", "ready", "igniting"].includes(stage);
  const showButton = stage === "ready";

  return (
    <div className={`intro ${stage === "igniting" ? "is-igniting" : ""}`}>
      <div className="intro-ambient" />

      <div className="intro-diyas">
        <Diya lit={diyasLit} size={40} delay={0} />
        <Diya lit={diyasLit} size={56} delay={250} />
        <Diya lit={diyasLit} size={40} delay={500} />
      </div>

      <div className="intro-copy">
        <div className={`intro-om ${showOm ? "is-visible" : ""}`}>ॐ</div>
        <div className={`intro-mantra dev-body ${showMantra ? "is-visible" : ""}`}>
          श्री गणेशाय नमः
        </div>
        <h1 className={`intro-title dev ${showTitle ? "is-visible" : ""}`}>
          गणपती बाप्पा मोरया!
        </h1>

        {showButton && (
          <button className="intro-enter" onClick={handleEnter} data-cursor="ENTER">
            <span className="dev-body">बाप्पांचे स्वागत करा</span>
            <span className="intro-enter-sub">Tap to welcome Bappa</span>
          </button>
        )}
      </div>

      <div className="intro-flash" />
    </div>
  );
}
