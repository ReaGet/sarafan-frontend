import { Product } from "../Product"

export type CartItem = {
  product: Product
  quantity: number
}

export type CardDto = {
  product_id: number
  quantity: number
}