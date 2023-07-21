import { Price } from "../contracts";
import { IPriceRepository } from "../reponsitories/price-repository.interface";
import { IService } from "./sevice.interface";

export interface IPriceService extends IService<IPriceRepository> {
    createPrice(request: Partial<Price>): Promise<Price | null>
}