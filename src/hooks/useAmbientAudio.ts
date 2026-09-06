import { useCallback, useRef, useState } from "react";

/**
 * Manages optional ambient soundscape. Never autoplays — only starts after
 * an explicit user gesture. If no audio file is present (or the browser
 * blocks it), fails silently so the experience is unaffected.
 *
 * Drop files at /public/audio/temple-bell.mp3 and /public/audio/ambience.mp3
 * to enable sound.
 */
export function useAmbientAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [ready, setReady] = useState(false);

  const start = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio("/audio/ambience.mp3");
      audio.loop = true;
      audio.volume = 0.35;
      audioRef.current = audio;
    }
    audioRef.current
      .play()
      .then(() => {
        setMuted(false);
        setReady(true);
      })
      .catch(() => {
        // Autoplay blocked or file missing — stay muted silently.
        setReady(false);
      });
  }, []);

  const toggle = useCallback(() => {
    if (!audioRef.current) {
      start();
      return;
    }
    if (muted) {
      audioRef.current.play().catch(() => {});
      setMuted(false);
    } else {
      audioRef.current.pause();
      setMuted(true);
    }
  }, [muted, start]);

  const playBell = useCallback(() => {
    try {
      const bell = new Audio("/audio/temple-bell.mp3");
      bell.volume = 0.5;
      bell.play().catch(() => {});
    } catch {
      // ignore — decorative only
    }
  }, []);

  return { muted, ready, start, toggle, playBell };
}
