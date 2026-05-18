import AboutUs from '@/widgets/about-us/AboutUs';
import Banner from '@/widgets/banner/Banner';
import Categories from '@/widgets/categories/Categories';
import PopularDishes from '@/widgets/popular-dishes/PopularDishes';

export default function HomePage() {
  return (
    <>
      <Banner />
      <Categories />
      <PopularDishes />
      <AboutUs />
    </>
  )
}