import Container from '@/shared/ui/Container';
import logo from '@/assets/logo.svg'
import { useState, type SubmitEvent } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router';
import {
  EMAIL_MAX_LENGTH,
  PASSWORD_MAX_LENGTH,
  USERNAME_MAX_LENGTH,
  validateAuthForm,
  type AuthFormErrors,
  type AuthFormValues,
} from '../model/authValidation';

type AuthPageProps = {
  mode: 'sign-in' | 'sign-up'
}

export default function AuthPage({ mode }: AuthPageProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(false)
  const [errors, setErrors] = useState<AuthFormErrors>({})

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const values: AuthFormValues = {
      username: String(formData.get('username') ?? ''),
      email: String(formData.get('email') ?? ''),
      password: String(formData.get('password') ?? ''),
      confirmPassword: String(formData.get('confirmPassword') ?? ''),
    }

    const nextErrors = validateAuthForm(values, mode)

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }
  }

  return (
    <section className='flex flex-1 flex-col py-6'>
      <Container className='flex flex-1 flex-col items-center justify-center text-lg'>
        <div className='flex flex-col items-center justify-center gap-2 mb-6'>
          <img src={logo} alt='Logo PIZZARO' title='Logo PIZZARO' className='w-15 h-15' />
          <h2 className='text-3xl font-semibold'>PIZZARO</h2>
        </div>

        <h1 className='capitalize text-4xl font-semibold mb-6'>{mode.replaceAll('-', ' ')}</h1>

        <form
          onSubmit={handleSubmit}
          noValidate
          className='flex w-full max-w-sm min-w-0 flex-col items-center'
        >
          {mode === 'sign-up' && (
            <div className='w-full flex flex-col gap-1 mb-4'>
              <label htmlFor='username' className='text-sm pl-1'>Username</label>
              <input
                type='text'
                name='username'
                id='username'
                placeholder='Username'
                autoComplete='username'
                maxLength={USERNAME_MAX_LENGTH}
                required
                className={`p-2 border-2 ${errors.username ? 'border-red-600 focus:border-red-600' : 'border-transparent focus:border-(--primary)'} focus:border-2 outline-none transition-colors bg-[#E6E6E6] rounded-lg text-base w-full placeholder:text-base`}
              />

              {errors.username &&
                <p className='w-full min-w-0 break-words text-sm text-red-600 pl-1' role='alert'>{errors.username}</p>
              }
            </div>
          )}

          <div className='w-full flex flex-col gap-1 mb-4'>
            <label htmlFor='email' className='text-sm pl-1'>E-Mail</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='E-Mail'
              autoComplete='email'
              maxLength={EMAIL_MAX_LENGTH}
              required
              className={`p-2 border-2 ${errors.email ? 'border-red-600 focus:border-red-600' : 'border-transparent focus:border-(--primary)'} focus:border-2 outline-none transition-colors bg-[#E6E6E6] rounded-lg text-base w-full placeholder:text-base`}
            />

            {errors.email &&
              <p className='text-sm text-red-600 pl-1' role='alert'>{errors.email}</p>
            }
          </div>

          <div className='relative flex w-full flex-col gap-1 mb-4'>
            <label htmlFor='password' className='text-sm pl-1'>Password</label>
            <div className='relative flex w-full flex-row'>
              <input
                type={`${isPasswordVisible ? 'text' : 'password'}`}
                name='password'
                id='password'
                placeholder='Password'
                maxLength={PASSWORD_MAX_LENGTH}
                required
                autoComplete={mode === 'sign-in' ? 'current-password' : 'new-password'}
                className={`py-2 pl-2 pr-12 border-2 ${errors.password ? 'border-red-600 focus:border-red-600' : 'border-transparent focus:border-(--primary)'} focus:border-2 outline-none transition-colors bg-[#E6E6E6] rounded-lg text-base w-full placeholder:text-base`}
              />
              <button
                type='button'
                onClick={() => setIsPasswordVisible(current => !current)}
                className='absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center'
              >
                {isPasswordVisible ? <EyeOff /> : <Eye />}
              </button>
            </div>

            {errors.password &&
              <p className='text-sm text-red-600 pl-1' role='alert'>{errors.password}</p>
            }
          </div>

          {mode === 'sign-up' && (
            <div className='flex w-full flex-col gap-1 mb-6'>
              <label htmlFor='confirmPassword' className='text-sm pl-1'>Confirm password</label>
              <div className='relative flex w-full flex-row'>
                <input
                  type={`${isConfirmPasswordVisible ? 'text' : 'password'}`}
                  name='confirmPassword'
                  id='confirmPassword'
                  placeholder='Confirm password'
                  maxLength={PASSWORD_MAX_LENGTH}
                  required
                  autoComplete={mode === 'sign-up' ? 'new-password' : 'current-password'}
                  className={`py-2 pl-2 pr-12 border-2 ${errors.confirmPassword ? 'border-red-600 focus:border-red-600' : 'border-transparent focus:border-(--primary)'} focus:border-2 outline-none transition-colors bg-[#E6E6E6] rounded-lg text-base w-full placeholder:text-base`}
                />
                <button
                  type='button'
                  onClick={() => setIsConfirmPasswordVisible(current => !current)}
                  className='absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center'
                >
                  {isConfirmPasswordVisible ? <EyeOff /> : <Eye />}
                </button>
              </div>

              {errors.confirmPassword &&
                <p className='text-sm text-red-600 pl-1' role='alert'>{errors.confirmPassword}</p>
              }
            </div>
          )}

          <button type='submit' className='mb-2 py-2 rounded-xl bg-(--primary) text-white w-full'>
            {mode === 'sign-in' ? 'Sign In' : 'Create account'}
          </button>

          <div className='flex flex-row items-center gap-1'>
            <p className='sm:text-base text-sm'>{mode === 'sign-in' ? `Don't you have an account?` : 'Do you have an account?'}</p>
            <Link to={`${mode === 'sign-in' ? '/auth/sign-up' : '/auth/sign-in'}`} className='text-(--primary) underline font-medium sm:text-base text-sm'>{mode === 'sign-in' ? 'Sign Up' : 'Sign In'}</Link>
          </div>
        </form>
      </Container>
    </section>
  )
}
