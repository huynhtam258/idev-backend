import { inject, injectable } from "inversify";
import { BaseController } from "./base.controller";
import { Locator } from "../../constants/app.constant";
import { IAuthService,  } from "../interfaces/services/auth-service.interface";
import { NextFunction } from "express";
import { SignInRequest, AuthenticationResponse, SignUpRequest, Request } from "../interfaces/http";
import { ApiResult } from "../../wrappers/api-result";

@injectable()
export class AuthController extends BaseController {
    constructor(
        @inject(Locator.AUTH_SERVICE) private readonly _authService: IAuthService
    ) {
        super();
    }

    signIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const request: SignInRequest = req.body;
        const result: ApiResult<AuthenticationResponse> = await this._authService.signIn(request);

        return this.handleResult(res, result)
    }

    signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const request: SignUpRequest = req.body;
        const result: ApiResult<AuthenticationResponse> = await this._authService.signUp(request);

        return this.handleResult(res, result);
    }
}