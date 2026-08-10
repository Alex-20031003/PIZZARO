export type AuthMode = 'sign-in' | 'sign-up'

export type AuthFormValues = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

type AuthFormField = keyof AuthFormValues | 'form'

export type AuthFormErrors = Partial<Record<AuthFormField, string>>

export const USERNAME_MIN_LENGTH = 3
export const USERNAME_MAX_LENGTH = 20
export const EMAIL_MAX_LENGTH = 254
export const PASSWORD_MIN_LENGTH = 8
export const PASSWORD_MAX_LENGTH = 26

const USERNAME_PATTERN = /^[a-z][a-z0-9_]*$/
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateAuthForm(
  values: AuthFormValues,
  mode: AuthMode,
): AuthFormErrors {
  const errors: AuthFormErrors = {}
  const username = values.username.trim()
  const email = values.email.trim()
  const password = values.password
  const confirmPassword = values.confirmPassword

  if (mode === 'sign-up') {
    if (!username) {
      errors.username = 'Username is required'
    } else if (username.length < USERNAME_MIN_LENGTH || username.length > USERNAME_MAX_LENGTH) {
      errors.username = 'Username must be 3-20 characters'
    } else if (!USERNAME_PATTERN.test(username)) {
      errors.username = 'Username must start with a lowercase letter and contain only lowercase letters, numbers, or underscores'
    }
  }

  if (!email) {
    errors.email = 'Email is required'
  } else if (email.length > EMAIL_MAX_LENGTH) {
    errors.email = 'Email must be 254 characters or fewer'
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Enter a valid email address'
  }

  if (!password) {
    errors.password = 'Password is required'
  } else if (password.length < PASSWORD_MIN_LENGTH) {
    errors.password = 'Password must be minimum 8 characters'
  } else if (password.length > PASSWORD_MAX_LENGTH) {
    errors.password = 'Password must be 26 characters or fewer'
  }

  if (mode === 'sign-up') {
    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required'
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match'
    }
  }

  return errors
}
