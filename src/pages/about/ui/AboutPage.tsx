import AboutUsImg1 from '@/assets/about-us-page/AboutUs 1.webp'
import AboutUsImg2 from '@/assets/about-us-page/AboutUs 2.webp'
import AboutUsImg3 from '@/assets/about-us-page/AboutUs 3.webp'
import Container from '@/shared/ui/Container'

export default function AboutPage() {
  return (
    <section className='mt-19'>
      <Container>
        {/* <h1 className='font-base text-4xl mb-12 tracking-[5%]'>About Us</h1> */}

        <div className='grid grid-col-1 xl:grid-cols-2 gap-12 text-left place-items-center xl:place-items-start mb-12'>
          <div className='flex flex-col'>
            <h2 className='font-semibold text-4xl mb-12'>Where We Are</h2>

            <p className='max-w-141 w-full text-[#6b6b6b] text-2xl mb-12'>
              PIZZARO is located in the heart of the city, where fast life meets great food. We’ve created a place that feels modern, clean, and welcoming — whether you’re stopping by for a quick bite or meeting friends.
            </p>

            <img src={AboutUsImg1} alt='Pizzaro build image' className='w-full xl:hidden mb-12' />


            <p className='max-w-141 w-full text-[#6b6b6b] text-2xl mb-12'>
              Our space combines the speed of fast food with the atmosphere of a quality restaurant. Fresh meals, simple ordering, and a place where you actually want to stay a little longer.
            </p>
          </div>

          <img src={AboutUsImg1} alt='Pizzaro build image' className='w-full h-full hidden xl:block' />

          <img src={AboutUsImg2} alt='Pizzaro team image' className='w-full h-full hidden xl:block' />

          <div className='flex flex-col'>
            <h2 className='font-semibold text-4xl mb-12'>Our Story</h2>

            <p className='max-w-141 w-full text-[#6b6b6b] text-2xl mb-12'>
              PIZZARO started with a simple idea — make great food fast, without sacrificing quality.
            </p>

            <p className='max-w-141 w-full text-[#6b6b6b] text-2xl mb-12'>
              We took inspiration from classic Italian recipes and combined it with a modern approach to cooking and service. Every product is made with attention to detail, from fresh ingredients to balanced flavors.
            </p>

            <img src={AboutUsImg2} alt='Pizzaro team image' className='w-full xl:hidden mb-12' />

            <p className='max-w-141 w-full text-[#6b6b6b] text-2xl mb-12'>
              What began as a small concept has grown into a brand focused on consistency, speed, and experience. Because good food shouldn’t be complicated — it should just be right.
            </p>

          </div>

          <div className='flex flex-col'>
            <h2 className='font-semibold text-4xl mb-12'>Our Chef</h2>

            <p className='max-w-141 w-full text-[#6b6b6b] text-2xl mb-12'>
              Behind every great pizza is a chef who knows exactly what he’s doing.
            </p>

            <p className='max-w-141 w-full text-[#6b6b6b] text-2xl mb-12'>
              Our head chef combines traditional techniques with a modern mindset. From dough preparation to final presentation — every step matters.
            </p>

            <img src={AboutUsImg3} alt='Pizzaro chef image' className='w-full xl:hidden mb-12' />

            <p className='max-w-141 w-full text-[#6b6b6b] text-2xl mb-12'>
              It’s not just about cooking fast, it’s about doing it right every single time. That’s what turns simple ingredients into something people come back for.
            </p>
          </div>

          <img src={AboutUsImg3} alt='Pizzaro chef image' className='w-full h-full hidden xl:block' />
        </div>
      </Container>
    </section>
  )
}
