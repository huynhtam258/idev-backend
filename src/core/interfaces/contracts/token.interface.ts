import { JwtPayload } from "jsonwebtoken";

export interface PayLoad extends JwtPayload {
    userId: string,
    email: string,
    full_name: string
}

export interface Token {
    payload: PayLoad,
    publicKey: string,
    privateKey: string
}