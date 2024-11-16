import { FetchClient, GetAllResponse } from '../lib/fetchClient'
import type { IProductRepository } from '../core/repositories/Product'
import { Product } from '../core/entities/Product'

const basePath = '/products/'
const fetchClient = new FetchClient()

export class ProductRepository implements IProductRepository {
  async create(dto: any): Promise<Product> {
    return fetchClient.post({
      url: basePath,
      body: dto
    })
  }
  async getAll(): Promise<GetAllResponse<Product>> {
    return fetchClient.get({
      url: basePath
    })
  }
  getById(id: string): Promise<Product> {
    return fetchClient.get({
      url: `${basePath}${id}`,
    })
  }
}