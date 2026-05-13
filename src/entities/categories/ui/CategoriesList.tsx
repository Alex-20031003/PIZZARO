import CardBox from '@/shared/ui/CardBox'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router'
import { categories } from '../model/categories.data'


export default function CardList() {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-1'>
      {categories.map(category => (
        <CardBox key={category.id}>
          <Link to={`/menu/${category.slug}`} className='relative flex flex-col items-center justify-center pb-3'>
            <img src={category.image_url} alt={category.title} className='rounded-xl' />
            <h3 className='text-2xl font-bold'>{category.title}</h3>
            <ChevronRight className='absolute right-3 bottom-3 size-8 text-[#F05A24]' strokeWidth={2.5} />
          </Link>
        </CardBox>
      ))}
    </ul>
  )
}