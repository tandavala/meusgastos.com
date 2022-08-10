import { Request, Response } from "express";

export class UserController {
  static signUp(request: Request, response: Response) {
    return response.status(201).json({ ok: true });
  }
}
