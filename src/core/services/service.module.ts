import { ContainerModule } from "inversify";
import { Locator } from "../../constants/app.constant";
import { AuthService } from "./auth/auth.service";
import { IAuthService, IKeyService, ITokenService, IUserService } from "../interfaces/services";
import { TokenService } from "./auth/token.service";
import { KeyService } from "./key.service";
import { UserService } from "./user.service";
import { ICustomerService } from "../interfaces/services/customer-service.interface";
import { CustomerService } from "./customer.service";
import { IHomeService } from "../interfaces/services/home-service.interface";
import { HomeService } from "./home.service";

export const serviceContainerModule: ContainerModule = new ContainerModule((bind) => {
    bind<IAuthService>(Locator.AUTH_SERVICE).to(AuthService).inRequestScope()
    bind<ITokenService>(Locator.TOKEN_SERVICE).to(TokenService).inRequestScope()
    bind<IKeyService>(Locator.KEY_SERVICE).to(KeyService).inRequestScope()
    bind<IUserService>(Locator.USER_SERVICE).to(UserService).inRequestScope()
    bind<ICustomerService>(Locator.CUSTOMER_SERVICE).to(CustomerService).inRequestScope()
    bind<IHomeService>(Locator.HOME_SERVICE).to(HomeService).inRequestScope()
})