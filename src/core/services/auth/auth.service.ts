import { inject } from "inversify";
import { ApiResult } from "../../../wrappers/api-result";
import { SignInRequest } from "../../interfaces/http/request.interface";
import { AuthenticationResponse } from "../../interfaces/http/response.interface";
import { IAuthService } from "../../interfaces/services/auth-service.interface";
import { AuthType, Locator } from "../../../constants/app.constant";
import { UserService } from "../user.service";
import { UnauthorizedException } from "../../exceptions/unauthorized.exception";
import { verifyPassword } from "../../../utils";

export class AuthService implements IAuthService {
  constructor(
    @inject(Locator.USER_SERVICE) private readonly _userService: UserService
  ) { }

  async signIn(request: SignInRequest): Promise<ApiResult<AuthenticatorResponse>> {
    const existing = await this._userService.repository().findByEmail(request.email);

    if (!existing) {
      throw new UnauthorizedException({
        message: 'Failed to login to your account!',
        errors: ['Incorrect email or password!']
      });
    }
    
    const checkPassword = await verifyPassword(request.password, existing.password)
    
    if (!checkPassword) {
      throw new UnauthorizedException({
        message: 'Failed to login to your account!',
        errors: ['Incorrect email or password!']
      });
    }

    return await this.authenticateUser(existing, AuthType.SIGN_IN);
  }

  private async authenticateUser(user: User, authType: string): Promise<ApiResult<AuthenticationResponse>> {
    
  }
  
}