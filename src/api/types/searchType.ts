interface SearchData {
  key: string
  display: string
}

export type ResultData = SearchData[]

export interface SearchType {
  result: SearchData[]
  searchKey: string
}
