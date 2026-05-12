import Container from '@/shared/ui/Container';
import CardList from '@/entities/categories/ui/CardList';

export default function Categories() {
  return (
    <section className='mt-9 mb-9'>
      <Container className='flex flex-col'>
        <h2 className='text-4xl font-semibold mb-9 text-center'>Explorer Our Menu</h2>
        <CardList />
      </Container>
    </section>
  )
}