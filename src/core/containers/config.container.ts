import { Container } from "inversify";
import { routerContainerModule } from "../modules/router.module";
import { controllerContainerModule } from "../modules";
import { databaseContainerModule } from "../modules/database.module";
import { modelModuleContainer } from "../modules/model.module";

const appContainer: Container = new Container()

appContainer.load(
    routerContainerModule,
    controllerContainerModule,
    databaseContainerModule,
    modelModuleContainer,
)
export default appContainer;