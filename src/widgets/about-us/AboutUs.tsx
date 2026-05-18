import Banner from '@/assets/About-Us(HomePage).webp'
import Container from '@/shared/ui/Container'
import { Link } from 'react-router'

export default function AboutUs() {
  return (
    <section className='mb-9 bg-(--light-grey) xl:bg-inherit py-4'>
      <Container className='flex flex-col xl:flex-row items-center gap-6'>
        <img src={Banner} alt='Our Chef Photo' className='h-auto hidden xl:block xl:w-[50%]' />
        <div className='flex flex-col gap-15 items-center xl:items-start'>
          <h1 className='text-4xl font-semibold'>About Us</h1>

          <p className='text-xl text-(--dark-grey) text-center xl:text-left max-w-170'><span className='font-semibold'>PIZZARO</span> is a modern food brand focused on quality, simplicity, and fresh ingredients. We prepare pizza, sushi, burgers, and drinks with attention to detail, combining classic recipes and contemporary taste. Our goal is to offer well-crafted food that feels familiar, reliable, and enjoyable, whether you dine in, order takeaway, or choose fast delivery.</p>

          <Link to='/about'>
            <button type='button' className='bg-(--primary) text-lg text-white px-12 py-4 rounded-xl'>Read More</button>

          </Link>
        </div>
      </Container>
    </section>
  )
}
