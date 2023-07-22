import { TokenPair } from "../contracts/pair.interface";

export interface UserResponse {
    _id?: string;
    email: string;
    full_name: string;
    avatar_url: string;
}

export interface CustomerResponse {
    _id?: string;
    customer_name: string,
    email: string,
    phone_number: string,
    description: string,
    notice: string
}

export interface AuthenticationResponse {
    user: UserResponse,
    token: TokenPair
}

export interface KeyResponse {
    userId: string;
    publicKey: string;
    privateKey: string;
    accessToken: string;
    refreshToken: string;
    oldRefreshTokens: string[];
}

export interface PriceResponse {
    price_name: string,
    fixed_price: string,
    feature: string[]
}