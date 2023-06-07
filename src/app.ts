import "reflect-metadata";
import express, { Application} from 'express';
import compression from 'compression';
import helmet from 'helmet';
import { InversifyExpressServer } from 'inversify-express-utils';
import container from './core/containers/config.container';

const server: InversifyExpressServer = new InversifyExpressServer(container);

server.setConfig((app: Application) => {
    app.use(helmet())
    // reduce data size
    app.use(compression())
    // detect body json
    app.use(express.json())
    app.use(express.urlencoded({
        extended: true
    }))
})

export default server;