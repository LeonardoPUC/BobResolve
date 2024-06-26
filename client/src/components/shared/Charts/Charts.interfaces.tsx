import { CHART_TYPE } from '../../../constants/enum'

interface IPlotData {
    step: string
    data: {
        category: number
        production: any
    }[]
}

export interface ICharts {
    type: CHART_TYPE
    categories?: string[]
    overwriteCategories?: string[]
    plotData: IPlotData[] | IPlotData 
    labels?: number[]
    maxGeneration?: any
}