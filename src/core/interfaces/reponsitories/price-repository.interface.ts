import { ApiResult } from "../../../wrappers";
import { Price } from "../contracts";
import { PriceRequest, PriceResponse } from "../http";
import { IRepository } from "./repository.interface";

export interface IPriceRepository extends IRepository<Price> {
    
}