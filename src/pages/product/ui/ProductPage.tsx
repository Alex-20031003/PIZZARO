import { useParams } from 'react-router'

export default function ProductPage() {
  const { categorySlug, productSlug } = useParams()

  return (
    <section>
      <h1>Product Page</h1>
      <p>Category: { categorySlug }</p>
      <p>Product: { productSlug }</p>
    </section>
  )
}
