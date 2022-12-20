export interface AdminDto {
    id: number
    name: string
    username: string
    roles: string
}

export interface LoginDto {
    username: string
    password: string
}