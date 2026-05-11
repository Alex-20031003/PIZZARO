import { useQuery } from '@tanstack/react-query';
import { getCategories } from '@/entities/categories/api/categoriesApi';
import Container from '@/shared/ui/Container';
import CardCategory from '@/entities/categories/ui/CardCategory';
import CategoriesSkeleton from './CategoriesSkeleton';
import CategoriesError from './CategoriesError';

export default function Categories() {
  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: 10 * 60 * 1000,
  })

  if (isLoading) return <CategoriesSkeleton />

  if (isError) return <CategoriesError error={(error as Error).message} />
  return (
    <section className='mt-9 mb-9'>
      <Container className='flex flex-col'>
        <h2 className='text-4xl font-semibold mb-9 text-center'>Explorer Our Menu</h2>
        <CardCategory categories={categories} />
      </Container>
    </section>
  )
}