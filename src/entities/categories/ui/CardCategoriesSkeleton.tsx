
export default function CardCategoriesSkeleton() {
  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {Array.from({ length: 4 }).map((_, index) => (
        <li key={index} className='bg-(--light-grey) rounded-lg w-75 h-85' />
      ))}
    </ul>
  )
}
