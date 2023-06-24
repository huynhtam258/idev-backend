import { inject, injectable } from "inversify";
import { ICustomerService } from "../interfaces/services/customer-service.interface";
import { ApiResult } from "../../wrappers";
import { CustomerRequest, CustomerResponse } from "../interfaces/http";
import { Locator, StatusCode } from "../../constants/app.constant";
import { ICustomerRepository } from "../interfaces/reponsitories";
// import { Customer } from "../interfaces/contracts";
import { ServerException } from "../exceptions/server.exception";

@injectable()
export class CustomerService implements ICustomerService {
    constructor(
        @inject(Locator.CUSTOMER_REPOSITORY) readonly _repository: ICustomerRepository
    ) { }
    
    repository(): ICustomerRepository {
        return this._repository
    }

    public async createCustomer(request: CustomerRequest): Promise<ApiResult<CustomerResponse>> {
        const customer = await this._repository.create({
            customer_name: request.customerName,
            email: request.email,
            phone_number: request.phoneNumber,
            description: request.description,
            notice: request.notice
        })

        if (!customer) {
            throw new ServerException({
                message: 'Failed to register new account.'
            });
        }

        return await ApiResult.successAsync(StatusCode.CREATED, {
            message: 'Create Customer Success',
            data: customer 
        });
    }

    public async getCustomerById(customerId: string): Promise<ApiResult<CustomerResponse>> {
        const customer = await this._repository.findById(customerId)

        return await ApiResult.successAsync(StatusCode.OK, {
            message: "Get Customer Success",
            data: customer
        })
    }
}