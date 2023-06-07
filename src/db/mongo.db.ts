import { injectable } from "inversify";
import mongoose from "mongoose";
import config from './../configs/config.mongodb';

@injectable()
export class MongoDb {
    private readonly _connectionString: string;
    private _instance: boolean = false
    constructor() {
        this._connectionString = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`
        if (!this._instance) {
            this.connect()
        }
    }

    private async connect(): Promise<void> {
        mongoose.connect(this._connectionString)
            .then(_ => console.log(`Connected Mongodb success`))
            .catch(err => console.log(`Error Connect!`));
        this._instance = true
    }

}