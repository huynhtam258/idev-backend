import { Model, model } from "mongoose";
import { Customer } from "../interfaces/contracts";
import { DocumentName } from "../../constants";
import { customerSchema } from "./schemas/customer.schema";

export const CustomerModel: Model<Customer> = model<Customer>(DocumentName.Customer, customerSchema);