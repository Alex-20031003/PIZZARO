import { useQuery } from '@tanstack/react-query';
import { getCategories } from '@/entities/categories/api/categoriesApi';
import CardBox from '@/shared/ui/CardBox';
import { ChevronRight } from 'lucide-react';



export default function Categories() {
  const {
    data: categories = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <section>
      <h2>Explorer Our Menu</h2><ul>
        {categories.map(category => (
          <CardBox key={category.id}>
            <img src={category.image_url} alt={category.title} />
            <div>
              <h3>{category.title}</h3>
              <ChevronRight />
            </div>
          </CardBox>
        ))}
      </ul>
    </section>
  )
}
