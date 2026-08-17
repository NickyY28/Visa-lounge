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
  france: {
    src: unsplash("photo-1502602898657-3e91760cbb34"),
    alt: "Paris street with the Eiffel Tower",
  },
  japan: {
    src: unsplash("photo-1540959733332-eab4deabeeaf"),
    alt: "Tokyo at night",
  },
  singapore: {
    src: unsplash("photo-1525625293386-3f8f99389edd"),
    alt: "Marina Bay, Singapore",
  },
  thailand: {
    src: unsplash("photo-1552465011-b4e21bf6e79a"),
    alt: "Thai temple at dusk",
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
  italy: {
    src: unsplash("photo-1515542622106-78bda8ba0e5b"),
    alt: "The Colosseum, Rome",
  },
}

export function getDestinationImage(slug: string) {
  return destinationImages[slug]
}
