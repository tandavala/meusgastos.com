import { Application } from "express";
import userRouter from "./users.routes";

const mountRoute = (app: Application) => {
  userRouter(app);
};

export default mountRoute;
