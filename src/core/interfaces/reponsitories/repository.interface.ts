import { FilterQuery } from "mongoose";

export interface IRepository<T> {
    findById(id: string): Promise<T | null>;
    findFirst(filter: FilterQuery<T>): Promise<T | null>
}