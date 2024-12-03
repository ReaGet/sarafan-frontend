import { toQuery } from "@/lib/url"

type FetchBody = Record<string, any>

type FetchParams = {
  url: string
  body?: FetchBody
  headers?: Record<string, any>
  method?: 'POST'|'GET'|'PATCH'
}

export type GetAllResponse<T> = {
  count: number
  next: string
  previous: string
  results: T[]
}

export interface FetchClient {
  get<T>(params: FetchParams): Promise<T>
  post<T>(params: FetchParams): Promise<T>
}

export class FetchClient implements FetchClient {
  async get<T>(params: FetchParams): Promise<T> {
    let { url, headers, body, method = 'GET' } = params
    url = `${getApiUrl(url)}`
    const queryParams = toQuery(body || {})
    
    if (queryParams)
      url += `?${queryParams}`

    return await fetch(url, {
      method,
      headers,
    }).then(res => res.json())
  }
  async post<T>(params: FetchParams): Promise<T> {
    const { url, headers, body, method = 'POST' } = params
    const finalUrl = `${getApiUrl(url)}`
    return await fetch(finalUrl, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify(body || {})
    }).then(res => res.json())
  }
  async update<T>(params: FetchParams): Promise<T> {
    const { url, headers, body, method = 'PATCH' } = params
    const finalUrl = `${getApiUrl(url)}`
    return await fetch(finalUrl, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify(body || {})
    }).then(res => res.json())
  }
}

const getApiUrl = (url: string) => {
  return `${import.meta.env.VITE_BASE_API}${url}`
}