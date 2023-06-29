import { ApiResult } from "../../../wrappers";

export interface IHomeService {
    getHomeData(): Promise<ApiResult<any>>
}