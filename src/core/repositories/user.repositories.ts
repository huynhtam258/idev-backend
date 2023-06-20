import { inject, injectable } from "inversify";
import { User } from "../interfaces/contracts";
import { IUserRepository } from "../interfaces/reponsitories/user-repository.interface";
import { BaseRepository } from "./base.repositories";
import { Locator } from "../../constants/app.constant";
import { Model } from "mongoose";

@injectable()
export class UserRepository extends BaseRepository<User> implements IUserRepository {

  constructor(
    @inject(Locator.USER_MODEL) readonly userModel: Model<User>
  ) {
    super(userModel)
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.findFirst({ email });
  };
}