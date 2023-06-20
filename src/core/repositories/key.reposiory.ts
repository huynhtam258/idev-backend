import { inject, injectable } from "inversify";
import { Key } from "../interfaces/contracts";
import { IKeyRepository } from "../interfaces/reponsitories/key-repository.interface";
import { BaseRepository } from "./base.repositories";
import { Locator } from "../../constants/app.constant";
import { Model } from "mongoose";

@injectable()
export class KeyRepository extends BaseRepository<Key> implements IKeyRepository{
    constructor(
        @inject(Locator.KEY_MODEL) readonly keyModel: Model<Key>
    ) {
        super(keyModel);
    }

    async findByUserId(userId: string): Promise<Key | null> {
        return await this.findFirst({ user: userId})
    }
}