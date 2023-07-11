import { NextFunction, Request, Response } from "express";
import { NotFoundException } from "../core/exceptions/not-found.exception";
import { ApiResult } from "../wrappers";

export const errorHandlerNotFound = (req: Request, res: Response, next: NextFunction) => {
    const notFound: NotFoundException = new NotFoundException({
        message: 'Not Found!',
        errors: ['Route is not defined!']
    });

    return res.status(notFound.statusCode).send(ApiResult.fail<string>(notFound.statusCode, {
        message: notFound.message,
        errors: notFound.errors
    }));
}