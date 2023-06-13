export interface SignInRequest {
    email: string,
    password: string,
    refreshToken: string
}

export interface SignUpRequest {
    email: string,
    fullName: string,
    phoneNumber: string,
    password: string
}