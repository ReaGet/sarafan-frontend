type FetchBody = Record<string, any>
type FetchParams = {
  url: string
  body?: FetchBody
  headers?: Record<string, any>
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
    let { url, headers, body } = params
    url = `${getApiUrl(url)}`
    const queryParams = objectToQueryParams(body || {})
    
    if (queryParams)
      url += `?${queryParams}`

    return await fetch(url, {
      headers
    }).then(res => res.json())
  }
  async post<T>(params: FetchParams): Promise<T> {
    const { url, headers, body } = params
    const finalUrl = `${getApiUrl(url)}`
    return await fetch(finalUrl, {
      headers: {
        method: 'POST',
        ...headers
      },
      body: JSON.stringify(body || {})
    }).then(res => res.json())
  }
}

const getApiUrl = (url: string) => {
  return `${import.meta.env.VITE_BASE_API}${url}`
}

const objectToQueryParams = (obj: Record<string, any>) => {
  return new URLSearchParams(obj).toString()
}