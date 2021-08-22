export interface ChartOptionsInter {
  chart: any
  title?: { text: string }
  series?: any
}

export type ChartData = number[]

export interface MyChartProps {
  title?: string
  options?: ChartOptionsInter
  data?: any
  chartIndex?: number
}

export interface ChartDefsInter {
  options?: ChartOptionsInter
  data?: any
}
