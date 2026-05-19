import type { ReactNode } from 'react'
import useInView from '../lib/hooks/useInView'

interface LazySectionProps {
  children: ReactNode
  height: string
  threshold: number
}

export default function LazySection({children, height, threshold}: LazySectionProps) {
  const {ref, isInView} = useInView<HTMLDivElement>({
    once: true,
    rootMargin: '200px',
    threshold: threshold
  })

  return <div ref={ref}>{ isInView ? (children) : (<div style={{ height }} />) }</div>
}
