import { StatusCode } from "../../constants/app.constant";
import { ErrorParams } from "../../wrappers/api-result";
import { BaseException } from "./base.exception";

export class ConflictDataException extends BaseException {
    constructor(errorParams: ErrorParams) {
        super(StatusCode.CONFLICT, errorParams)
    }
}