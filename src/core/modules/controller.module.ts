import { ContainerModule } from "inversify";
import { BaseController } from "../controllers/base.controller";
import { Locator } from "../../constants/app.constant";
import { AuthController } from "../controllers/auth.controller";
import { CustomerController } from "../controllers/customer.controller";
import { HomeController } from "../controllers/home.controlller";
import { PriceController } from "../controllers/price.controll";

export const controllerContainerModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaseController>(Locator.BASE_CONTROLLER).to(BaseController).inSingletonScope()
    bind<AuthController>(Locator.AUTH_CONTROLLER).to(AuthController).inRequestScope()
    bind<CustomerController>(Locator.CUSTOMER_CONTROLLER).to(CustomerController).inRequestScope()
    bind<HomeController>(Locator.HOME_CONTROLLER).to(HomeController).inRequestScope()
    bind<PriceController>(Locator.PRICE_CONTROLLER).to(PriceController).inRequestScope()
})