import { Router } from "express";
import { inject, injectable } from "inversify";
import { Locator } from "../../constants/app.constant";
import { ITokenService } from "../interfaces/services/token-service.interface";
import { AuthRouter } from "./auth.router";

@injectable()
export class IndexRouter {
    private readonly _router: Router;

    constructor(
        @inject(Locator.TOKEN_SERVICE) private readonly _tokenService: ITokenService,
        @inject(Locator.AUTH_ROUTER) private readonly _authRouter: AuthRouter
    ) {
        this._router = Router()
        this.initializeRoutes()
    }
    
    private initializeRoutes(): void {
        this._router.use('/auth', this._authRouter.getAnonymousRouter())
    }

    public getRouter(): Router {
        return this._router
    }
}