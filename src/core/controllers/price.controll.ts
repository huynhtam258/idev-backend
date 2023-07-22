import { inject, injectable } from "inversify";
import { BaseController } from "./base.controller";
import { Locator } from "../../constants/app.constant";
import { IPriceService } from "../interfaces/services/price-service.interface";
import { NextFunction, Request, Response } from "express";
import { PriceRequest, PriceResponse } from "../interfaces/http";
import { ApiResult } from "../../wrappers";

@injectable()
export class PriceController extends BaseController {
    constructor(
       @inject(Locator.PRICE_SERVICE) private readonly _priceService: IPriceService 
    ) {
        super()
    }

    public createPrice = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const request: PriceRequest = req.body;
        const result: ApiResult<PriceResponse | null> = await this._priceService.createPrice(request);
        
        return this.handleResult(res, result)
    }
}