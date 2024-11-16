import { FetchClient, GetAllResponse } from '../lib/fetchClient'
import type { IBusinessRepository } from '../core/repositories/BusinessRepository'
import type { Business } from '../core/entities/Business'

const basePath = '/businesses/'
const fetchClient = new FetchClient()

export class BusinessRepository implements IBusinessRepository {
  async create(dto: any): Promise<Business> {
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