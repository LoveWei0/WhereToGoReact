interface NameType {
  name: string
}

export type HotCitiesType = NameType[]

export interface CityType {
  citys: HotCitiesType[]
  title: string
}

export type CityListType = CityType[]

export interface CitiesData {
  hotCities: HotCitiesType
  cityList: CityListType
}
