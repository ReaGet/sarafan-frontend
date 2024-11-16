import { FetchClient } from '../api'

export interface Repository {
  client: FetchClient
  getAll<T>(): Promise<T[]>
  getById<T>(id: string): Promise<T>
  create<T>(data: Partial<T>): Promise<any>
  update<T>(data: Partial<T>): Promise<any>
}

export class BaseRepository implements Repository {
  client: FetchClient
  constructor(client: FetchClient) {
    this.client = client
  }
  getAll<T>(): Promise<T[]> {
    return Promise.reject('You have to implement GetAll method')    
  }
  getById<T>(_id: string): Promise<T> {
    return Promise.reject('You have to implement GetById method')    
  }
  create<T>(_data: Partial<T>): Promise<any> {
    return Promise.reject('You have to implement Create method')
  }
  update<T>(_data: Partial<T>): Promise<any> {
    return Promise.reject('You have to implement Update method')    
  }
}