import BannerImage from '@/assets/Banner-hero.webp'
import Container from '@/shared/ui/Container'
import { Link } from 'react-router'

export default function Banner() {
  return (
    <section className='relative bg-(--light-grey) pt-30 pb-28.5'>
      <img src={BannerImage} alt='Banner Image Pizza' className='absolute right-0 top-0 w-225 h-150 z-0 hidden xl:block' />

      <Container>
        <div className='relative z-10 flex flex-col items-center xl:items-start justify-center text-center xl:text-left'>
          <h1 className='sm:text-[54px]/[65px] text-4xl/tight tracking-wider sm:font-semibold font-bold max-w-120 sm:max-w-125 w-full mb-9'>Hot & Fresh Pizza Delivered To You</h1>
          <p className='sm:text-[22px]/[27px] text-base tracking-wider max-w-109 sm:max-w-150 w-full mb-9'>Get <span className='font-bold text-(--black)'>20% off</span> your first order. Experience the best pizza in town, delivered right to your door!</p>

          <button className='bg-(--primary) text-(--white) sm:py-4.5 sm:px-12 py-4 px-10 rounded-lg md:text-lg text-base font-semibold'>
            <Link to='/menu'>Order Now</Link>
          </button>
        </div>

      </Container>
    </section>
  )
}
