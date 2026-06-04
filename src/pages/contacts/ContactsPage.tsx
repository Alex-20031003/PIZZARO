import Container from '@/shared/ui/Container'
import ContactCard from '@/widgets/contact-card/ContactCard'
import { Link, Mail, Phone } from 'lucide-react'

export default function ContactsPage() {
  return (
    <section className='mt-9 mb-24'>
      <Container>
        <div className='flex flex-col items-center text-center gap-6 w-full mb-12'>
          <h1 className='font-semibold text-5xl'>Get In Touch With Us</h1>
          <p className='text-[#6b6b6b] text-2xl max-w-189'>we’re here to answer any questions you may have and look forward to hearing from you</p>
        </div>

        <div className='mb-42'>
          <ul className='flex flex-col xl:flex-row gap-12  items-center justify-around'>
            <ContactCard headline='Call Us' text='+9 (99) 999-99-99' icon={Phone} />
            <ContactCard headline='Email Us' text='pizzarosupport@email.com' icon={Mail} />
            <ContactCard headline='Follow Us' icon={Link} />
          </ul>
        </div>

        <div className='flex flex-col xl:flex-row justify-between items-center gap-16'>
          <div className='flex flex-col gap-6 text-center xl:text-left'>
            <h2 className='text-4xl font-medium tracking-[2%]'>Subscribe to Our Newsletter</h2>
            <p className='text-xl text-[#6b6b6b] tracking-[2%]'>Subscribe to receive the latest news, offers and updates from PIZZARO.</p>
          </div>

          <form className='flex sm:flex-row flex-col justify-center max-w-180 w-full items-center gap-4'>
            <input type='email' placeholder='Enter your email' className='bg-(--light-grey) px-5 py-5.5 sm:max-w-120 w-full placeholder:text-[#797979] placeholder:text-lg placeholder:font-medium placeholder:tracking-[5%] rounded-lg focus:outline-(--primary)' />

            <button type='button' className='py-5 px-5 bg-(--primary) text-white font-medium text-lg rounded-lg w-full sm:w-auto'>Subscribe</button>
          </form>
        </div>
      </Container>
    </section>
  )
}