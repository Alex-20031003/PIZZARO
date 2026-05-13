import { getPopularProducts } from '@/entities/product/api/getPopularProducts';
import ProductCardListPopularDishes from '@/entities/product/ui/ProductCard';
import Container from '@/shared/ui/Container';
import { useQuery } from '@tanstack/react-query'



export default function PopularDishes() {
  const {
    data: products,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['popularProducts'],
    queryFn: getPopularProducts,
  })

  if (isLoading) return <p>Loading...</p>

  if (isError) return <p>Error loading popular dishes.</p>

  return (
    <section className='mt-9 mb-9'>
      <Container className='flex flex-col'>
        <h2 className='text-4xl font-semibold mb-9 text-center'>Popular Dishes</h2>
        <ProductCardListPopularDishes products={products} />
      </Container>
    </section>

  )
}
