import { GetAllResponse } from '@/lib/fetchClient'
import { Product } from '@/core/entities/Product'
import { CreateProductDto } from './dto/createProductDto'

export interface IProductRepository {
  create(dto: CreateProductDto): Promise<Product>
  getAll(): Promise<GetAllResponse<Product>>
  getById(id: string): Promise<Product>
  getAllByBusinessId(id: string): Promise<GetAllResponse<Product>>
}