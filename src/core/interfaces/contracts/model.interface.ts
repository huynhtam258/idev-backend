import { Document } from "mongoose";

export interface BaseModel extends Document { }

export interface User extends BaseModel {
  full_name: string;
  email: string;
  phone_number: string;
  password: string;
  avatar_id: string;
  avatar_url: string;
  gender: string;
  is_active: boolean;
}