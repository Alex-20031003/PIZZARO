import  type { ProductCardData } from '@/entities/product/model/types';
import { Heart } from 'lucide-react';
import { useAuth } from '@/features/auth';
import { useNavigate } from 'react-router';
import { useFavoriteStore } from '@/features/favorite/model/useFavoriteStore';

interface ToggleFavoriteButtonProps {
  product: ProductCardData
}

export default function ToggleFavoriteButton({ product }: ToggleFavoriteButtonProps) {
  const { session, isLoading } = useAuth()
  const navigate = useNavigate()
  const itemsByUserId = useFavoriteStore((state) => state.itemsByUserId)
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite)
  const userId = session?.user.id
  const isFavorite = Boolean(userId && itemsByUserId[userId]?.some((item) => item.id === product.id))
  
  function handleToggleFavorite() {
    if (!session) {
      navigate('/auth/sign-in')
      return
    }

    toggleFavorite(session.user.id, product)
  }

  return (
    <button 
            type='button'
            onClick={handleToggleFavorite}
            disabled={isLoading}
            className='p-3 bg-inherit rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.25)]'
            >
              <Heart 
                stroke='#F05A24' 
                className={` ${ isFavorite ? 'fill-(--primary)' : '' } transition-fill duration-500`} />
          </button>
  )
}
