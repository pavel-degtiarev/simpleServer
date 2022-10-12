import { UserLoginDto } from "../../dto/user/userLogin.dto.js";
import { UserRegisterDto } from "../../dto/user/userRegister.dto.js";
import { User } from "../../entities/user/user.entity.js";
import { IUserService } from "../../interfaces/user.service.interface.js";

export class UserService implements IUserService {
  createUser({email, name, password}: UserRegisterDto): User | null {
    return null;
  }

  validateUser(userDto: UserLoginDto): boolean {
    return true;
  }
}
