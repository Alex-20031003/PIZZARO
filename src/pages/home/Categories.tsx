import { useQuery } from '@tanstack/react-query';
import { getCategories } from '@/entities/categories/api/categoriesApi';
import CardBox from '@/shared/ui/CardBox';
import Container from '@/shared/ui/Container';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';



export default function Categories() {
  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <section className='flex flex-col items-center mt-9 mb-9'>
      <Container>
        <h2 className='text-4xl font-semibold mb-9 text-center'>Explorer Our Menu</h2>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center justify-between gap-6'>
          {categories.map(category => (
            <CardBox key={category.id}>
              <div className='relative flex flex-col items-center justify-center pb-3'>
                <img src={category.image_url} alt={category.title} className='rounded-xl' />
                <h3 className='text-2xl font-bold'>{category.title}</h3>
                <ChevronRight className='absolute right-3 bottom-3 size-8 text-[#F05A24]' strokeWidth={2.5} />
              </div>
            </CardBox>
          ))}
        </ul>
      </Container>

    </section>
  )
}
