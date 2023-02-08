
export interface Speeds {
    numberCores: string
    performance: string
}

export interface CpuReq {
    id: number | null
    name: string
    cached: string
    core: string 
    fastest: string
    speeds: Speeds[]
    thread: string
}

export interface CpuDto {
    id: number
    name: string
    core: number
}