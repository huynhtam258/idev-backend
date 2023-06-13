import { IRepository } from "../reponsitories"

export interface IService<TRepository> {
    repository(): TRepository
}