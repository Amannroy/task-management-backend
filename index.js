import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import AuthRouter from "./Routes/AuthRouter.js";
import TaskRouter from "./Routes/TaskRouter.js";
import "./Models/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

console.log("MONGO_CONN:", process.env.MONGO);
console.log("PORT:", process.env.PORT);

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use(bodyParser.json());
app.use(cors());

app.use("/auth", AuthRouter);
app.use("/tasks", TaskRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
