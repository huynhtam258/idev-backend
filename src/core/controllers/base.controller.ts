import { controller } from "inversify-express-utils";
import { ApiResult } from "../../wrappers/api-result";

@controller('base')
export class BaseController {
    handleResult<T>(res: Response, result: ApiResult<T>):void {
        // res.status(200).send(res)
        console.log(res)
    }
}