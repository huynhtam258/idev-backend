import { inject } from "inversify";
import { DbConfig } from "../core/interfaces/contracts";

export class MongoDb {
    private readonly _config: DbConfig;
    private readonly _connectionString: string;

}