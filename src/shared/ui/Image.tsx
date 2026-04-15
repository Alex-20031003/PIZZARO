type ImageProps = {
  src: string
  title?: string
  alt: string
  className?: string
}

export default function Image({ src, title, alt, className }: ImageProps) {
  return <img src={src} alt={alt} title={title} className={`block max-w-full h-auto ${className}`} />
}
