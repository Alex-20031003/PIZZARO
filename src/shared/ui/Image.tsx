type ImageProps = {
  src: string
  title?: string
  alt: string
  width?: number | string
  height?: number | string
  className?: string
}

export default function Image({ src, title, alt, width, height, className }: ImageProps) {
  return <img src={src} width={width} height={height} alt={alt} title={title} className={`block max-w-full h-auto ${className}`} />
}
