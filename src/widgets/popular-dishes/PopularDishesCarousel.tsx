import { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import type { ProductCardData } from '../../entities/product/model/types'
import ProductCard from '@/entities/product/ui/ProductCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useInView from '@/shared/lib/hooks/useInView'

interface PopularDishesCarouselProps {
  products: ProductCardData[]
}

const AUTOPLAY_DELAY = 3000

export function PopularDishesCarousel({ products }: PopularDishesCarouselProps) {
  const { ref: carouselVisibilityRef, isInView } = useInView<HTMLDivElement>({
    once: false,
    threshold: 0.3
  })

  const autoplay = useRef(
    Autoplay({
      delay: AUTOPLAY_DELAY,
      stopOnMouseEnter: false,
      stopOnInteraction: false,
    })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      slidesToScroll: 1,
    },
    [autoplay.current]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [isPause, setIsPause] = useState(false)

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    emblaApi?.scrollTo(index)
  }, [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return

    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  const handleManualScroll = useCallback((action: () => void) => {
    action()

    autoplay.current.stop()

    if(isInView && !isPause){
      autoplay.current.play()
    }
  }, [isInView, isPause])

  useEffect(() => {
    const handleArrowScroll = (e: KeyboardEvent) => {
      if (!isInView) return

      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        handleManualScroll(scrollPrev)
      } else if (e.key === 'ArrowRight'){
        e.preventDefault()
        handleManualScroll(scrollNext)
      }
    }

    document.addEventListener('keydown', handleArrowScroll)

    return () => { document.removeEventListener('keydown', handleArrowScroll) }

  }, [isInView, scrollNext, scrollPrev, handleManualScroll])

  useEffect(() => {
    if (!emblaApi) return

    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()

    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    if (!emblaApi) return

    if (isInView && !isPause) {
      autoplay.current.play()
    } else {
      autoplay.current.stop()
    }
  }, [emblaApi, isInView, isPause])

  if (!products.length) return null

  const handleMouseEnter = () => {
    setIsPause(true)
    autoplay.current.stop()
  }

  const handleMouseLeave = () => {
    setIsPause(false)

    if (isInView) {
      autoplay.current.play()
    }
  }

  return (
    <div ref={carouselVisibilityRef} className='relative outline-none'>
      <div className='overflow-hidden' ref={emblaRef}>
        <ul className='flex' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} classNameCardBox='ml-6 shrink-0 basis-full min-w-20 md:basis-[calc((100%_-_24px)_/_2)] xl:basis-[calc((100%_-_72px)_/_4)]' />
          ))}
        </ul>
      </div>

      <button type='button' onClick={() => handleManualScroll(scrollPrev)} className='absolute -left-7.5 top-1/2 z-10 -translate-y-1/2 w-10 sm:w-15 h-auto bg-(--light-grey) shadow-[0_0_5px_rgba(0,0,0,0.25)] rounded-full'>
        <ChevronLeft color='#F05A24' className='w-full h-full' />
      </button>

      <button type='button' onClick={() => handleManualScroll(scrollNext)} className='absolute -right-7.5 top-1/2 z-10 -translate-y-1/2 w-10 sm:w-15 h-auto bg-(--light-grey) shadow-[0_0_5px_rgba(0,0,0,0.25)] rounded-full'>
        <ChevronRight color='#F05A24' className='w-full h-full' />
      </button>

      <div className="mt-6 flex justify-center gap-4">
        {scrollSnaps.map((_, index) => {
          const isActive = index === selectedIndex

          return (
            <button
              key={index}
              type="button"
              onClick={() => handleManualScroll(() => scrollTo(index))}
              className={`relative h-3 overflow-hidden rounded-full bg-black/20 transition-all duration-300 ${isActive ? 'w-8' : 'w-4'
                }`}
            >
              {isActive && (
                <span
                  key={selectedIndex}
                  className="absolute left-0 top-0 h-full w-full origin-left rounded-full bg-(--primary)"
                  style={{
                    animationName: 'carousel-progress',
                    animationDuration: `${AUTOPLAY_DELAY}ms`,
                    animationTimingFunction: 'linear',
                    animationFillMode: 'forwards',
                    animationPlayState: isPause || !isInView ? 'paused' : 'running',
                  }}
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}