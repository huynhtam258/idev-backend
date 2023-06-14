import { User } from "../contracts";
import { IUserReponsitory } from "../reponsitories/user-repository.interface";
import { IService } from "./sevice.interface";

export interface IUserService extends IService<IUserReponsitory> {
    createUser(request: Partial<User>): Promise<User | null>
}