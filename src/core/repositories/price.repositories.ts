import { inject } from "inversify";
import { Price } from "../interfaces/contracts";
import { IPriceRepository } from "../interfaces/reponsitories/price-repository.interface";
import { BaseRepository } from "./base.repositories";
import { Locator } from "../../constants/app.constant";
import { Model } from "mongoose";

export class PriceRepository extends BaseRepository<Price> implements IPriceRepository {
    constructor(
        @inject(Locator.PRICE_MODEL) readonly priceModel: Model<Price>
    ) {
        super(priceModel)
    }
}