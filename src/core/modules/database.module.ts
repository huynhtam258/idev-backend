import { ContainerModule } from "inversify";
import { MongoDb } from "../../db";
import { Locator } from "../../constants/app.constant";

export const databaseContainerModule: ContainerModule = new ContainerModule((bind) => {
    bind<MongoDb>(Locator.MONGO_DB).to(MongoDb).inSingletonScope()
})