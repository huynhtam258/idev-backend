import { controller } from "inversify-express-utils";

@controller('base')
export class BaseController {
    handleResult<T>(res: Response, result: any):void {
        // res.status(200).send(res)
        console.log(res)
    }
}