import { CreateProductDto } from '@/core/repositories/Product/dto/createProductDto'
import { UpdateProductDto } from '@/core/repositories/Product/dto/updateProductDto';
import { ProductRepository } from '@/repositories/ProducRepository'

class ProductService {
  private repository: ProductRepository;
  constructor(repository: ProductRepository) {
    this.repository = repository
  }
  async create(dto: CreateProductDto) {
    try {
      return await this.repository.create(dto)
    } catch(e) {
      console.log(`[create]: ${e}`)
      return {}
    }
  }
  async update(productId: string, dto: Partial<UpdateProductDto>) {
    try {
      return await this.repository.update(productId, dto)
    } catch(e) {
      console.log(`[create]: ${e}`)
      return {}
    }
  }
  async getAll() {
    try {
      return await this.repository.getAll()
    } catch(e) {
      console.log(`[getAll]: ${e}`)
      return {
        results: []
      }
    }
  }
  async getAllByBusinessId(businessId: string) {
    try {
      const response = await this.repository.getAllByBusinessId(businessId)
      if ('detail' in response) {
        return null
      }
      return response
    } catch(e) {
      console.log(`[getAllByBusinessId]: ${e}`)
      return null
    }
  }
  async getById(id: string) {
    try {
      const response = await this.repository.getById(id)
      if ('detail' in response) {
        return null
      }
      return response
    } catch(e) {
      console.log(`[getById]: ${e}`)
      return null
    }
  }
}

export default new ProductService(new ProductRepository())