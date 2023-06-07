import { Router } from "express";
import { inject, injectable } from "inversify";
import { Locator } from "../../constants/app.constant";
import { ITokenService } from "../interfaces/services/token-service.interface";

@injectable()
export class IndexRouter {
    private readonly _router: Router;

    constructor(
        @inject(Locator.TOKEN_SERVICE) private readonly _tokenService: ITokenService
    ) {
        this._router = Router()
        this.initializeRoutes()
    }
    
    private initializeRoutes(): void {
        this._router.use('/auth',)
    }

    public getRouter(): Router {
        return this._router
    }
}