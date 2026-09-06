import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { ParticleField } from "./ParticleField";
import { Suspense } from "react";

interface BackgroundSceneProps {
  intensity?: number;
  reducedMotion?: boolean;
}

export function BackgroundScene({ intensity = 1, reducedMotion = false }: BackgroundSceneProps) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={reducedMotion ? 1 : [1, 1.75]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.15} color="#ff8a3d" />
          <pointLight position={[0, -1, 2]} intensity={2} color="#ffb168" distance={12} />
          <ParticleField count={reducedMotion ? 120 : 420} color="#f2cb7c" spread={9} />
          {!reducedMotion && (
            <EffectComposer multisampling={0}>
              <Bloom
                intensity={0.9 * intensity}
                luminanceThreshold={0.15}
                luminanceSmoothing={0.4}
                mipmapBlur
              />
              <Vignette eskil={false} offset={0.2} darkness={0.9} />
            </EffectComposer>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
