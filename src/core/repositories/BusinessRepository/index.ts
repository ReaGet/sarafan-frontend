import { GetAllResponse } from '../../../lib/fetchClient'
import { Business } from '../../entities/Business'

export interface IBusinessRepository {
  create(dto: any): Promise<Business>
  getAll(): Promise<GetAllResponse<Business>>
  getById(id: string): Promise<Business>
}