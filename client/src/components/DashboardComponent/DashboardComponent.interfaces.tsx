import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from 'react-query'

interface IPosition {
    lat: number
    lng: number
}

interface ILocations {
    id: number
    label: string
    position: IPosition
}

export interface IDashboardInfo {
    integratorid: string
    totaleconomy: number
    totaleconomymeasure: string
    totalenergygenerated: number
    totalenergygeneratedmeasure: string
    carbonavoided: number
    cultivatedtrees: number
    installedunits: string
    installedpower: number
    installedpowermeasure: string
    totalnormalstatus: number
    totalalertstatus: number
    totalerrorstatus: number
    locations: ILocations[]
}

export interface IDashboardInfoObject {
    data: IDashboardInfo
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<IDashboardInfo, unknown>>
    isFetching: boolean
  }