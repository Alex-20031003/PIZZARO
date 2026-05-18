import Container from '@/shared/ui/Container'

export default function PopularDishesCarouselSkeleton() {
  const skeletons = Array(4).fill(null)

  return (
    <section className="mt-9 mb-9">
      <Container className="flex flex-col">
        <h2 className="mb-9 text-center text-4xl font-semibold">
          Popular Dishes
        </h2>

        <div className="flex gap-6 overflow-hidden">
          {skeletons.map((_, index) => (
            <div
              key={index}
              className="
                shrink-0
                basis-full
                md:basis-[calc(50%-12px)]
                xl:basis-[calc(25%-18px)]
              "
            >
              <div className="animate-pulse rounded-2xl bg-(--light-grey) p-4">
                <div className="mb-4 aspect-square w-full rounded-xl bg-inherit" />

                <div className="mb-3 h-6 w-3/4 rounded bg-gray-300" />

                <div className="mb-4 flex items-center justify-between">
                  <div className="h-5 w-16 rounded bg-gray-300" />
                  <div className="h-8 w-20 rounded-xl bg-gray-300" />
                </div>

                <div className="mb-5 h-4 w-full rounded bg-gray-300" />

                <div className="flex gap-2">
                  <div className="h-12 flex-1 rounded-xl bg-gray-300" />
                  <div className="h-12 w-12 rounded-xl bg-gray-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}