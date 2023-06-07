import { TokenPair } from "../contracts/pair.interface";
import { Token } from "../contracts/token.interface";

export interface ITokenService {
    generateJWT(request: Token): Promise<TokenPair | null>;
    verifyAccessToken(userId: string, accessToken: string): Promise<void>;
    verifyResfreshToken(userId: string, refreshToken: string): Promise<void>;
}