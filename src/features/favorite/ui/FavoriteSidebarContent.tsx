import { useFavoriteStore } from '../model/useFavoriteStore'
import FavoriteItemCard from './FavoriteItemCard'
import EmptyFavorite from './EmptyFavorite'


export default function FavoriteSidebarContent() {
  const items = useFavoriteStore((state) => state.items)


  return (
    <>
      <h2 className='font-semibold text-3xl my-6'>Favorite</h2>

      {items.length > 0 ? (
        <ul className='flex-1 overflow-y-auto overscroll-container [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mb-4'>
          {items.map((item) => (
            <FavoriteItemCard key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <EmptyFavorite />
      )}
    </>
  )
}
