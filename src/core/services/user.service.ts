import { inject } from "inversify";
import { IUserRepository } from "../interfaces/reponsitories";
import { IUserService } from "../interfaces/services/user-service.interface";
import { Locator } from "../../constants/app.constant";
import { User } from "../interfaces/contracts";

export class UserService implements IUserService {
  constructor(
    @inject(Locator.USER_REPOSITORY) private readonly _repository: IUserRepository
  ) { }

  repository(): IUserRepository {
    return this._repository;
  }

  async createUser(request: Partial<User>): Promise<User | null> {
    const user = await this._repository.create({
      full_name: request.full_name,
      email: request.email,
      password: request.password,
      phone_number: request.phone_number,
      gender: request.gender,
      avatar_id: '',
      avatar_url: ''
    })

    if (!user) {
      return null
    }

    return user
  }
}