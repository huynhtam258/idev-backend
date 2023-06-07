import { ContainerModule } from "inversify";
import { BaseController } from "../controllers/base.controller";
import { Locator } from "../../constants/app.constant";

export const controllerContainerModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaseController>(Locator.BASE_CONTROLLER).to(BaseController).inSingletonScope()
})