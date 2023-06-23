import { Schema } from "mongoose";
import { Customer, User } from "../../interfaces/contracts";
import { CollectionName } from "../../../constants";

export const customerSchema: Schema<Customer> = new Schema<Customer>({
  customer_name: {
    type: String,
    require: true,
    maxLength: 150
  },
  email: {
    type: String,
    require: true,
    trim: true,
    index: true,
    maxLength: 320
  },
  phone_number: {
    type: String,
    require: true
  },
  description: {
    type: String,
    trim: true
  },
  notice: {
    type: String,
    trim: true
  }
}, {
  timestamps: true,
  collection: CollectionName.Customer
})