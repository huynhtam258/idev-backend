import { Router } from "express";
import { inject, injectable } from "inversify";
import { Locator } from "../../constants/app.constant";
import { ITokenService } from "../interfaces/services/token-service.interface";
import { AuthRouter } from "./auth.router";
import { CustomerRouter } from "./customer.router";
import { HomeRouter } from "./home.router";
import { PriceRouter } from "./price.router";

@injectable()
export class IndexRouter {
    private readonly _router: Router;

    constructor(
        @inject(Locator.TOKEN_SERVICE) private readonly _tokenService: ITokenService,
        @inject(Locator.AUTH_ROUTER) private readonly _authRouter: AuthRouter,
        @inject(Locator.CUSTOMER_ROUTER) private readonly _customerRouter: CustomerRouter,
        @inject(Locator.HOME_ROUTER) private readonly _homeRouter: HomeRouter,
        @inject(Locator.PRICE_ROUTER) private readonly _priceRouter: PriceRouter
    ) {
        this._router = Router()
        this.initializeRoutes()
    }
    
    private initializeRoutes(): void {
        this._router.use('/auth', this._authRouter.getAnonymousRouter())
        this._router.use('/customer', this._customerRouter.getAnonymousRouter())
        this._router.use('/home', this._homeRouter.getAnonymousRouter())
        this._router.use('/price', this._priceRouter.getAnonymousRouter())
    }

    public getRouter(): Router {
        return this._router
    }
}