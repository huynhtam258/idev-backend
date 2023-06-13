import { FilterQuery, Model } from "mongoose";
import { BaseModel } from "../interfaces/contracts";
import { IRepository } from "../interfaces/reponsitories/repository.interface";

export class BaseRepository<T extends BaseModel> implements IRepository<T> {
  private readonly _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model
  }
  async findById(id: string): Promise<T | null> {
    return await this._model.findById(id).lean()
  }
  async findFirst(filter: FilterQuery<T>): Promise<T | null> {
    return await this._model.findOne(filter).lean()
  }
}