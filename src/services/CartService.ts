import { CardDto } from '@/core/entities/Cart';
import { ICartRepository  } from '@/core/repositories/Cart'
import { CartRepository } from '@/repositories/CartRepository'

class CartService {
  private repository: ICartRepository;
  constructor(repository: ICartRepository) {
    this.repository = repository
  }

  async add(userId: number, dto: CardDto) {
    try {
      return await this.repository.add(userId, dto)
    } catch(e) {
      return null
    }
  }
  
  async get(userId: number) {
    try {
      return await this.repository.get(userId)
    } catch(e) {
      return []
    }
  }

  async remove(userId: number, dto: CardDto) {
    try {
      return await this.repository.remove(userId, dto)
    } catch(e) {
      return null
    }
  }
  
}

export default new CartService(new CartRepository())