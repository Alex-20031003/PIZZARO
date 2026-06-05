import Container from '@/shared/ui/Container';
import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <section className='flex items-center justify-center min-h-190'>
      <Container>
        <div className='flex flex-col items-center justify-center h-full gap-2 text-center'>
          <h1 className='text-[96px] sm:text-[136px] flex flex-row items-center font-bold text-(--primary)'>404</h1>
          <div className='flex flex-col items-center gap-1'>
            <p className='text-4xl font-semibold text-gray-800'>There's no pizza here</p>
            <p className='text-2xl font-semibold text-gray-600'>Opps! Looks like you took a wrong turn</p>
            <p className='text-xl font-semibold text-gray-400'>The page you're looking for doesn't exist</p>
          </div>

          <div className='w-full flex flex-col items-center gap-4 sm:flex-row sm:gap-6 max-w-120 mt-4'>
            <Link to='/menu' className='flex-1 sm:w-auto w-full'>
              <button className='bg-(--primary) text-white py-4 px-8 font-medium rounded-lg w-full'>Order Now</button>            
            </Link>
            <Link to='/' className='flex-1 sm:w-auto w-full'>
              <button className='w-full bg-gray-400 text-white py-4 px-8 font-medium rounded-lg'>Home</button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}