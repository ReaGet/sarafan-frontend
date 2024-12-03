import { FetchClient} from '@/lib/fetchClient'
import { type ICartRepository } from '@/core/repositories/Cart'
import { CardDto, CartItem } from '@/core/entities/Cart'

const basePath = 'users/'
const fetchClient = new FetchClient()

export class CartRepository implements ICartRepository {
  async add(userId: number, dto: CardDto): Promise<CartItem> {
    return fetchClient.post({
      url: `${basePath}${userId}/add-to-basket/`,
      body: dto,
    })
  }
  async get(userId: number): Promise<CartItem[]> {
    return fetchClient.get({
      url: `${basePath}${userId}/basket`,
    })
  }
  async remove(userId: number, dto: CardDto): Promise<CartItem> {
    return fetchClient.post({
      url: `${basePath}${userId}/remove-from-basket/`,
      body: dto,
    })
  }
}