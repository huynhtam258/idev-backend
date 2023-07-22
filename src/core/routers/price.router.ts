import { Router } from "express";
import { inject, injectable } from "inversify";
import { Locator } from "../../constants/app.constant";
import { PriceController } from "../controllers/price.controller";
import { exceptionHandler } from "../../middlewares/exception-handler.middleware";

@injectable()
export class PriceRouter {
  private readonly _anonymousRouter: Router;

  constructor(
    @inject(Locator.PRICE_CONTROLLER) readonly _priceController: PriceController
  ) {
    this._anonymousRouter = Router()
  }

  private async initializeAnonymousRoutes(): Promise<void> {
    this._anonymousRouter.post('/', exceptionHandler(this._priceController.createPrice))
  }

  public getAnonymousRouter(): Router {
    this.initializeAnonymousRoutes()
    return this._anonymousRouter;
  }
}