import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const VERTEX = /* glsl */ `
  attribute float aScale;
  attribute float aSpeed;
  attribute float aOffset;
  uniform float uTime;
  uniform vec2 uPointer;
  varying float vAlpha;

  void main() {
    vec3 pos = position;

    // gentle upward drift + sway
    float t = uTime * aSpeed + aOffset;
    pos.y += sin(t) * 0.4 + mod(uTime * aSpeed * 0.6, 6.0) - 3.0;
    pos.x += cos(t * 0.7) * 0.3;

    // subtle attraction toward pointer for a living feel
    vec2 toPointer = uPointer - pos.xy * 0.15;
    pos.xy += toPointer * 0.02;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aScale * (220.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;

    vAlpha = 0.35 + 0.35 * sin(t * 1.3);
  }
`;

const FRAGMENT = /* glsl */ `
  precision mediump float;
  varying float vAlpha;
  uniform vec3 uColor;

  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    float alpha = smoothstep(0.5, 0.0, d) * vAlpha;
    gl_FragColor = vec4(uColor, alpha);
  }
`;

interface ParticleFieldProps {
  count?: number;
  color?: string;
  spread?: number;
}

export function ParticleField({ count = 500, color = "#f2cb7c", spread = 8 }: ParticleFieldProps) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const [positions, scales, speeds, offsets] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const speeds = new Float32Array(count);
    const offsets = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread * 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
      scales[i] = Math.random() * 3 + 1;
      speeds[i] = Math.random() * 0.3 + 0.05;
      offsets[i] = Math.random() * 10;
    }
    return [positions, scales, speeds, offsets];
  }, [count, spread]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      pointer.current.x = state.pointer.x * (spread / 2);
      pointer.current.y = state.pointer.y * (spread / 2);
      materialRef.current.uniforms.uPointer.value.set(pointer.current.x, pointer.current.y);
    }
  });

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPointer: { value: new THREE.Vector2(0, 0) },
      uColor: { value: new THREE.Color(color) },
    }),
    [color]
  );

  return (
    <points frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aScale" args={[scales, 1]} />
        <bufferAttribute attach="attributes-aSpeed" args={[speeds, 1]} />
        <bufferAttribute attach="attributes-aOffset" args={[offsets, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={VERTEX}
        fragmentShader={FRAGMENT}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
