import { FilterQuery, Model, QueryOptions, UpdateQuery } from "mongoose";
import { BaseModel } from "../interfaces/contracts";
import { IRepository } from "../interfaces/reponsitories/repository.interface";

export class BaseRepository<T extends BaseModel> implements IRepository<T> {
  private readonly _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model
  }
  async create(entity: Partial<T>): Promise<T> {
    return await this._model.create(entity);
  }

  async update(id: string, entity: UpdateQuery<T>): Promise<T | null> {
    const options: QueryOptions<T> = { upsert: true, new: true };

    const result = await this._model.findByIdAndUpdate(id, entity, options);

    if (!result) {
      return null;
    }

    return result;
  }

  async delete(id: string): Promise<boolean> {
    const result = await this._model.findByIdAndDelete(id);
    return !!result;
  }
  
  async findById(id: string): Promise<T | null> {
    return await this._model.findById(id).lean()
  }
  async findFirst(filter: FilterQuery<T>): Promise<T | null> {
    return await this._model.findOne(filter).lean()
  }
}