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

export interface AuthResponse {
    username:string, 
    name:string,
    authority: GrantedAuthority[],
    access_token:string,
    refresh_token:string,
}
export interface GrantedAuthority {
    authority: string
}