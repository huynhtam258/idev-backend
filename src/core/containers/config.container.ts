import { Container } from "inversify";
// import { } from 'module'
import { routerContainerModule } from "../modules/router.module";
import { controllerContainerModule } from "../modules";
const appContainer: Container = new Container()

appContainer.load(
    routerContainerModule,
    controllerContainerModule
)
export default appContainer;