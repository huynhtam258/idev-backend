import { Model, model } from "mongoose";
import { Price } from "../interfaces/contracts";
import { DocumentName } from "../../constants";
import { priceSchema } from "./schemas";

export const PriceModel: Model<Price> = model<Price>(DocumentName.Price, priceSchema)