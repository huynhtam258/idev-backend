import { inject, injectable } from "inversify";
import mongoose, { Model } from "mongoose";
import config from './../configs/config.mongodb';
import { Locator } from "../constants/app.constant";
import { User } from "../core/interfaces/contracts";
import { IAuthService } from "../core/interfaces/services";

@injectable()
export class MongoDb {
    private readonly _connectionString: string;
    private _instance: boolean = false
    constructor(
        @inject(Locator.USER_MODEL) private readonly _userModel: Model<User>,
        @inject(Locator.AUTH_SERVICE) private readonly _authService: IAuthService
    ) {
        this._connectionString = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`
        
        if (!this._instance) {
            this.connect()
        }
    }

    private async connect(): Promise<void> {
        
        mongoose.connect(this._connectionString)
            .then(_ => console.log(`Connected Mongodb success`))
            .catch(err => {
                console.log(`Error Connect!`)});
        this._instance = true
    }

    async seedUser(): Promise<void> {
        try {
            const countUser = await this._userModel.count()
            if (countUser > 0) {
                console.log('Skip User generation')
                return
            }

            await this._authService.signUp({
                email: "email@gmail.com",
                fullName: "admin",
                phoneNumber: "0329976180",
                password: "123456789"
            })

            console.log('User seeded!')
        } catch (error) {
            console.log(error)
        }
    }

}