import cors from 'cors'
import helmet from "helmet"
import compression from 'compression';
import express, { Application } from 'express'
import { corsOption } from './cors.middleware';

export const middlewareConfig = (app: Application) => {
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
}