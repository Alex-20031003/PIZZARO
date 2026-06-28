import type { ProductCategorySlug, ProductSortOption } from '@/entities/product';
import useDebounce from '@/shared/lib/hooks/useDebounce';
import Container from '@/shared/ui/Container';
import { FiltersProductsList } from '@/widgets/filters-product-list';
import { MenuCategoriesNavigation } from '@/widgets/menu-navigation';
import { ProductsList } from '@/widgets/product-list';
import { Search } from '@/widgets/search';
import { useState } from 'react';
import { useParams } from 'react-router';

export default function MenuPage() {
  const { categorySlug } = useParams()
  const [searchValue, setSearchValue] = useState('')
  const [sortValue, setSortValue] = useState<ProductSortOption>('popular')  
  const debouncedValue = useDebounce(searchValue.trim())

  return (
    <section className='mt-19 mb-32'>
      <Container className='flex flex-row items-start justify-between'>
        <aside className='flex flex-col gap-9 max-w-80 w-full'>
          <Search value={searchValue} onChange={setSearchValue} />
          <MenuCategoriesNavigation />
        </aside>

        <div className='flex-1'>
          <FiltersProductsList value={sortValue} onChange={setSortValue} />
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