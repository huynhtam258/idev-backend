import "reflect-metadata";
import { Application} from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import container from './core/containers/config.container';
import { Locator } from "./constants/app.constant";
import { IndexRouter } from "./core/routers";
import { MongoDb } from "./db";
import { middlewareConfig } from "./middlewares/config.middleware";

const mongod = container.get<MongoDb>(Locator.MONGO_DB);

mongod.seedUser();

const server: InversifyExpressServer = new InversifyExpressServer(container);

server.setConfig((app: Application) => {
    // config middleware
    middlewareConfig(app)

    app.use(`/api`, container.get<IndexRouter>(Locator.INDEX_ROUTER).getRouter())
})

export default server;