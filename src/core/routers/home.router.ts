import { Router } from "express";
import { inject, injectable } from "inversify";
import { Locator } from "../../constants/app.constant";
import { HomeController } from "../controllers/home.controlller";
import { exceptionHandler } from "../../middlewares/exception-handler.middleware";

@injectable()
export class HomeRouter {
    private readonly _homeRouter: Router;
    constructor(
        @inject(Locator.HOME_CONTROLLER) private readonly _homeController: HomeController
    ) {
        this._homeRouter = Router()
    }

    private async initializeAnonymousRoutes(): Promise<void> {
        this._homeRouter.get('/', exceptionHandler(this._homeController.getHomeData))
      }
      public getAnonymousRouter(): Router {
        this.initializeAnonymousRoutes()
        return this._homeRouter;
      }

    public getHomeRouter(): Router {
        return this._homeRouter;
    }
}