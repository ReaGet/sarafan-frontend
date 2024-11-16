import { Product } from '../core/entities/Product'
import { ProductRepository } from '../repositories/ProducRepository'

class ProductService {
  private repository: ProductRepository;
  constructor(repository: ProductRepository) {
    this.repository = repository
  }
  async create(_data: Partial<Product>) {
    
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