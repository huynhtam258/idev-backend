import { Router } from "express";
import { inject } from "inversify";
import { Locator } from "../../constants/app.constant";
import { AuthController } from "../controllers/auth.controller";
import { exceptionHandler } from "../../middlewares/exception-handler.middleware";

export class AuthRouter {
  private readonly _anonymousRouter: Router;
  private readonly _authRouter: Router;
  constructor(
    @inject(Locator.AUTH_CONTROLLER) private readonly _authController: AuthController
  ) {
    this._anonymousRouter = Router()
    this._authRouter = Router()
  }

  private async initializeAnonymousRoutes(): Promise<void> {
    this._anonymousRouter.post('/sign-in', exceptionHandler(this._authController.signIn)),
      this._anonymousRouter.post('/sign-up', exceptionHandler(this._authController.signUp))
  }
  public getAnonymousRouter(): Router {
    this.initializeAnonymousRoutes()
    return this._anonymousRouter;
  }

  public getAuthRouter(): Router {
    return this._authRouter;
  }
}