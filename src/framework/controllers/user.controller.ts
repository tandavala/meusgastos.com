import { Request, Response } from "express";
import { SignUpCommand } from "../../@meusgastos/users/domain/service/signUpCommand";
import { UserService } from "../../@meusgastos/users/domain/service/user.service";
import { UserRepository } from "../../@meusgastos/users/infrastructure/repository/userRepository";

class UserController {
  async signUp(request: Request, response: Response) {
    const command = new SignUpCommand(request.body);
    const userService: UserService = new UserService(new UserRepository());
    try {
      await userService.execute(command);
      return response.status(201).json({ message: "created" });
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export default new UserController();
