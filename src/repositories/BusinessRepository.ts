import { FetchClient, type GetAllResponse } from '@/lib/fetchClient'
import type { IBusinessRepository } from '@/core/repositories/BusinessRepository'
import type { Business } from '@/core/entities/Business'
import { CreateBusinessDto } from '@/core/repositories/BusinessRepository/dto/createBusinessDto'

const basePath = '/businesses/'
const fetchClient = new FetchClient()

export class BusinessRepository implements IBusinessRepository {
  async create(dto: CreateBusinessDto): Promise<Business> {
    return fetchClient.post({
      url: basePath,
      body: dto
    })
  }
  async getAll(): Promise<GetAllResponse<Business>> {
    return fetchClient.get({
      url: basePath,
    })
  }
  getById(id: string | number): Promise<Business> {
    return fetchClient.get({
      url: `${basePath}${id}`,
    })
  }
}