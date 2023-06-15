import { inject } from "inversify";
import { ApiResult } from "../../../wrappers/api-result";
import { SignInRequest } from "../../interfaces/http/request.interface";
import { AuthenticationResponse } from "../../interfaces/http/response.interface";
import { IAuthService } from "../../interfaces/services/auth-service.interface";
import { AuthType, Locator, StatusCode } from "../../../constants/app.constant";
import { UserService } from "../user.service";
import { UnauthorizedException } from "../../exceptions/unauthorized.exception";
import { pickFields, verifyPassword } from "../../../utils";
import { User } from "../../interfaces/contracts";
import { IUserService } from "../../interfaces/services/user-service.interface";
import { IKeyService } from "../../interfaces/services/key-service.interface";
import { ServerException } from "../../exceptions/server.exception";
import { ITokenService } from "../../interfaces/services/token-service.interface";

export class AuthService implements IAuthService {
  constructor(
    @inject(Locator.USER_SERVICE) private readonly _userService: IUserService,
    @inject(Locator.TOKEN_SERVICE) private readonly _keyService: IKeyService,
    @inject(Locator.TOKEN_SERVICE) private readonly _tokenService: ITokenService
  ) { }

  async signIn(request: SignInRequest): Promise<ApiResult<AuthenticationResponse>> {
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
    let errorMessage = '';
    let responseMessage = ''

    switch (authType) {
      case AuthType.SIGN_IN: {
        errorMessage = 'Failed to login to your account!';
        responseMessage = 'Login successfully!';
        break;
      }
      case AuthType.SIGN_UP: {
        errorMessage = 'Failed to register new account.';
        responseMessage = 'Account registration successful!';
        break;
      }
      default: {
        console.log('authenticateUser() => Invalid auth type param.');
        break;
      }
    }

    const userId: string = user._id.toString();

    const keyPair = await this._keyService.generateRandomKeyPair()

    if (!keyPair) {
      console.log('AuthService.authenticateUser() => Line 119: Failed to generate random key pair!');

      throw new ServerException({
        message: errorMessage
      });
    }

    const tokenPair = await this._tokenService.generateJWT({
      payload: {
        userId: userId,
        email: user.email,
        full_name: user.full_name
      },
      publicKey: keyPair.publicKey,
      privateKey: keyPair.privateKey
    });

    if (!tokenPair) {
      console.log('AuthService.authenticateUser() => Line [129 -> 137]: Failed to generate token pair!');

      throw new ServerException({
        message: errorMessage
      });
    }

    const saveUserKey = await this._keyService.saveUserKey(userId, keyPair, tokenPair);

    if (!saveUserKey) {
      console.log('AuthService.authenticateUser() => Line 147: Failed to save user key!');

      throw new ServerException({
        message: errorMessage
      });
    }

    const responseData: AuthenticationResponse = {
      user: pickFields(user, ['_id', 'full_name', 'email', 'avatar_url']),
      token: tokenPair
    };

    return await ApiResult.successAsync(StatusCode.CREATED, {
      message: responseMessage,
      data: responseData
    });
  }

}