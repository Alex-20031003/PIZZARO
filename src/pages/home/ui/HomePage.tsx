import { AboutUs } from '@/widgets/about-us';
import { Banner } from '@/widgets/banner';
import { Categories } from '@/widgets/categories';
import { PopularDishes } from '@/widgets/popular-dishes';
import LazySection from '@/shared/ui/LazySection';

export default function HomePage() {

  return (
    <>
      <LazySection height='500px' threshold={0.4}>
        <Banner />
      </LazySection>

      <LazySection height='510px' threshold={0.3}>
        <Categories />
      </LazySection>

      <LazySection height='650px' threshold={0.3}>
        <PopularDishes />
      </LazySection>

      <LazySection height='650px' threshold={0.3}>
        <AboutUs />
      </LazySection>

    </>
  )
}