import { STATES } from "mongoose";
import { ApiResult } from "../../wrappers";
import { StatusCode } from "../../constants/app.constant";
import * as fs from 'fs';
import { injectable } from "inversify";
import { IHomeService } from "../interfaces/services/home-service.interface";

@injectable()
export class HomeService implements IHomeService{
    public async getHomeData(): Promise<ApiResult<any>> {
        const dataJson = fs.readFileSync('src/store/home.json', 'utf-8')
        
        return ApiResult.successAsync(StatusCode.OK, {
            message: "Get home success",
            data: JSON.parse(dataJson)
        })
    }
}