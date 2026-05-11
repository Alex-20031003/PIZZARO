import Container from '@/shared/ui/Container';

export default function CategoriesError({ error }: { error: string }) {
  return (
    <section className='mt-9 mb-9'>
      <Container className='flex flex-col items-center'>
        <h2 className='text-4xl font-semibold mb-9'>Explorer Our Menu</h2>
        <div className='flex flex-col gap-4 items-center'>
          <p className='font-base text-xl'>Somethings went wrong</p>
          <button className='text-(--primary) underline text-xl' onClick={() => location.reload()}>Try again</button>
        </div>
      </Container>
    </section>
  )
}
