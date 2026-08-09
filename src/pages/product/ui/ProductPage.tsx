import { useProductBySlug } from '@/entities/product'
import { useParams } from 'react-router'
import Container from '@/shared/ui/Container'
import { Minus, Plus, Star } from 'lucide-react'
import { AddToCartButton } from '@/features/cart'
import { ToggleFavoriteButton } from '@/features/favorite'
import { useState } from 'react'

export default function ProductPage() {
  const { categorySlug, productSlug } = useParams()
  const [quantity, setQuantity] = useState(1)

  const { data, isPending, isError } = useProductBySlug(categorySlug, productSlug)

  if (isPending) {
    return (
      <div>Loading product...</div>
    )
  }

  if (isError) {
    return (
      <div>Could not load product</div>
    )
  }

  if (data === null) {
    return (
      <div>Product not found</div>
    )
  }

  const ingredientsList = data.ingredients.map(ingredient => ingredient.replaceAll('_', ' ')).join(', ')

  return (
    <section className='2xl:pt-18 pt-20 pb-6 2xl:pb-12'>
      <Container className='flex lg:flex-row flex-col xl:gap-12 gap-6'>
        <img src={data.image_url} alt={`${data.category}: ${data.title}`} title={data.title} className='w-full  max-w-full lg:w-1/2 lg:max-w-185 sm:min-w-130 object-contain md:self-center rounded-xl' />

        <div className='py-8 flex flex-col'>
          <div className='flex flex-row w-full min-w-0 lg:gap-12 items-center md:justify-start justify-between'>
            <h1 className='xl:text-4xl text-3xl font-semibold flex-1 lg:flex-initial truncate min-w-0'>{data.title}</h1>

            <div className='flex shrink-0 items-center gap-2'>
              <Star
                width={28}
                height={28}
                className='fill-yellow-300 stroke-yellow-300'
              />
              <p className='text-xl font-semibold'>{data.rating.toFixed(1)}</p>
            </div>
          </div>

          <p className='xl:text-xl text-base my-6 max-w-5xl'>{data.description}</p>

          <div className='flex flex-col gap-2'>
            <p className='xl:text-xl text-lg font-semibold'>Ingredients</p>
            <p className='xl:text-xl text-lg text-(--dark-grey) italic capitalize'>{ingredientsList}</p>
          </div>

          {data.discount_price !== null ? (
            <div className='flex flex-row items-center gap-2 mt-6'>
              <p className='line-through text-(--border-grey) font-medium text-lg xl:text-2xl'>${(data.base_price * quantity).toFixed(2)}</p>
              <p className='xl:text-2xl text-lg text-(--light-grey) p-1.5 bg-(--primary) rounded-xl font-semibold'>${(data.discount_price * quantity).toFixed(2)}</p>
            </div>
          ) : (
            <p className='text-(--border-grey) font-medium text-lg xl:text-2xl mt-6'>${(data.base_price * quantity).toFixed(2)}</p>
          )}

          <div className='w-full flex lg:max-w-125 items-center justify-between mt-6'>
            <button
              type='button'
              disabled={quantity === 1}
              aria-label='Decrement the quantity'
              onClick={() => setQuantity(current => Math.max(1, current - 1))}
              className='disabled:opacity-40 disabled:cursor-not-allowed'
            >
              <Minus className='stroke-(--primary)' size={32} />
            </button>

            <p className='text-2xl'>{quantity}</p>

            <button
              type='button'
              aria-label='Increment the quantity'
              onClick={() => setQuantity(current => current + 1)}
            >
              <Plus className='stroke-(--primary)' size={32} />
            </button>
          </div>

          <div className='flex flex-row gap-2 lg:max-w-125 mt-12'>
            <AddToCartButton product={data} quantity={quantity} />
            <ToggleFavoriteButton product={data} />
          </div>

        </div>
      </Container>
    </section>
  )
}
