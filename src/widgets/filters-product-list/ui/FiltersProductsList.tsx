import type { ProductSortOption } from '@/entities/product'
import { SORT_OPTIONS } from '../model/data'

interface ProductSortProps {
  value: ProductSortOption
  onChange: (value: ProductSortOption) => void
}

export default function FiltersProductsList({ value, onChange }: ProductSortProps) {
  return (
    <div className='flex sm:flex-row flex-col gap-4 items-center justify-between mb-6'>
      <h2 className='text-4xl font-medium'>Menu</h2>

      <div className='flex sm:flex-row flex-col gap-4 items-center'>
        <label htmlFor="filters">Sort By</label>

        <select 
          value={value}
          onChange={(event) => onChange(event.target.value as ProductSortOption)}
          className='bg-(--light-grey) p-2 rounded-xl cursor-pointer'
          >
          
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
