import { GetAllResponse } from '@/lib/fetchClient'
import { Product } from '@/core/entities/Product'
import { CreateProductDto } from './dto/createProductDto'
import { UpdateProductDto } from './dto/updateProductDto'

export interface IProductRepository {
  create(dto: CreateProductDto): Promise<Product>
  create(dto: UpdateProductDto): Promise<Product>
  getAll(): Promise<GetAllResponse<Product>>
  getById(id: string): Promise<Product>
  getAllByBusinessId(id: string): Promise<GetAllResponse<Product>>
}