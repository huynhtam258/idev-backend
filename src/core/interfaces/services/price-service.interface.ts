import { ApiResult } from "../../../wrappers";
import { Price } from "../contracts";
import { PriceRequest, PriceResponse } from "../http";
import { IPriceRepository } from "../reponsitories/price-repository.interface";
import { IService } from "./sevice.interface";

export interface IPriceService extends IService<IPriceRepository> {
    createPrice(request: PriceRequest): Promise<ApiResult<PriceResponse | null>>
}