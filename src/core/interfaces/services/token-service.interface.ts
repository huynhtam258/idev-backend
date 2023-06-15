import { TokenPair } from "../contracts/pair.interface";
import { Token } from "../contracts/token.interface";
import { AuthenticationRequest } from "../http/request.interface";

export interface ITokenService {
    generateJWT(request: Token): Promise<TokenPair | null>;
    verifyAccessToken(userId: string, accessToken: string): Promise<void>;
    verifyRefreshToken(userId: string, refreshToken: string): Promise<AuthenticationRequest>;
}