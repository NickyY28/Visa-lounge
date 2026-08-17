import { useId } from "react"

import { cn } from "@/lib/utils"

type OrbitingPlaneProps = {
  className?: string
}

export function OrbitingPlane({ className }: OrbitingPlaneProps) {
  const uid = useId().replace(/:/g, "")
  const textPathId = `visa-orbit-${uid}`
  const globeId = `visa-globe-${uid}`

  return (
    <div className={cn("orbit-stage", className)} aria-hidden>
      <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
        <defs>
          <path
            id={textPathId}
            d="M 200 200 m -146 0 a 146 146 0 1 1 292 0 a 146 146 0 1 1 -292 0"
          />
          <clipPath id={globeId}>
            <circle cx="200" cy="200" r="74" />
          </clipPath>
        </defs>

        <circle cx="200" cy="200" r="188" className="stroke-ink/12" strokeWidth="1" />
        <circle
          cx="200"
          cy="200"
          r="168"
          className="stroke-ink/45"
          strokeWidth="1.25"
          strokeDasharray="3 9"
        />
        <circle cx="200" cy="200" r="112" className="stroke-ink/18" strokeWidth="1" />

        <circle
          cx="200"
          cy="200"
          r="74"
          className="fill-paper stroke-ink/40"
          strokeWidth="1.25"
        />
        <g
          clipPath={`url(#${globeId})`}
          className="stroke-ink/25"
          strokeWidth="1"
        >
          <ellipse cx="200" cy="200" rx="28" ry="74" />
          <ellipse cx="200" cy="200" rx="52" ry="74" />
          <line x1="126" y1="200" x2="274" y2="200" />
          <line x1="126" y1="176" x2="274" y2="176" />
          <line x1="126" y1="224" x2="274" y2="224" />
        </g>

        <text
          x="200"
          y="196"
          textAnchor="middle"
          className="fill-ink"
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "30px",
            letterSpacing: "0.08em",
          }}
        >
          VL
        </text>
        <text
          x="200"
          y="218"
          textAnchor="middle"
          className="fill-ink/50"
          style={{
            fontSize: "8px",
            letterSpacing: "0.32em",
          }}
        >
          GURUGRAM
        </text>

        <circle cx="200" cy="32" r="3" className="fill-ink/55" />
        <circle cx="332" cy="116" r="2.5" className="fill-ink/40" />
        <circle cx="348" cy="248" r="2" className="fill-ink/35" />
        <circle cx="68" cy="280" r="2.5" className="fill-ink/40" />

        <g className="orbit-legend">
          <text
            className="fill-ink/50"
            style={{
              fontSize: "11px",
              letterSpacing: "0.34em",
            }}
          >
            <textPath href={`#${textPathId}`}>
              PREPARE · COLLECT · SUBMIT · RETURN · PREPARE · COLLECT ·
            </textPath>
          </text>
        </g>
      </svg>

      <div className="orbit-plane-track">
        <svg viewBox="0 0 24 24" className="orbit-plane">
          <path
            fill="currentColor"
            d="M21 16v-2l-8-5V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"
          />
        </svg>
      </div>
    </div>
  )
}
