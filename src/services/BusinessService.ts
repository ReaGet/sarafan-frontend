import { Business } from '../core/entities/Business'
import { BusinessRepository } from '../repositories/BusinessRepository'

class BusinessService {
  private repository: BusinessRepository;
  constructor(repository: BusinessRepository) {
    this.repository = repository
  }
  async create(_data: Partial<Business>) {
    
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
  async getById(id: string | number) {
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

export default new BusinessService(new BusinessRepository())