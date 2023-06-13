import { inject } from "inversify";
import { ApiResult } from "../../../wrappers/api-result";
import { SignInRequest } from "../../interfaces/http/request.interface";
import { AuthenticationResponse } from "../../interfaces/http/response.interface";
import { IAuthService } from "../../interfaces/services/auth-service.interface";

export class AuthService implements IAuthService {
    
}