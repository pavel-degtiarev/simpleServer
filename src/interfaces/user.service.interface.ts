import { UserLoginDto } from "../dto/user/userLogin.dto.js";
import { UserRegisterDto } from "../dto/user/userRegister.dto.js";
import { User } from "../entities/user/user.entity.js";

export interface IUserService {
  createUser: (userDto: UserRegisterDto) => User | null;
  validateUser: (userDto: UserLoginDto) => boolean;
}
