import { ContainerModule } from "inversify";
import { AuthRouter, IndexRouter } from "../routers";
import { Locator } from "../../constants/app.constant";

export const routerContainerModule: ContainerModule = new ContainerModule((bind)  => {
    bind<IndexRouter>(Locator.INDEX_ROUTER).to(IndexRouter).inRequestScope()
    bind<AuthRouter>(Locator.AUTH_ROUTER).to(AuthRouter).inRequestScope()
})