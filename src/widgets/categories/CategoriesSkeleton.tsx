import CardCategoriesSkeleton from '@/entities/categories/ui/CardCategoriesSkeleton';
import Container from '@/shared/ui/Container';

export default function CategoriesSkeleton() {
  return (
    <section className='animate-pulse mt-9 mb-9'>
      <Container className='flex flex-col'>
        <h2 className='text-4xl font-semibold mb-9 text-center'>Explorer Our Menu</h2>
        <CardCategoriesSkeleton />
      </Container>
    </section>
  )
}
