import { Product } from "@/core/entities/Product"

export type CreateProductDto = Omit<Product, 'id' | 'created' | 'updated'>