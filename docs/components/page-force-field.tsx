"use client";

import type { ReactNode } from "react";
import { ForceField } from "@/components/canvasui/ForceField";

export function PageForceField({ children }: { children: ReactNode }) {
  return (
    <ForceField
      className="h-dvh min-h-0 w-full flex-1"
      shape="hexagon"
      color={[0.92, 0.62, 0.12]}
      edgeColor={[1, 0.86, 0.42]}
      opacity={0.62}
      cellScale={18}
      lineWidth={0.028}
      gridOpacity={0.18}
      gridReveal="click"
      hoverGlow={0}
      hoverCharge={0}
      capture={false}
      clickRipples
      rippleIntensity={0.22}
      rippleDuration={1.8}
      refraction={24}
      haze={0.35}
      tint={0.05}
      dim={0}
      bloom={0.85}
      grain={0.12}
    >
      {children}
    </ForceField>
  );
}
