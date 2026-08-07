import { useProductBySlug } from '@/entities/product'
import { useParams } from 'react-router'

export default function ProductPage() {
  const { categorySlug, productSlug } = useParams()

  const { data, isPending, isError } = useProductBySlug(categorySlug, productSlug)

  if (isPending) {
    return (
      <div>Loading product...</div>
    )
  }

  if (isError) {
    return (
      <div>Could not load product.</div>
    )
  }

  if (data === null) {
    return (
      <div>Product not found.</div>
    )
  }

  return (
    <section>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </section>
  )
}
