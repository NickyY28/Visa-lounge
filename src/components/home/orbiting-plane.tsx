import Image from "next/image"
import { useId } from "react"

import { brandLogo } from "@/components/layout/site-logo"
import { globeLandPaths } from "@/lib/globe-land-paths"
import { cn } from "@/lib/utils"

type OrbitingPlaneProps = {
  className?: string
}

export function OrbitingPlane({ className }: OrbitingPlaneProps) {
  const uid = useId().replace(/:/g, "")
  const textPathId = `visa-orbit-${uid}`

  return (
    <div className={cn("orbit-stage", className)} aria-hidden>
      <svg viewBox="-4 -4 408 408" className="h-full w-full" fill="none">
      <defs>
        <path
        id={textPathId}
        d="M 200 200 m -188 0 a 188 188 0 1 1 376 0 a 188 188 0 1 1 -376 0"
        />
      </defs>
        <circle
          cx="200"
          cy="200"
          r="175"
          className="stroke-ink/20"
          strokeWidth="1"
          strokeDasharray="3 8"
        />
        <circle
          cx="200"
          cy="200"
          r="160"
          className="stroke-ink/10"
          strokeWidth="1"
        />
        <circle cx="200" cy="32" r="3" className="fill-ink/55" />
        <circle cx="332" cy="116" r="2.5" className="fill-ink/40" />
        <circle cx="348" cy="248" r="2" className="fill-ink/35" />
        <circle cx="68" cy="280" r="2.5" className="fill-ink/40" />

        <g className="orbit-legend">
          <text
            className="fill-ink/50"
            style={{
              fontSize: "10.5px",
              letterSpacing: "0.38em",
              textTransform: "uppercase" as const,
              fontWeight: 500,
            }}
          >
            <textPath href={`#${textPathId}`}>
            VISA · TRAVEL · EXPLORE · RETURN · REPEAT
            </textPath>
          </text>
        </g>
      </svg>

      <div className="orbit-globe">
        <WireframeGlobe uid={uid} />
      </div>

      <div className="orbit-plane-track">
        <div className="orbit-craft">
          <span className="orbit-flag">
            <span className="orbit-flag-pole" />
            <span className="orbit-flag-cloth">
              <Image
                src={brandLogo.src}
                alt=""
                width={brandLogo.width}
                height={brandLogo.height}
                className="h-full w-full object-contain"
              />
            </span>
          </span>
          <svg viewBox="0 0 24 24" className="orbit-plane">
            <path
              fill="currentColor"
              d="M21 16v-2l-8-5V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

function WireframeGlobe({ uid }: { uid: string }) {
  const clipId = `globe-disc-${uid}`
  const sheenId = `globe-sheen-${uid}`

  return (
    <svg viewBox="0 0 200 200" className="h-full w-full">
      <defs>
        <clipPath id={clipId}>
          <circle cx="100" cy="100" r="94" />
        </clipPath>
        <linearGradient id={sheenId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d7ecff" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#8ec4ea" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#1a3f73" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      <circle cx="100" cy="100" r="94" fill="#eaf4fc" />
      <circle cx="100" cy="100" r="94" fill={`url(#${sheenId})`} />

      <g clipPath={`url(#${clipId})`}>
        <g className="globe-land globe-land-back">
          <ContinentStrip fill="#7eb6e4" />
        </g>
        <g className="globe-grid">
          {longitudes.map((delay) => (
            <ellipse
              key={delay}
              className="globe-longitude"
              cx="100"
              cy="100"
              rx="94"
              ry="94"
              style={{ animationDelay: delay }}
            />
          ))}
          {latitudes.map((ry) => (
            <ellipse
              key={ry}
              cx="100"
              cy="100"
              rx="94"
              ry={ry}
              className="globe-latitude"
            />
          ))}
        </g>
        <g className="globe-land globe-land-front">
          <ContinentStrip fill="#163a6b" />
        </g>
      </g>

      <circle
        cx="100"
        cy="100"
        r="94"
        fill="none"
        stroke="#4f8fc4"
        strokeWidth="1.6"
      />
    </svg>
  )
}

const longitudes = ["0s", "-2s", "-4s", "-6s", "-8s", "-10s"]
const latitudes = [28, 55, 78, 94]

function ContinentStrip({ fill }: { fill: string }) {
  return (
    <g>
      <ContinentMap fill={fill} />
      <g transform="translate(400 0)">
        <ContinentMap fill={fill} />
      </g>
    </g>
  )
}

function ContinentMap({ fill }: { fill: string }) {
  return (
    <g fill={fill}>
      {globeLandPaths.map((d, index) => (
        <path key={index} d={d} />
      ))}
    </g>
  )
}
