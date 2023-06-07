import { Container } from "inversify";
import { routerContainerModule } from "../modules/router.module";
import { controllerContainerModule } from "../modules";
import { databaseContainerModule } from "../modules/database.module";

const appContainer: Container = new Container()

appContainer.load(
    routerContainerModule,
    controllerContainerModule,
    databaseContainerModule
)
export default appContainer;