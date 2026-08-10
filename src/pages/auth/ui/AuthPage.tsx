import Container from '@/shared/ui/Container';
import logo from '@/assets/logo.svg'
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router';

type AuthPageProps = {
  mode: 'sign-in' | 'sign-up'
}

export default function AuthPage({ mode }: AuthPageProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(false)

  return (
    <section className='flex flex-1 flex-col py-6'>
      <Container className='flex flex-1 flex-col items-center justify-center text-lg'>
        <div className='flex flex-col items-center justify-center gap-2 mb-6'>
          <img src={logo} alt='Logo PIZZARO' title='Logo PIZZARO' className='w-15 h-15' />
          <h2 className='text-3xl font-semibold'>PIZZARO</h2>
        </div>

        <h1 className='capitalize text-4xl font-semibold mb-6'>{mode.replaceAll('-', ' ')}</h1>

        <form
          onSubmit={(e) => e.preventDefault()}
          className='flex flex-col items-center'
        >
          {mode === 'sign-up' && (
            <div className='w-full flex flex-col gap-1 mb-4'>
              <label htmlFor='userName' className='text-sm pl-1'>Username</label>
              <input
                type='text'
                name='userName'
                id='userName'
                placeholder='Username'
                autoComplete='username'
                required
                className='p-2 border-2 border-transparent focus:border-2 focus:border-(--primary) outline-none transition-colors bg-[#E6E6E6] rounded-lg text-base w-full placeholder:text-base'
              />
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
              required
              className='p-2 border-2 border-transparent focus:border-2 focus:border-(--primary) outline-none transition-colors bg-[#E6E6E6] rounded-lg text-base w-full placeholder:text-base'
            />
          </div>

          <div className='relative flex flex-col gap-1 mb-4'>
            <label htmlFor='password' className='text-sm pl-1'>Password</label>
            <div className='relative flex flex-row'>
              <input
                type={`${isPasswordVisible ? 'text' : 'password'}`}
                name='password'
                id='password'
                placeholder='Password'
                required
                autoComplete={mode === 'sign-in' ? 'current-password' : 'new-password'}
                className='py-2 pl-2 pr-12 border-2 border-transparent focus:border-2 focus:border-(--primary) outline-none transition-colors bg-[#E6E6E6] rounded-lg text-base w-full placeholder:text-base'
              />
              <button
                type='button'
                onClick={() => setIsPasswordVisible(current => !current)}
                className='absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center'
              >
                {isPasswordVisible ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          {mode === 'sign-up' && (
            <div className='flex flex-col gap-1 mb-6'>
              <label htmlFor='confirmPassword' className='text-sm pl-1'>Confirm password</label>
              <div className='relative flex flex-row'>
                <input
                  type={`${isConfirmPasswordVisible ? 'text' : 'password'}`}
                  name='confirmPassword'
                  id='confirmPassword'
                  placeholder='Confirm password'
                  required
                  autoComplete={mode === 'sign-up' ? 'new-password' : 'current-password'}
                  className='py-2 pl-2 pr-12 border-2 border-transparent focus:border-2 focus:border-(--primary) outline-none transition-colors bg-[#E6E6E6] rounded-lg text-base w-full placeholder:text-base'
                />
                <button
                  type='button'
                  onClick={() => setIsConfirmPasswordVisible(current => !current)}
                  className='absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center'
                >
                  {isConfirmPasswordVisible ? <EyeOff /> : <Eye />}
                </button>
              </div>
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
