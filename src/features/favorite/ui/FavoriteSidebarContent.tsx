import { useFavoriteStore } from '../model/useFavoriteStore'
import FavoriteItemCard from './FavoriteItemCard'
import EmptyFavorite from './EmptyFavorite'


export default function FavoriteSidebarContent() {
  const products = useFavoriteStore((state) => state.items)


  return (
    <div className='flex h-full flex-col'>
      <h2 className='font-semibold text-3xl my-6'>Favorite</h2>

      {products.length > 0 ? (
        <ul className='flex-1 overflow-y-auto overscroll-container [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden '>
          {products.map((product) => (
            <FavoriteItemCard key={product.id} product={product} />
          ))}
        </ul>
      ) : (
        <EmptyFavorite />
      )}
    </div>
  )
}
