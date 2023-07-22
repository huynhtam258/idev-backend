import { Request as ExpressRequest } from 'express';

export interface ApiKeyRequest {
    key: string;
    status: boolean;
    permissions?: string[];
}

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

export interface Request extends ExpressRequest {
    apiKey?: ApiKeyRequest;
    authentication?: AuthenticationRequest;
}


export interface AuthenticationRequest {
    userId: string;
    accessToken: string;
    refreshToken: string;
    publicKey: string;
    privateKey: string;
}

export interface CustomerRequest {
    customerName: string
    email: string
    phoneNumber: string
    description: string
    notice: string
}

export interface PriceRequest {
    priceName: string,
    fixedPrice: string,
    feature: string[]
}