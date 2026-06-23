import type { ProductCategorySlug } from '@/entities/product';
import Container from '@/shared/ui/Container';
import MenuCategoriesNavigation from '@/widgets/menu-navigation/MenuCategoriesNavigation';
import { ProductsList } from '@/widgets/product-list';
import Search from '@/widgets/search/Search';
import { useParams } from 'react-router';

export default function MenuPage() {
  const { categorySlug } = useParams()
  
  
  return (
    <section className='mt-19 mb-32'>
      <Container className='flex flex-row items-start justify-between'>
        <aside className='flex flex-col gap-9 max-w-80 w-full'>
          <Search />
          <MenuCategoriesNavigation />
        </aside>

        <div className='flex-1'>
          <ul className='list-none'>
            <ProductsList categorySlug={categorySlug as ProductCategorySlug} />
          </ul>
        </div>
      </Container>
    </section>
  )
}