import { ApiResult } from "../../../wrappers/api-result";
import { SignInRequest, SignUpRequest } from "../http/request.interface";
import { AuthenticationResponse } from "../http/response.interface";

export interface IAuthService {
    signIn(request: SignInRequest): Promise<ApiResult<AuthenticationResponse>>;
    signUp(request: SignUpRequest): Promise<ApiResult<AuthenticationResponse>>;
}