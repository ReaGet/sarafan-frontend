import { FetchClient, GetAllResponse } from '@/lib/fetchClient'
import type { IProductRepository } from '@/core/repositories/Product'
import { Product } from '@/core/entities/Product'
import { CreateProductDto } from '@/core/repositories/Product/dto/createProductDto'
import { UpdateProductDto } from '@/core/repositories/Product/dto/updateProductDto'

const basePath = '/products/'
const fetchClient = new FetchClient()

export class ProductRepository implements IProductRepository {
  async create(dto: CreateProductDto): Promise<Product> {
    return fetchClient.post({
      url: basePath,
      body: dto
    })
  }
  async update(productId: string, dto: UpdateProductDto): Promise<Product> {
    return fetchClient.update({
      url: `${basePath}${productId}`,
      body: dto
    })
  }
  async getAll(): Promise<GetAllResponse<Product>> {
    return fetchClient.get({
      url: basePath
    })
  }
  async getAllByBusinessId(businessId: string): Promise<GetAllResponse<Product>> {
    return fetchClient.get({
      url: `${basePath}`,
      body: {
        business: businessId
      }
    })
  }
  getById(id: string): Promise<Product> {
    return fetchClient.get({
      url: `${basePath}${id}`,
    })
  }
}