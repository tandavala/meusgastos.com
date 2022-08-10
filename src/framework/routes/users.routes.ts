import { Application } from "express";
import UserController from "../controllers/user.controller";

const userRouter = (app: Application) => {
  app.post("/users", UserController.signUp);

  app.get("/users/:id", UserController.show);

  app.put("/users/:id", UserController.update);

  app.delete("/users/:id", UserController.destroy);

  app.get("/users/:id/restore", UserController.restore);
};

export default userRouter;
