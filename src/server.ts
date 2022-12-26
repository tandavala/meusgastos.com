import "dotenv/config";
import express from "express";
import cors from "cors";
import mountRoute from "./framework/routes";

const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mountRoute(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("server up and running on port 8080"));
