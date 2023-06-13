import { User } from "../contracts";
import { IUserReponsitory } from "../reponsitories/user-reponsitory.interface";
import { IService } from "./sevice.interface";

export interface IUserService extends IService<IUserReponsitory> {
    createUser(request: Partial<User>): Promise<User | null>
}