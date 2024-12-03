import { CardDto, CartItem } from '@/core/entities/Cart'

export interface ICartRepository {
  add(userId: number, dto: CardDto): Promise<CartItem>
  get(userId: number): Promise<CartItem[]>
  remove(userId: number, dto: CardDto): Promise<CartItem>
}