import { Model, model } from "mongoose";
import { Key } from "../interfaces/contracts";
import { DocumentName } from "../../constants";
import { keySchema } from "./schemas/key.schema";

export const KeyModel: Model<Key> = model<Key>(DocumentName.Key, keySchema);