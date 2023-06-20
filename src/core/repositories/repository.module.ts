import { ContainerModule } from "inversify";
import { IKeyRepository } from "../interfaces/reponsitories/key-repository.interface";
import { Locator } from "../../constants/app.constant";
import { KeyRepository } from "./key.reposiory";
import { IUserRepository } from "../interfaces/reponsitories";
import { UserRepository } from "./user.repositories";

export const repositoryContainerModule: ContainerModule = new ContainerModule((bind) => {
    bind<IKeyRepository>(Locator.KEY_REPOSITORY).to(KeyRepository).inSingletonScope()
    bind<IUserRepository>(Locator.USER_REPOSITORY).to(UserRepository).inRequestScope()
})