import http from '@utils/http'
// type
import { CitiesData } from './types/citiesType'

export function getCitiesData() {
  return http.get<any, CitiesData>('/cities')
}
