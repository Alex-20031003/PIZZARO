import { useFavoriteStore } from '../model/useFavoriteStore'
import FavoriteItemCard from './FavoriteItemCard'
import EmptyFavorite from './EmptyFavorite'


export default function FavoriteSidebarContent() {
  const items = useFavoriteStore((state) => state.items)


  return (
    <>
      <h2>Favorite</h2>

      {items.length > 0 ? (
        <ul>
          { items.map((item) => (
            <FavoriteItemCard key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <EmptyFavorite />
      )}
    </>
  )
}
