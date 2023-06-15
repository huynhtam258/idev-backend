import { FilterQuery, UpdateQuery } from "mongoose";

export interface IRepository<T> {
    findById(id: string): Promise<T | null>;

    findFirst(filter: FilterQuery<T>): Promise<T | null>

    create(entity: Partial<T>): Promise<T | null>

    update(id: string, entity: UpdateQuery<T>): Promise<T | null>

    delete(id: string): Promise<boolean>
}