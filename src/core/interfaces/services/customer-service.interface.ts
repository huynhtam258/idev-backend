import { ApiResult } from "../../../wrappers";
import { CustomerResponse } from "../http";

export interface ICustomerServce {
    createCustomer(): Promise<ApiResult<CustomerResponse>>
}