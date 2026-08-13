import Container from '@/shared/ui/Container';
import CheckoutInput from './CheckoutInput';
import { useCartStore } from '@/features/cart';
import CheckoutProductCard from './CheckoutProductCard';
import { useState, type SubmitEvent } from 'react';
import {
  ADDRESS_PART_MAX_LENGTH,
  CITY_MAX_LENGTH,
  EMAIL_MAX_LENGTH,
  FULL_NAME_MAX_LENGTH,
  PHONE_MAX_LENGTH,
  STREET_MAX_LENGTH,
  validateCheckoutForm,
  type CheckoutFormErrors,
  type CheckoutFormValues,
} from '../model/checkoutValidation';
import { useNavigate } from 'react-router';

export default function CheckoutPage() {
  const products = useCartStore((state) => state.items)
  const totalPrice = products.reduce((total, item) => total + item.price * item.quantity, 0)
  const handleClearCart = useCartStore((state) => state.clearCart)
  const [errors, setErrors] = useState<CheckoutFormErrors>({})
  const navigate = useNavigate()

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const values: CheckoutFormValues = {
      fullName: String(formData.get('fullName') ?? ''),
      email: String(formData.get('email') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      city: String(formData.get('city') ?? ''),
      street: String(formData.get('street') ?? ''),
      entrance: String(formData.get('entrance') ?? ''),
      apartment: String(formData.get('apartment') ?? ''),
    }

    const nextErrors = validateCheckoutForm(values)

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    handleClearCart()

    navigate('/checkout/success', { replace: true })
  }

  return (
    <section className='mt-9 mb-24'>
      <Container className='flex flex-col'>
        <h1 className='text-4xl font-medium mb-6'>Checkout</h1>

        <form
          onSubmit={handleSubmit}
          noValidate
          className='w-full flex flex-col items-start justify-between gap-12'
        >
          <div className='flex min-h-0 w-full flex-1 flex-col gap-6 rounded-xl px-3 py-4 shadow-[0_0_5px_rgba(0,0,0,0.4)] sm:px-6 sm:py-6 xl:px-12'>
            <h2 className='xl:text-4xl text-2xl pl-1 font-medium'>Order summary</h2>

            <ul className='min-h-0 flex-1 divide-y divide-[#E6E6E6] overflow-y-auto pr-2'>
              {products.map((product) => (
                <CheckoutProductCard key={product.id} product={product} />
              ))}
            </ul>

            <div className='flex flex-row items-center justify-between mt-12'>
              <p className='xl:text-4xl text-2xl font-semibold'>Total</p>
              <p className='xl:text-3xl text-xl font-semibold text-(--primary)'>${totalPrice.toFixed(2)}</p>
            </div>
          </div>

          <div className='bg-transporent p-4 flex flex-col gap-6 rounded-xl w-full shadow-[0_0_5px_rgba(0,0,0,0.4)]'>
            <h2 className='xl:text-4xl text-2xl pl-1 font-medium'>Delivery details</h2>

            <CheckoutInput
              name='fullName'
              label='Full name'
              autoComplete='name'
              error={errors.fullName}
              maxLength={FULL_NAME_MAX_LENGTH}
              placeholder='Enter your full name'
            />

            <CheckoutInput
              name='email'
              label='Email'
              type='email'
              autoComplete='email'
              error={errors.email}
              maxLength={EMAIL_MAX_LENGTH}
              placeholder='Enter your email'
            />

            <CheckoutInput
              name='phone'
              label='Phone'
              type='tel'
              autoComplete='tel'
              error={errors.phone}
              maxLength={PHONE_MAX_LENGTH}
              placeholder='Enter your phone'
            />

            <div className='flex flex-col gap-6 xl:flex-row xl:gap-12'>
              <CheckoutInput
                name='city'
                label='City'
                autoComplete='address-level2'
                error={errors.city}
                maxLength={CITY_MAX_LENGTH}
                placeholder='Enter your city'
              />

              <CheckoutInput
                name='street'
                label='Street'
                autoComplete='address-line1'
                error={errors.street}
                maxLength={STREET_MAX_LENGTH}
                placeholder='Enter your street'
              />
            </div>

            <div className='flex flex-col gap-6 xl:flex-row xl:gap-12'>
              <CheckoutInput
                name='entrance'
                label='Entrance (optional)'
                error={errors.entrance}
                maxLength={ADDRESS_PART_MAX_LENGTH}
                placeholder='Enter your entrance'
                required={false}
              />

              <CheckoutInput
                name='apartment'
                label='Apartment (optional)'
                autoComplete='address-line2'
                error={errors.apartment}
                maxLength={ADDRESS_PART_MAX_LENGTH}
                placeholder='Enter apartment, suite, etc.'
                required={false}
              />
            </div>
          </div>

          <div className='flex flex-col gap-6 w-full '>
            <button type='submit' className='mb-4 py-4 rounded-xl bg-(--primary) text-white w-full text-xl'>Place Order Demo</button>

            <p className='text-(--dark-grey) xl:text-xl text-base font-medium self-center'>Demo checkout — no real payment</p>
          </div>
        </form>
      </Container>
    </section>
  )
}
