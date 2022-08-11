import { Request, Response } from "express";
import { SignUpCommand } from "../../@meusgastos/users/service/signUpCommand";
import { UserRepository } from "../../@meusgastos/users/infrastructure/repository/userRepository";
import { UserService } from "../../@meusgastos/users/service/user.service";

class UserController {
  async signUp(request: Request, response: Response) {
    const command = new SignUpCommand(request.body);

    try {
      const userService: UserService = new UserService(new UserRepository());

      await userService.execute(command);

      return response.status(201).json({ message: "created" });
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const userService = new UserService(new UserRepository());
    try {
      const user = await userService.find(id);
      return response.status(200).json({ user });
    } catch (error: any) {
      return response.status(404).json({ message: error.message });
    }
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const userService = new UserService(new UserRepository());
    const command = new SignUpCommand(request.body);

    try {
      await userService.update(id, command);
      return response.status(200).json({ message: "updated" });
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }

  async destroy(request: Request, response: Response) {
    const { id } = request.params;
    const userService = new UserService(new UserRepository());

    try {
      const user = await userService.softDelete(id);
      return response.status(200).json({ user });
    } catch (error: any) {
      return response.status(404).json({ message: error.message });
    }
  }

  async restore(request: Request, response: Response) {
    const { id } = request.params;
    const userService = new UserService(new UserRepository());
    try {
      const user = await userService.restore(id);
      return response.status(200).json({ user });
    } catch (error: any) {
      return response.status(404).json({ message: error.message });
    }
  }
}

export default new UserController();
