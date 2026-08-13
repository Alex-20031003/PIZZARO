export type CheckoutFormValues = {
  fullName: string
  email: string
  phone: string
  city: string
  street: string
  entrance: string
  apartment: string
}

export type CheckoutFormErrors = Partial<Record<keyof CheckoutFormValues, string>>

export const FULL_NAME_MAX_LENGTH = 80
export const EMAIL_MAX_LENGTH = 254
export const PHONE_MAX_LENGTH = 30
export const CITY_MAX_LENGTH = 80
export const STREET_MAX_LENGTH = 100
export const ADDRESS_PART_MAX_LENGTH = 20

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^[+\d\s()-]+$/

export function validateCheckoutForm(
  values: CheckoutFormValues,
): CheckoutFormErrors {
  const errors: CheckoutFormErrors = {}
  const fullName = values.fullName.trim()
  const email = values.email.trim()
  const phone = values.phone.trim()
  const city = values.city.trim()
  const street = values.street.trim()
  const entrance = values.entrance.trim()
  const apartment = values.apartment.trim()
  const phoneDigitsCount = phone.replace(/\D/g, '').length

  if (!fullName) {
    errors.fullName = 'Full name is required'
  } else if (fullName.length < 2) {
    errors.fullName = 'Full name must be at least 2 characters'
  } else if (fullName.length > FULL_NAME_MAX_LENGTH) {
    errors.fullName = `Full name must be ${FULL_NAME_MAX_LENGTH} characters or fewer`
  }

  if (!email) {
    errors.email = 'Email is required'
  } else if (email.length > EMAIL_MAX_LENGTH) {
    errors.email = `Email must be ${EMAIL_MAX_LENGTH} characters or fewer`
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Enter a valid email address'
  }

  if (!phone) {
    errors.phone = 'Phone is required'
  } else if (
    phone.length > PHONE_MAX_LENGTH ||
    !PHONE_PATTERN.test(phone) ||
    phoneDigitsCount < 7 ||
    phoneDigitsCount > 15
  ) {
    errors.phone = 'Enter a valid phone number'
  }

  if (!city) {
    errors.city = 'City is required'
  } else if (city.length > CITY_MAX_LENGTH) {
    errors.city = `City must be ${CITY_MAX_LENGTH} characters or fewer`
  }

  if (!street) {
    errors.street = 'Street is required'
  } else if (street.length > STREET_MAX_LENGTH) {
    errors.street = `Street must be ${STREET_MAX_LENGTH} characters or fewer`
  }

  if (entrance.length > ADDRESS_PART_MAX_LENGTH) {
    errors.entrance = `Entrance must be ${ADDRESS_PART_MAX_LENGTH} characters or fewer`
  }

  if (apartment.length > ADDRESS_PART_MAX_LENGTH) {
    errors.apartment = `Apartment must be ${ADDRESS_PART_MAX_LENGTH} characters or fewer`
  }

  return errors
}
