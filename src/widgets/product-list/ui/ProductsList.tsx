import { ProductCard, useProductsByCategory, type ProductCategorySlug } from '@/entities/product';
import { AddToCartButton } from '@/features/cart';
import { ToggleFavoriteButton } from '@/features/favorite';

interface ProductsListProps {
  categorySlug: ProductCategorySlug
  searchValue: string
}

export default function ProductsList({ categorySlug, searchValue }: ProductsListProps) {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useProductsByCategory(categorySlug, searchValue);

  if (isLoading) {
    return (
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className='h-96 animate-pulse rounded-3xl bg-[#E6E6E6]'
          />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className='rounded-3xl bg-red-50 p-6 text-red-600'>
        Failed to load products: {error.message}
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className='rounded-3xl bg-[#E6E6E6] p-6 text-center text-(--dark-grey)'>
        Products not found
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          action={
            <>
              <AddToCartButton product={product} />
              <ToggleFavoriteButton product={product} />
            </>
          }
        />
      ))}
    </div>
  );
}