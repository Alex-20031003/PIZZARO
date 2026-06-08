import Container from '@/shared/ui/Container';
import MenuCategoriesNavigation from '@/widgets/menu-navigation/MenuCategoriesNavigation';
import Search from '@/widgets/search/Search';

export default function MenuPage() {
  return (
    <section className='mt-19 mb-32'>
      <Container className='flex flex-row items-start justify-between'>
        <aside className='flex flex-col gap-9 max-w-80 w-full'>
          <Search />
          <MenuCategoriesNavigation />
        </aside>

        <div className='w-200 h-200 bg-amber-600 flex-1' />
      </Container>
    </section>
  )
}