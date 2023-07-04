import { ApiResult } from "../../../wrappers";

export interface IHomeService {
    getHomeData(): Promise<ApiResult<any>>
    writeHomeData(data: any): Promise<ApiResult<any>>
}