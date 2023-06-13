import { ContainerModule } from "inversify";
import { User } from "../interfaces/contracts";
import { Model } from "mongoose";
import { Locator } from "../../constants/app.constant";
import { UserModel } from "../models";

export const modelModuleContainer: ContainerModule = new ContainerModule((bind) => {
    bind<Model<User>>(Locator.USER_MODEL).toConstantValue(UserModel)
})