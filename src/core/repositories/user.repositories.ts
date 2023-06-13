import { inject } from "inversify";
import { User } from "../interfaces/contracts";
import { IUserReponsitory } from "../interfaces/reponsitories/user-reponsitory.interface";
import { BaseRepository } from "./base.repositories";
import { Locator } from "../../constants/app.constant";
import { Model } from "mongoose";

export class UserRepository extends BaseRepository<User> implements IUserReponsitory {

  constructor(
    @inject(Locator.USER_MODEL) readonly userModel: Model<User>
  ) {
    super(userModel)
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.findFirst({ email });
  };
}