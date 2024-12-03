export const toQuery = (obj: Record<string, any>) => {
  return new URLSearchParams(obj).toString()
}