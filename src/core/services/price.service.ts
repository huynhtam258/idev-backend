import { inject, injectable } from "inversify";
import { IPriceService } from '../interfaces/services/price-service.interface'
import { Price } from "../interfaces/contracts";
import { IPriceRepository } from "../interfaces/reponsitories/price-repository.interface";
import { Locator } from "../../constants/app.constant";
@injectable()
export class PriceService implements IPriceService {
  constructor(
    @inject(Locator.PRICE_REPOSITORY) private readonly _repository: IPriceRepository
  ) {

  }
  repository(): IPriceRepository {
    return this._repository;
  }
  async createPrice(request: Partial<Price>) {
    const price = await this.repository().create({
      price_name: request.price_name,
      fixed_price: request.fixed_price,
      feature: request.feature
    })
    if (!price) {
      return null
    }
    return price
  }
}