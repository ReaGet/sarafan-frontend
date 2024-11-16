import { GetAllResponse } from '@/lib/fetchClient'
import { Business } from '@/core/entities/Business'
import { CreateBusinessDto } from './dto/createBusinessDto'

export interface IBusinessRepository {
  create(dto: CreateBusinessDto): Promise<Business>
  getAll(): Promise<GetAllResponse<Business>>
  getById(id: string): Promise<Business>
}