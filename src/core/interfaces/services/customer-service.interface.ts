import { ApiResult } from "../../../wrappers";
import { CustomerRequest, CustomerResponse } from "../http";
import { ICustomerRepository } from "../reponsitories";
import { IService } from "./sevice.interface";

export interface ICustomerService extends IService<ICustomerRepository>{
    createCustomer(request: CustomerRequest): Promise<ApiResult<CustomerResponse>>
}