import { GetAllResponse } from '../../../lib/fetchClient'
import { Product } from '../../entities/Product'
export interface IProductRepository {
  create(dto: any): Promise<Product>
  getAll(): Promise<GetAllResponse<Product>>
  getById(id: string): Promise<Product>
}