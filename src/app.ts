import "reflect-metadata";
import { Application, NextFunction} from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import container from './core/containers/config.container';
import { Locator } from "./constants/app.constant";
import { MongoDb } from "./db";
import { middlewareConfig } from "./middlewares/config.middleware";
import { errorHandler } from "./middlewares/error-handler.middleware";
import { NotFoundResult } from "inversify-express-utils/lib/results";
import { errorHandlerNotFound } from "./middlewares/not-found.middleware";

const mongod = container.get<MongoDb>(Locator.MONGO_DB);

mongod.seedUser();

const server: InversifyExpressServer = new InversifyExpressServer(container);

server.setConfig((app: Application) => {
    // config middleware
    middlewareConfig(app)
})

server.setErrorConfig((app: Application) => {
    // Handle Route Notfound
    app.use(errorHandlerNotFound)
    
    // Handle Unhandled Error
    app.use(errorHandler)
})

export default server;