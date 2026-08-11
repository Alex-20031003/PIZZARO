import { useState } from 'react'
import { Link } from 'react-router'
import { LogOut } from 'lucide-react'
import { supabase } from '@/shared/api/supabase/client'
import useAuth from '../model/useAuth'
import avatar from '@/assets/091b0f11-cbe1-40a8-9577-3b9278ad427b.webp'

type UserSidebarContentProps = {
  onClose: () => void
}

export default function UserSidebarContent({
  onClose,
}: UserSidebarContentProps) {
  const { session, isLoading } = useAuth()
  const [isSigningOut, setIsSigningOut] = useState(false)
  const [signOutError, setSignOutError] = useState<string | null>(null)

  async function handleSignOut() {
    setIsSigningOut(true)
    setSignOutError(null)

    try {
      const { error } = await supabase.auth.signOut()

      if (error) {
        setSignOutError('Could not sign out. Please try again.')
        return
      }

      onClose()
    } catch {
      setSignOutError('Unable to connect. Please try again.')
    } finally {
      setIsSigningOut(false)
    }
  }

  if (isLoading) {
    return (
      <div className='flex h-full flex-col'>
        <h2 className='my-6 text-3xl font-semibold'>Account</h2>

        <div className='animate-pulse rounded-2xl bg-(--light-grey) p-4'>
          <div className='h-20 w-20 rounded-full bg-gray-300' />
        </div>
      </div>
    )
  }

  if (!session) {
    return (
      <div className='flex h-full flex-col'>
        <h2 className='my-6 text-3xl font-semibold'>Account</h2>

        <p className='mb-6 text-gray-600'>
          Sign in to view your account.
        </p>

        <div className='flex flex-col gap-3'>
          <Link
            to='/auth/sign-in'
            onClick={onClose}
            className='w-full rounded-xl bg-(--primary) py-3 text-center text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary)'
          >
            Sign In
          </Link>

          <Link
            to='/auth/sign-up'
            onClick={onClose}
            className='w-full rounded-xl bg-(--dark-grey) py-3 text-center text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--dark-grey)'
          >
            Create account
          </Link>
        </div>
      </div>
    )
  }

  const username =
    typeof session.user.user_metadata.username === 'string' &&
    session.user.user_metadata.username.trim()
      ? session.user.user_metadata.username
      : 'User'

  return (
    <div className='flex h-full min-h-0 flex-col'>
      <h2 className='my-6 text-3xl font-semibold'>Account</h2>

      <div className='rounded-2xl bg-(--light-grey) p-4'>
        <div className='flex min-w-0 items-center gap-4'>
          <img
            src={avatar}
            alt='User avatar'
            className='size-20 shrink-0 rounded-full object-cover ring-2 ring-(--primary) ring-offset-2'
          />

          <div className='min-w-0'>
            <p className='mb-1 text-xs font-medium tracking-wide text-(--dark-grey) uppercase'>
              Signed in as
            </p>
            <p className='truncate text-lg font-semibold'>@{username}</p>
            <p className='wrap-break-word text-sm text-(--dark-grey)'>
              {session.user.email ?? 'Email unavailable'}
            </p>
          </div>
        </div>
      </div>

      {signOutError && (
        <p className='mt-4 text-sm text-red-600' role='alert'>
          {signOutError}
        </p>
      )}

      <button
        type='button'
        onClick={handleSignOut}
        disabled={isSigningOut}
        className='mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-(--dark-grey) py-3 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--dark-grey) disabled:cursor-not-allowed disabled:opacity-60'
      >
        <LogOut size={20} aria-hidden='true' />
        {isSigningOut ? 'Signing out...' : 'Sign Out'}
      </button>
    </div>
  )
}
