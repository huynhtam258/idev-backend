import { Customer } from "../contracts";
import { IRepository } from "./repository.interface";

export interface ICustomerRepository extends IRepository<Customer>{
    
}