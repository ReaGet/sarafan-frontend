import { Product } from "@/core/entities/Product"

export type CreateProductDto = Omit<Product, 'id' | 'created' | 'updated' | 'weight_unit' | 'volume_unit'> & {
  weightUnit: string
  volumeUnit: string
}