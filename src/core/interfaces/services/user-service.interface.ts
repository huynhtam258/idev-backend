import { User } from "../contracts";
import { IUserRepository } from "../reponsitories/user-repository.interface";
import { IService } from "./sevice.interface";

export interface IUserService extends IService<IUserRepository> {
    createUser(request: Partial<User>): Promise<User | null>
}