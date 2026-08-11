import Container from '@/shared/ui/Container'

export default function ProductPageSkeleton() {
  return (
    <section className='2xl:pt-18 pt-20 pb-6 2xl:pb-12'>
      <Container className='flex animate-pulse flex-col gap-6 lg:flex-row xl:gap-12'>
        <div className='aspect-square w-full max-w-full rounded-xl bg-(--light-grey) sm:min-w-130 lg:w-1/2 lg:max-w-185' />

        <div className='flex w-full flex-1 flex-col py-8'>
          <div className='flex items-center justify-between gap-6'>
            <div className='h-10 w-2/3 rounded-xl bg-(--light-grey)' />
            <div className='h-8 w-18 shrink-0 rounded-xl bg-(--light-grey)' />
          </div>

          <div className='my-6 flex flex-col gap-3'>
            <div className='h-5 w-full rounded-lg bg-(--light-grey)' />
            <div className='h-5 w-5/6 rounded-lg bg-(--light-grey)' />
            <div className='h-5 w-2/3 rounded-lg bg-(--light-grey)' />
          </div>

          <div className='flex flex-col gap-3'>
            <div className='h-6 w-32 rounded-lg bg-(--light-grey)' />
            <div className='h-5 w-3/4 rounded-lg bg-(--light-grey)' />
          </div>

          <div className='mt-6 h-10 w-28 rounded-xl bg-(--light-grey)' />

          <div className='mt-6 flex items-center justify-between lg:max-w-125'>
            <div className='size-8 rounded-full bg-(--light-grey)' />
            <div className='h-8 w-10 rounded-lg bg-(--light-grey)' />
            <div className='size-8 rounded-full bg-(--light-grey)' />
          </div>

          <div className='mt-12 flex gap-2 lg:max-w-125'>
            <div className='h-12 flex-1 rounded-xl bg-(--light-grey)' />
            <div className='size-12 rounded-xl bg-(--light-grey)' />
          </div>
        </div>
      </Container>
    </section>
  )
}
