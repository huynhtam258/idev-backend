import { ContainerModule } from "inversify";
import { Customer, Key, Price, User } from "../interfaces/contracts";
import { Model } from "mongoose";
import { Locator } from "../../constants/app.constant";
import { UserModel, KeyModel, CustomerModel } from "../models";
import { PriceModel } from "../models/price.model";

export const modelContainerModule: ContainerModule = new ContainerModule((bind) => {
    bind<Model<User>>(Locator.USER_MODEL).toConstantValue(UserModel),
    bind<Model<Key>>(Locator.KEY_MODEL).toConstantValue(KeyModel)
    bind<Model<Customer>>(Locator.CUSTOMER_MODEL).toConstantValue(CustomerModel)
    bind<Model<Price>>(Locator.PRICE_MODEL).toConstantValue(PriceModel)
})