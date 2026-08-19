/**
 * Photography used as colour against the black-and-white UI.
 * Replace Unsplash URLs with files in /public/assets/images when ready.
 */

const unsplash = (id: string, extra = "") =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80${extra}`

export const pageImages = {
  corporate: {
    src: unsplash("photo-1497366216548-37526070297c"),
    alt: "Quiet office interior",
  },
  insurance: {
    src: unsplash("photo-1469474968028-56623f02e42e"),
    alt: "Sunlit mountain landscape",
  },
  mtc: {
    src: unsplash("photo-1436491865332-7a61a109cc05"),
    alt: "Aircraft wing above clouds",
  },
} as const

export const collageImages = [
  {
    src: unsplash("photo-1546484475-7f7bd55792da"),
    alt: "Open passport",
    className: "left-0 top-8 h-44 w-36 rotate-[-8deg] md:h-52 md:w-40",
  },
  {
    src: unsplash("photo-1450101499163-c8848c66ca85"),
    alt: "Application documents on a desk",
    className: "right-2 top-0 h-40 w-48 rotate-[7deg] md:h-48 md:w-56",
  },
  {
    src: unsplash("photo-1502602898657-3e91760cbb34"),
    alt: "Paris, a visa destination",
    className: "bottom-2 left-10 h-36 w-44 rotate-[4deg] md:h-44 md:w-52",
  },
  {
    src: unsplash("photo-1488646953014-85cb44e25828"),
    alt: "Travel documents and map",
    className: "right-6 bottom-8 h-32 w-32 rotate-[-5deg] md:h-40 md:w-40",
  },
] as const

export const destinationImages: Record<string, { src: string; alt: string }> = {
  australia: {
    src: "https://images.unsplash.com/photo-1595740229246-cfdda61917c6?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sydney Opera House",
  },
  austria: {
    src: "https://images.unsplash.com/photo-1754331202504-50f7fd91bad2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Vienna architecture",
  },
  azerbaijan: {
    src: "https://images.unsplash.com/photo-1596306499300-0b7b1689b9f6?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Baku skyline",
  },
  cambodia: {
    src: "https://images.unsplash.com/photo-1675564813497-75cf769cb74b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Angkor Wat at dusk",
  },
  canada: {
    src: "https://images.unsplash.com/photo-1567647753830-de3fe7ce9f28?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Canadian mountains and lake",
  },
  china: {
    src: "https://images.unsplash.com/photo-1711730751207-4273bdf245d3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Great Wall of China",
  },
  croatia: {
    src: "https://images.unsplash.com/photo-1655547086697-6a90cf88f6d3?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Dubrovnik old town",
  },
  "czech-republic": {
    src: "https://images.unsplash.com/photo-1580852710598-96912fc48065?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Prague old town",
  },
  denmark: {
    src: "https://images.unsplash.com/photo-1659114389529-0f15067332af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Copenhagen waterfront",
  },
  egypt: {
    src: "https://images.unsplash.com/photo-1644166498629-93fb54b286ee?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Pyramids of Giza",
  },
  finland: {
    src: "https://images.unsplash.com/photo-1641237608414-f90192f9b380?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Helsinki harbour",
  },
  france: {
    src: "https://images.unsplash.com/photo-1551865673-9e9ee4f8cd4c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Paris street with the Eiffel Tower",
  },
  georgia: {
    src: "https://images.unsplash.com/photo-1608499781813-44bd498ed089?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Tbilisi cityscape",
  },
  greece: {
    src: "https://images.unsplash.com/photo-1596933144889-c15043a9ddde?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Santorini, Greece",
  },
  "hong-kong": {
    src: "https://images.unsplash.com/photo-1759766730110-8ff0a6222693?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hong Kong skyline",
  },
  iceland: {
    src: "https://images.unsplash.com/photo-1659987112240-46631781d245?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Iceland landscape",
  },
  indonesia: {
    src: "https://images.unsplash.com/photo-1532186651327-6ac23687d189?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Bali temple",
  },
  italy: {
    src: "https://images.unsplash.com/photo-1597078769181-96921b8a2166?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "The Colosseum, Rome",
  },
  japan: {
    src: unsplash("photo-1540959733332-eab4deabeeaf"),
    alt: "Tokyo at night",
  },
  jordan: {
    src: "https://images.unsplash.com/photo-1554357475-accb8a88a330?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Petra, Jordan",
  },
  kenya: {
    src: "https://images.unsplash.com/photo-1728042107033-76b13feac547?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Kenya savanna",
  },
  laos: {
    src: "https://images.unsplash.com/photo-1720655260134-90960a710cc0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Luang Prabang temples",
  },
  lithuania: {
    src: "https://images.unsplash.com/photo-1667743350028-e0a17093d7e4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Vilnius old town",
  },
  luxembourg: {
    src: unsplash("photo-1551884170-09fb70a3a144"),
    alt: "Luxembourg city",
  },
  malta: {
    src: unsplash("photo-1555992336-03a23c7b087d"),
    alt: "Malta harbour",
  },
  morocco: {
    src: unsplash("photo-1489749798305-4fea3ae63d43"),
    alt: "Moroccan medina",
  },
  netherlands: {
    src: unsplash("photo-1534351590666-13e3e96fd619"),
    alt: "Amsterdam canals",
  },
  "new-zealand": {
    src: unsplash("photo-1507699622109-0be35e86b6b2"),
    alt: "New Zealand mountains",
  },
  oman: {
    src: unsplash("photo-1546412414-e1885259563a"),
    alt: "Oman desert",
  },
  portugal: {
    src: unsplash("photo-1555881400-74d7aca8a582"),
    alt: "Lisbon tram",
  },
  russia: {
    src: unsplash("photo-1513326738677-a9646b1361ba"),
    alt: "Saint Basil's Cathedral, Moscow",
  },
  singapore: {
    src: unsplash("photo-1525625293386-3f8f99389edd"),
    alt: "Marina Bay, Singapore",
  },
  "south-africa": {
    src: unsplash("photo-1484318571209-81cf3a3680f3"),
    alt: "Cape Town",
  },
  "south-korea": {
    src: unsplash("photo-1517154421773-0529f29ea451"),
    alt: "Seoul cityscape",
  },
  spain: {
    src: unsplash("photo-1558642452-9d2a7deb7f62"),
    alt: "Barcelona architecture",
  },
  sweden: {
    src: unsplash("photo-1509356847031-3e7c2c5fd1c8"),
    alt: "Stockholm old town",
  },
  switzerland: {
    src: unsplash("photo-1530122037265-a5f1f91a3ba0"),
    alt: "Swiss Alps",
  },
  taiwan: {
    src: unsplash("photo-1470004914212-055785e64593"),
    alt: "Taipei city",
  },
  thailand: {
    src: unsplash("photo-1552465011-b4e21bf6e79a"),
    alt: "Thai temple at dusk",
  },
  turkey: {
    src: unsplash("photo-1524231757912-21f4fe3a7200"),
    alt: "Istanbul skyline",
  },
  "united-arab-emirates": {
    src: unsplash("photo-1512453979798-5ea266f8880c"),
    alt: "Dubai skyline",
  },
  "united-kingdom": {
    src: unsplash("photo-1513635269975-59663e0ac1ad"),
    alt: "London at twilight",
  },
  usa: {
    src: unsplash("photo-1485738422979-f5c275a343c6"),
    alt: "New York harbour",
  },
  "united-states": {
    // src: unsplash("photo-1485738422979-f5c275a343c6"),
    src: "https://images.unsplash.com/photo-1775144113589-a7a6e3d02175?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "New York harbour",
  },
  uzbekistan: {
    src: unsplash("photo-1561214115-f2f134cc4912"),
    alt: "Samarkand architecture",
  },
  vietnam: {
    src: unsplash("photo-1528127269322-539801943592"),
    alt: "Ha Long Bay, Vietnam",
  },
}

const defaultDestinationImage = {
  src: unsplash("photo-1488646953014-85cb44e25828"),
  alt: "Travel documents and map",
}

export function getDestinationImage(slug: string) {
  return destinationImages[slug] ?? defaultDestinationImage
}
