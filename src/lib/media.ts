/**
 * Photography used as colour against the black-and-white UI.
 * Replace Unsplash URLs with files in /public/assets/images when ready.
 */

const unsplash = (id: string, extra = "") =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80${extra}`

export const pageImages = {
  hero: {
    src: unsplash("photo-1540959733332-eab4deabeeaf"),
    alt: "Tokyo city lights at dusk",
  },
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
