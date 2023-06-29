import { inject, injectable } from "inversify";
import { Locator } from "../../constants/app.constant";
import { HomeService } from "../services/home.service";
import { Request, Response } from "express";
import { ApiResult } from "../../wrappers";
import { BaseController } from "./base.controller";

@injectable()
export class HomeController extends BaseController {
    constructor(
        @inject(Locator.HOME_SERVICE) private readonly _homeService: HomeService
    ) {
        super()
    }

    getHomeData = async (req: Request, res: Response, next: Function): Promise<void> =>{
        const result: ApiResult<any> = await this._homeService.getHomeData();

        return this.handleResult(res, result)
    }
}