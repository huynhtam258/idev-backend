import { Model, model } from "mongoose";
import { User } from "../interfaces/contracts";
import { DocumentName } from "../../constants";
import { userSchema } from "./schemas";

export const UserModel: Model<User> = model<User>(DocumentName.User, userSchema);