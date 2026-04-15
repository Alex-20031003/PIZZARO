type ImageProps = {
  src: string
  title?: string
  alt: string
  width?: number | string
  height?: number | string 
}

export default function Image({ src, title, alt, width, height }: ImageProps) {
  return <img src={src} width={width} height={height} alt={alt} title={title} className='block max-w-full h-auto' />
}
