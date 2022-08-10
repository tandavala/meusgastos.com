import { Application } from "express";
import { UserController } from "../controllers/user.controller";

const userRouter = (app: Application) => {
  app.post("/users", UserController.signUp);
};

export default userRouter;
