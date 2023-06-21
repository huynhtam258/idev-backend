import cors from 'cors'
import helmet from "helmet"
import compression from 'compression';
import express, { Application } from 'express'
import { corsOption } from './cors.middleware';
import { Locator } from '../constants/app.constant';
import { IndexRouter } from '../core/routers';
import container from './../core/containers/config.container';

export const middlewareConfig = (app: Application) => {

    // security http
    app.use(helmet())

    // reduce data size
    app.use(compression())

    // detect body json
    app.use(express.json())
    
    app.use(express.urlencoded({
        extended: true
    }))

    // config cors
    app.use(cors(corsOption))

    // config route api 
    app.use(`/api`, container.get<IndexRouter>(Locator.INDEX_ROUTER).getRouter())
}