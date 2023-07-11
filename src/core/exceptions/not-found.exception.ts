import { StatusCode } from "../../constants/app.constant";
import { ErrorParams } from "../../wrappers";
import { BaseException } from "./base.exception";

export class NotFoundException extends BaseException {
    constructor(errorParams: ErrorParams) {
        super(StatusCode.NOT_FOUND, errorParams)
    }
}