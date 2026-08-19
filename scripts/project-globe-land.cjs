/**
 * Projects Natural Earth 110m land GeoJSON into SVG path data
 * for the hero globe strip (equirectangular, 400×200, Antarctica omitted).
 */
const fs = require("fs")
const path = require("path")

const INPUT = process.argv[2]
const OUTPUT = path.join("src", "lib", "globe-land-paths.ts")
const WIDTH = 400
const HEIGHT = 200
const ANTARCTICA_LAT = -58

function project(lon, lat) {
  return [
    Number((((lon + 180) / 360) * WIDTH).toFixed(2)),
    Number((((90 - lat) / 180) * HEIGHT).toFixed(2)),
  ]
}

function ringArea(ring) {
  let area = 0
  for (let i = 0; i < ring.length - 1; i += 1) {
    const [lon1, lat1] = ring[i]
    const [lon2, lat2] = ring[i + 1]
    const [x1, y1] = project(lon1, lat1)
    const [x2, y2] = project(lon2, lat2)
    area += x1 * y2 - x2 * y1
  }
  return Math.abs(area) / 2
}

function ringCentroidLat(ring) {
  let sum = 0
  let n = 0
  for (const point of ring) {
    if (!Array.isArray(point) || point.length < 2) continue
    sum += point[1]
    n += 1
  }
  return n ? sum / n : 0
}

function ringToPath(ring) {
  if (!ring || ring.length < 4) return ""

  const parts = []
  let current = []

  const pushPoint = (lon, lat) => {
    const [x, y] = project(lon, lat)
    current.push([x, y])
  }

  for (let i = 0; i < ring.length; i += 1) {
    const [lon, lat] = ring[i]
    if (i === 0) {
      pushPoint(lon, lat)
      continue
    }
    const [prevLon] = ring[i - 1]
    if (Math.abs(lon - prevLon) > 180) {
      if (current.length > 2) parts.push(current)
      current = []
    }
    pushPoint(lon, lat)
  }
  if (current.length > 2) parts.push(current)

  return parts
    .map((pts) => {
      const [start, ...rest] = pts
      let d = `M${start[0]} ${start[1]}`
      for (const [x, y] of rest) d += `L${x} ${y}`
      d += "Z"
      return d
    })
    .join("")
}

function collectPolygons(geometry, polygons) {
  if (!geometry) return
  if (geometry.type === "Polygon") polygons.push(geometry.coordinates)
  if (geometry.type === "MultiPolygon") polygons.push(...geometry.coordinates)
}

const geo = JSON.parse(fs.readFileSync(INPUT, "utf8"))
const paths = []

for (const feature of geo.features || []) {
  const polygons = []
  collectPolygons(feature.geometry, polygons)

  for (const polygon of polygons) {
    const exterior = polygon[0]
    if (!exterior) continue
    if (ringCentroidLat(exterior) < ANTARCTICA_LAT) continue
    if (ringArea(exterior) < 6) continue
    const d = ringToPath(exterior)
    if (d) paths.push(d)
  }
}

const file = `/**
 * Land silhouettes projected from Natural Earth 110m land
 * (equirectangular, 400×200 user units). Antarctica omitted.
 * Source: https://www.naturalearthdata.com/
 */
export const globeLandPaths = ${JSON.stringify(paths, null, 2)} as const
`

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true })
fs.writeFileSync(OUTPUT, file)
console.log("Wrote " + paths.length + " land paths to " + OUTPUT)
