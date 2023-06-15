import { Document, ObjectId } from "mongoose";

export interface BaseModel extends Document { }

export interface Key extends BaseModel {
  user_id: ObjectId;
  public_key: string;
  private_key: string;
  old_refresh_tokens: string[];
  access_token: string;
  refresh_token: string;
}


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