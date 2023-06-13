import { User } from "../contracts";

export interface IUserReponsitory {
  findByEmail(email: string): Promise<User | null>
}