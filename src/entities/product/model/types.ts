type PizzaConfig = {
  sizes: {
    label: string
    price: number
  }[]

  cheeseCrust: {
    available: boolean
    extraPrice: number
  }
}

type SushiConfig = {
  counts: {
    count: number
    price: number
  }[]
}

type BurgerConfig = {
  extras: {
    label: string
    extraPrice: number
  }[]
}

type drinkConfig = {
  volumes: {
    label: string
    price: number
  }[]
}

type ProductConfig = PizzaConfig | SushiConfig | BurgerConfig | drinkConfig

export interface Product {
  id: number,
  category: string,
  title: string,
  slug: string,
  description: string,
  ingridients: Array<string>,
  tags: Array<string>,
  image_url: string,
  base_price: number,
  discount_price: number | null;
  is_available: boolean,
  is_active: boolean,
  rating: number,
  sort_order: number,
  config: ProductConfig,
  created_at: string,
  updated_at: string
}

export type ProductCardData = Pick<Product, 'id' | 'title' | 'category' | 'slug' | 'image_url' | 'base_price' | 'discount_price' | 'rating'>