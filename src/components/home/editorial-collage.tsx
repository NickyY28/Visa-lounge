import Image from "next/image"

import { collageImages } from "@/lib/media"
import { cn } from "@/lib/utils"

const notes = [
  {
    title: "Passport",
    body: "Collected, held, and returned to you.",
    className:
      "collage-note collage-note-sand left-[36%] top-3 w-40 rotate-[4deg] md:w-44",
  },
  {
    title: "Biometrics",
    body: "You attend. We tell you when and where.",
    className:
      "collage-note collage-note-mauve bottom-6 left-[22%] w-44 rotate-[-5deg] md:left-[26%] md:w-48",
  },
] as const

export function EditorialCollage() {
  return (
    <div className="relative mx-auto h-[24rem] w-full max-w-md md:h-[28rem]">
      {collageImages.map((item) => (
        <div key={item.alt} className={cn("collage-card", item.className)}>
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="220px"
            className="object-cover"
          />
          <span className="media-shade" aria-hidden />
        </div>
      ))}
      {notes.map((note) => (
        <div key={note.title} className={note.className}>
          <p className="text-[0.65rem] font-medium tracking-[0.16em] uppercase opacity-70">
            {note.title}
          </p>
          <p className="mt-2 font-serif text-lg leading-snug">{note.body}</p>
        </div>
      ))}
    </div>
  )
}
