import { inject, injectable } from "inversify";
import { Locator } from "../../constants/app.constant";
import { ICustomerService } from "../interfaces/services/customer-service.interface";
import { BaseController } from "./base.controller";
import { Response, NextFunction } from "express";
import { Customer } from "../interfaces/contracts";

@injectable()
export class CustomerController extends BaseController {
    constructor(
        @inject(Locator.CUSTOMER_SERVICE) private readonly _customerService: ICustomerService
    ) {
        super();
    }

    public createCustomer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const request: any = req.body
        const result = await this._customerService.createCustomer(request)
        
        return this.handleResult(res, result)
    }
}