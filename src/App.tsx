import { useState } from "react";
import { IntroSequence } from "./components/sections/IntroSequence";
import { Hero } from "./components/sections/Hero";
import { ArrivalSection } from "./components/sections/ArrivalSection";
import { InvitationSection } from "./components/sections/InvitationSection";
import { AagmanSection } from "./components/sections/AagmanSection";
import { CelebrationSection } from "./components/sections/CelebrationSection";
import { ScheduleSection } from "./components/sections/ScheduleSection";
import { CommunitySection } from "./components/sections/CommunitySection";
import { FinalSection } from "./components/sections/FinalSection";
import { BackgroundScene } from "./components/three/BackgroundScene";
import { FlowerPetals } from "./components/ui/FlowerPetals";
import { CustomCursor } from "./components/ui/CustomCursor";
import { SoundToggle } from "./components/ui/SoundToggle";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { useAmbientAudio } from "./hooks/useAmbientAudio";

function App() {
  const [entered, setEntered] = useState(false);
  const reducedMotion = useReducedMotion();
  const { muted, toggle, start, playBell } = useAmbientAudio();

  useSmoothScroll(entered);

  const handleEnter = () => {
    setEntered(true);
    playBell();
    start();
  };

  return (
    <>
      <div className="grain" />
      <div className="vignette" />
      <CustomCursor />

      {!entered && <IntroSequence onEnter={handleEnter} reducedMotion={reducedMotion} />}

      {entered && (
        <>
          <BackgroundScene reducedMotion={reducedMotion} />
          <FlowerPetals reducedMotion={reducedMotion} count={reducedMotion ? 5 : 16} />
          <SoundToggle muted={muted} onToggle={toggle} />

          <main>
            <Hero reveal={entered} />
            <ArrivalSection />
            <InvitationSection />
            <AagmanSection />
            <CelebrationSection />
            <ScheduleSection />
            <CommunitySection />
            <FinalSection />
          </main>
        </>
      )}
    </>
  );
}

export default App;
