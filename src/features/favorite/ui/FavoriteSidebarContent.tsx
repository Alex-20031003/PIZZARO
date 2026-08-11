import { Link } from 'react-router'
import { useAuth } from '@/features/auth'
import { useFavoriteStore } from '../model/useFavoriteStore'
import FavoriteItemCard from './FavoriteItemCard'
import EmptyFavorite from './EmptyFavorite'

type FavoriteSidebarContentProps = {
  onClose: () => void
}

export default function FavoriteSidebarContent({
  onClose,
}: FavoriteSidebarContentProps) {
  const { session, isLoading } = useAuth()

  const itemsByUserId = useFavoriteStore(
    (state) => state.itemsByUserId,
  )

  if (isLoading) {
    return (
      <div className='flex h-full flex-col'>
        <h2 className='my-6 text-3xl font-semibold'>Favorites</h2>
        <p>Loading...</p>
      </div>
    )
  }

  if (!session) {
    return (
      <div className='flex h-full flex-col'>
        <h2 className='my-6 text-3xl font-semibold'>Favorites</h2>

        <p className='mb-6 text-(--dark-grey)'>
          Sign in to save your favorite dishes.
        </p>

        <Link
          to='/auth/sign-in'
          onClick={onClose}
          className='w-full rounded-xl bg-(--primary) py-3 text-center text-white'
        >
          Sign In
        </Link>
      </div>
    )
  }

  const products = itemsByUserId[session.user.id] ?? []

  return (
    <div className='flex h-full flex-col'>
      <h2 className='my-6 text-3xl font-semibold'>Favorites</h2>

      {products.length > 0 ? (
        <ul className='flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'>
          {products.map((product) => (
            <FavoriteItemCard
              key={product.id}
              product={product}
            />
          ))}
        </ul>
      ) : (
        <EmptyFavorite />
      )}
    </div>
  )
}