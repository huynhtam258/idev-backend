import { inject, injectable } from "inversify";
import { BaseRepository } from "./base.repositories";
import { Customer } from "../interfaces/contracts";

import { ICustomerRepository } from "../interfaces/reponsitories/customer-repository.interface";
import { Locator } from "../../constants/app.constant";
import { CustomerModel } from "../models";
import { Model } from "mongoose";

@injectable()
export class CustomerRepository extends BaseRepository<Customer> implements ICustomerRepository {
    constructor(
        @inject(Locator.CUSTOMER_MODEL) readonly customerModel: Model<Customer>
    ) {
        super(CustomerModel)
    }
}