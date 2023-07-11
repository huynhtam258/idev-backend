import { ErrorRequestHandler } from "express";
import { ApiResult } from "../wrappers";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).send(ApiResult.fail<string>(statusCode, {
        message: err.message || 'Oops, An unhandled error has occurred!',
        errors: err.errors || ['Internal Server Error']
    }))
}