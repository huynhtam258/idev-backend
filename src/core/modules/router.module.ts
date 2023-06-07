import { ContainerModule } from "inversify";
import { IndexRouter } from "../routers";
import { Locator } from "../../constants/app.constant";

export const routerContainerModule: ContainerModule = new ContainerModule((bind)  => {
    bind<IndexRouter>(Locator.INDEX_ROUTER).to(IndexRouter)
})