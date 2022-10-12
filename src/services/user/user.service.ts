import { UserLoginDto } from "../../dto/user/userLogin.dto.js";
import { UserRegisterDto } from "../../dto/user/userRegister.dto.js";
import { User } from "../../entities/user/user.entity.js";
import { IUserService } from "../../interfaces/user.service.interface.js";

export class UserService implements IUserService {
  async createUser({ email, name, password }: UserRegisterDto): Promise<User | null> {
    // проверка, что пользователь существует
    // если да, возвращаем null,
    // если нет - создаем и возвращаем пользователя

    const newUser = new User(name, email);
    await newUser.setPassword(password);
    return newUser;
  }

  async validateUser(userDto: UserLoginDto): Promise<boolean> {
    return true;
  }
}
