import { ApiResult } from "../../../wrappers/api-result";
import { SignInRequest, SignUpRequest } from "../http/request.interface";

export interface IAuthService {
    signIn(request: SignInRequest): Promise<ApiResult<AuthenticatorResponse>>;
    signUp(request: SignUpRequest): Promise<ApiResult<AuthenticatorResponse>>;
}