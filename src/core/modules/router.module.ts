import { ContainerModule } from "inversify";
import { AuthRouter, IndexRouter } from "../routers";
import { Locator } from "../../constants/app.constant";
import { CustomerRouter } from "../routers/customer.router";

export const routerContainerModule: ContainerModule = new ContainerModule((bind)  => {
    bind<IndexRouter>(Locator.INDEX_ROUTER).to(IndexRouter).inRequestScope()
    bind<AuthRouter>(Locator.AUTH_ROUTER).to(AuthRouter).inRequestScope()
    bind<CustomerRouter>(Locator.CUSTOMER_ROUTER).to(CustomerRouter).inRequestScope()
})