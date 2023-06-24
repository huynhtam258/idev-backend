import { Router } from "express";
import { inject, injectable } from "inversify";
import { Locator } from "../../constants/app.constant";
import { AuthController } from "../controllers/auth.controller";
import { exceptionHandler } from "../../middlewares/exception-handler.middleware";
import { CustomerController } from "../controllers/customer.controller";

@injectable()
export class CustomerRouter {
  private readonly _anonymousRouter: Router;
  private readonly _authRouter: Router;
  constructor(
    @inject(Locator.CUSTOMER_CONTROLLER) private readonly _customerController: CustomerController
  ) {
    this._anonymousRouter = Router()
    this._authRouter = Router()
  }

  private async initializeAnonymousRoutes(): Promise<void> {
    this._anonymousRouter.post('/create-customer', exceptionHandler(this._customerController.createCustomer))
  }
  public getAnonymousRouter(): Router {
    this.initializeAnonymousRoutes()
    return this._anonymousRouter;
  }

  public getAuthRouter(): Router {
    return this._authRouter;
  }
}