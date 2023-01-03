import { Dayjs } from "dayjs"

export interface PhoneReq {
    id?: number | null
    dateAt?: string
    dimensions: string
    name: string
    operation: string
    price: string
    weigh: string
}

export interface NewPhoneReq {
    id?: number | null
    dateAt?: string
    dimensions: string
    name: string
    operation: string
    price: string
    weigh: string
    ram: string
    storage: string
    quantity: string
    brandId: number | null
}

export interface BatteryDto {
    id?: number | null
    capacity: string
    charging: string
    tech: string
    type: string
}

export interface ConnectDto {
    id?: number | null
    bluetooth: string
    mobileNetwork: string
    wifi: string
}

export interface CameraDto {
    id?: number | null
    solution: string
    features: string
    position: 'rear' | 'front' | null
    phoneId?: number | null
}

export interface ScreenDto {
    id?: number | null
    note: string
    brightest: string
    dimension: string
    tech: string
    resolution: string
    phoneId?: number | null
}

export interface GpuDto {
    id: number | string
    name: string
}

export interface ImgPhoneDto {
    avt:string
    dimension:string
    specification:string
}