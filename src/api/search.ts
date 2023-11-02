import http from '@/utils/http'
// type
import { SearchType } from './types/searchType'

export function getSearch(key: string) {
  return http.get<any, SearchType>('/search?key=' + `${key}`)
}
