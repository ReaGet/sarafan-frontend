import { FetchClient } from '../api'
import { BaseRepository } from './base'

const basePath = '/products/'

export class ProductRepository extends BaseRepository {
  constructor(client: FetchClient) {
    super(client)
  }
  async getAll<T>(): Promise<T[]> {
    return await this.client.get({
      url: basePath
    })
  }
  async getById<T>(id: string): Promise<T> {
    return await this.client.get({
      url: `${basePath}${id}`,
    })
  }
  async create<T>(_data: Partial<T>): Promise<any> {
    
  }
  async update<T>(_data: Partial<T>): Promise<any> {
    
  }
}