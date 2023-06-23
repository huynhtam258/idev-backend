import { inject, injectable } from "inversify";
import { ICustomerServce } from "../../interfaces/services/customer-service.interface";
import { ApiResult } from "../../../wrappers";
import { CustomerResponse } from "../../interfaces/http";
import { Locator, StatusCode } from "../../../constants/app.constant";
import { ICustomerRepository } from "../../interfaces/reponsitories";
import { Customer } from "../../interfaces/contracts";

@injectable()
export class CustomerService {
    constructor(
        @inject(Locator.CUSTOMER_REPOSITORY) readonly _repository: ICustomerRepository
    ){}
    // public async createCustomer (request: Partial<Customer>): Promise<ApiResult<CustomerResponse>> {
    //     return await ApiResult.successAsync(StatusCode.CREATED, {
    //         message: '',
    //         data: responseData
    //       });
    // }
}