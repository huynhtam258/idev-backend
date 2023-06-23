import { ApiResult } from "../../../wrappers";
import { Customer } from "../contracts";
import { CustomerResponse } from "../http";
import { ICustomerRepository } from "../reponsitories";
import { IService } from "./sevice.interface";

export interface ICustomerService extends IService<ICustomerRepository>{
    createCustomer(request: Partial<Customer>): Promise<ApiResult<CustomerResponse>>
}