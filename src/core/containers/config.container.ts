import { Container } from "inversify";
import { routerContainerModule } from "../modules/router.module";
import { controllerContainerModule } from "../modules";
import { databaseContainerModule } from "../modules/database.module";
import { modelModuleContainer } from "../modules/model.module";
import { serviceContainerModule } from "../services/service.module";

const appContainer: Container = new Container()

appContainer.load(
    routerContainerModule,
    controllerContainerModule,
    databaseContainerModule,
    modelModuleContainer,
    serviceContainerModule
)
export default appContainer;