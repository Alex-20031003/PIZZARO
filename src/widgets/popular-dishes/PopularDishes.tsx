import { getPopularProducts } from '@/entities/product/api/getPopularProducts';
import Container from '@/shared/ui/Container';
import { useQuery } from '@tanstack/react-query'
import { PopularDishesCarousel } from '@/widgets/popular-dishes/PopularDishesCarousel';
import PopularDishesCarouselSkeleton from '@/widgets/popular-dishes/PopularDishesCarouselSkeleton';



export default function PopularDishes() {
  const {
    data: products,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['popularProducts'],
    queryFn: getPopularProducts,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 15
  })

  if (isLoading) return <PopularDishesCarouselSkeleton />

  if (isError) return (
    <section className='mt-9 mb-9'>
      <Container className='flex flex-col items-center'>
        <h2 className='text-4xl font-semibold mb-9 text-center'>Popular Dishes</h2>
        <p className='text-2xl font-normal'>Error loading popular dishes</p>
      </Container>
    </section>
  )

  return (
    <section className='mt-9 mb-9'>
      <Container className='flex flex-col'>
        <h2 className='text-4xl font-semibold mb-9 text-center'>Popular Dishes</h2>
        <PopularDishesCarousel products={products ?? []} />
      </Container>
    </section>

  )
}
