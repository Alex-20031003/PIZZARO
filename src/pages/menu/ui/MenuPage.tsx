import type { ProductCategorySlug, ProductSortOption } from '@/entities/product';
import useDebounce from '@/shared/lib/hooks/useDebounce';
import Container from '@/shared/ui/Container';
import { FiltersProductsList } from '@/widgets/filters-product-list';
import { MenuCategoriesNavigation } from '@/widgets/menu-navigation';
import { ProductsList } from '@/widgets/product-list';
import { Search } from '@/widgets/search';
import { useState } from 'react';
import { useParams } from 'react-router';
import { MobileMenuNavigation } from '@/widgets/mobile-menu-navigation';

export default function MenuPage() {
  const { categorySlug } = useParams()
  const [searchValue, setSearchValue] = useState('')
  const [sortValue, setSortValue] = useState<ProductSortOption>('popular')
  const debouncedValue = useDebounce(searchValue.trim())

  return (
    <section className='xl:mt-19 mt-10 mb-32 relative'>
      <Container className='flex flex-row items-start justify-center xl:justify-between'>
        <aside className='xl:flex flex-col gap-9 max-w-80 w-full hidden fixed top-38'>
          <Search value={searchValue} onChange={setSearchValue} />
          <MenuCategoriesNavigation />
        </aside>

        <div className='flex-1 xl:ml-80'>
          <FiltersProductsList value={sortValue} onChange={setSortValue} />
          <div className='flex flex-col gap-6 xl:hidden'>
            <MobileMenuNavigation />
            <Search value={searchValue} onChange={setSearchValue} />
          </div>

          <ul className='list-none'>
            <ProductsList
              categorySlug={(categorySlug ?? 'all') as ProductCategorySlug}
              searchValue={debouncedValue}
              sortValue={sortValue}
            />
          </ul>
        </div>
      </Container>
    </section>
  )
}