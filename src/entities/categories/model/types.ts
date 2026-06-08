import type { ComponentType, SVGProps } from 'react'

export interface Category {
  id: number,
  title: string,
  slug: string,
  image_url: string
}

export interface categoryMenu extends Omit<Category, 'image_url'> {
  icon: ComponentType<SVGProps<SVGSVGElement>>
}