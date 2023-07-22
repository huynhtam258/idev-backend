import { inject, injectable } from "inversify";
import { IPriceService } from '../interfaces/services/price-service.interface'
import { Price } from "../interfaces/contracts";
import { IPriceRepository } from "../interfaces/reponsitories/price-repository.interface";
import { Locator, StatusCode } from "../../constants/app.constant";
import { PriceRequest, PriceResponse } from "../interfaces/http";
import { ApiResult } from "../../wrappers";
@injectable()
export class PriceService implements IPriceService {
  constructor(
    @inject(Locator.PRICE_REPOSITORY) private readonly _repository: IPriceRepository
  ) {

  }
  repository(): IPriceRepository {
    return this._repository;
  }
  async createPrice(request: PriceRequest): Promise<ApiResult<PriceResponse | null>> {
    const price = await this.repository().create({
      price_name: request.priceName,
      fixed_price: request.fixedPrice,
      price_type: request.priceType,
      feature: request.feature
    })
    if (!price) {
      return await ApiResult.failAsync(StatusCode.BAD_REQUEST, {
        message: "Bad Request"
      })
    }
    return await ApiResult.successAsync(StatusCode.CREATED, {
      message: 'Created',
      data: price
    })
  }
}