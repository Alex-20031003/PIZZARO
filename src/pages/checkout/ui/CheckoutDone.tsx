import Container from '@/shared/ui/Container'
import { CircleCheckBig } from 'lucide-react'
import { Link } from 'react-router'

export default function CheckoutDone() {
  return (
    <section
      className='flex flex-1 py-10 sm:py-16 lg:py-24'
      aria-labelledby='checkout-success-title'
    >
      <Container className='flex flex-1 items-center justify-center'>
        <div className='w-full flex flex-col items-center justify-center text-center max-w-2xl sm:px-10'>
          <div className='mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-green-100 text-green-700 sm:size-24'>
            <CircleCheckBig className='size-11 sm:size-14' aria-hidden='true' />
          </div>

          <p className='mb-3 text-sm font-semibold uppercase tracking-widest text-(--primary)'>
            Demo order
          </p>

          <h1
            id='checkout-success-title'
            className='mb-4 text-3xl font-semibold sm:text-4xl lg:text-5xl'
          >
            Order placed successfully!
          </h1>

          <p className='mx-auto mb-8 max-w-xl text-base leading-relaxed text-(--dark-grey) sm:text-lg'>
            Thank you for choosing PIZZARO. This is a demo checkout, so no real
            order was created and no payment was charged.
          </p>

          <Link
            to='/'
            className='mx-auto flex w-full items-center justify-center gap-2 rounded-xl bg-(--primary) px-6 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary) sm:w-fit sm:min-w-56 sm:text-lg'
          >
            Back to Home
          </Link>
        </div>
      </Container>
    </section>
  )
}
