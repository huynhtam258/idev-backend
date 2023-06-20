import { ContainerModule } from "inversify";
import { BaseController } from "../controllers/base.controller";
import { Locator } from "../../constants/app.constant";
import { AuthController } from "../controllers/auth.controller";

export const controllerContainerModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaseController>(Locator.BASE_CONTROLLER).to(BaseController).inSingletonScope()
    bind<AuthController>(Locator.AUTH_CONTROLLER).to(AuthController).inRequestScope()
})