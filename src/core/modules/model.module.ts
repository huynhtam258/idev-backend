import { ContainerModule } from "inversify";
import { Customer, Key, User } from "../interfaces/contracts";
import { Model } from "mongoose";
import { Locator } from "../../constants/app.constant";
import { UserModel, KeyModel, CustomerModel } from "../models";

export const modelContainerModule: ContainerModule = new ContainerModule((bind) => {
    bind<Model<User>>(Locator.USER_MODEL).toConstantValue(UserModel),
    bind<Model<Key>>(Locator.KEY_MODEL).toConstantValue(KeyModel)
    bind<Model<Customer>>(Locator.CUSTOMER_MODEL).toConstantValue(CustomerModel)
})