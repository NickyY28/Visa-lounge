import Image from "next/image"

import { cn } from "@/lib/utils"

type MediaFrameProps = {
  src: string
  alt: string
  className?: string
  imageClassName?: string
  priority?: boolean
  sizes?: string
  caption?: string
}

export function MediaFrame({
  src,
  alt,
  className,
  imageClassName,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
  caption,
}: MediaFrameProps) {
  return (
    <figure className={cn("media-frame relative", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
      <span className="media-shade" aria-hidden />
      {caption ? (
        <figcaption className="absolute right-4 bottom-4 left-4 z-10 text-sm font-medium text-white">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
