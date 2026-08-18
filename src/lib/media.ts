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
    src: unsplash("photo-1523482580672-f109ba8cb9be"),
    alt: "Sydney Opera House",
  },
  austria: {
    src: unsplash("photo-1516556818900-7d8f8a4e4b1e"),
    alt: "Vienna architecture",
  },
  azerbaijan: {
    src: unsplash("photo-1565008576549-5756a4522eae"),
    alt: "Baku skyline",
  },
  cambodia: {
    src: unsplash("photo-1552465011-b4e21bf6e79a"),
    alt: "Angkor Wat at dusk",
  },
  canada: {
    src: unsplash("photo-1519832979-6fa0670a8f8e"),
    alt: "Canadian mountains and lake",
  },
  china: {
    src: unsplash("photo-1508804185872-d7badad00f7d"),
    alt: "Great Wall of China",
  },
  croatia: {
    src: unsplash("photo-1555992336-03a23c7b087d"),
    alt: "Dubrovnik old town",
  },
  "czech-republic": {
    src: unsplash("photo-1541849546-216549ae216d"),
    alt: "Prague old town",
  },
  denmark: {
    src: unsplash("photo-1513622470522-26c0568aba34"),
    alt: "Copenhagen waterfront",
  },
  egypt: {
    src: unsplash("photo-1539768942893-daf53e448371"),
    alt: "Pyramids of Giza",
  },
  finland: {
    src: unsplash("photo-1516026672322-bc52d61a55d5"),
    alt: "Helsinki harbour",
  },
  france: {
    src: unsplash("photo-1502602898657-3e91760cbb34"),
    alt: "Paris street with the Eiffel Tower",
  },
  georgia: {
    src: unsplash("photo-1565008576549-5756a4522eae"),
    alt: "Tbilisi cityscape",
  },
  greece: {
    src: unsplash("photo-1613395877344-13d4a8e0d325"),
    alt: "Santorini, Greece",
  },
  "hong-kong": {
    src: unsplash("photo-1536599018102-9f803c140fc1"),
    alt: "Hong Kong skyline",
  },
  iceland: {
    src: unsplash("photo-1504829857797-ddff29c27927"),
    alt: "Iceland landscape",
  },
  indonesia: {
    src: unsplash("photo-1518548419970-58e3b4079cd2"),
    alt: "Bali temple",
  },
  italy: {
    src: unsplash("photo-1515542622106-78bda8ba0e5b"),
    alt: "The Colosseum, Rome",
  },
  japan: {
    src: unsplash("photo-1540959733332-eab4deabeeaf"),
    alt: "Tokyo at night",
  },
  jordan: {
    src: unsplash("photo-1548013146-7240edaa25c3"),
    alt: "Petra, Jordan",
  },
  kenya: {
    src: unsplash("photo-1523805009345-74488810a58e"),
    alt: "Kenya savanna",
  },
  laos: {
    src: unsplash("photo-1528183429752-a97d0ef99369"),
    alt: "Luang Prabang temples",
  },
  lithuania: {
    src: unsplash("photo-1599946347371-68eb71b16ca3"),
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
    src: unsplash("photo-1485738422979-f5c275a343c6"),
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
