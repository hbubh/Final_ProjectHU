import configDotEnv from "./config";
import express, { json } from "express";
import { notFound } from "./middleware/notFound";
import { usersRouter } from "./routes/users";
import { connect } from "./database/connection";
import cors from "cors";
import { errorHandler } from "./middleware/error_handler";
import morgan from "morgan";
import { sharesRouter } from "./routes/share";

configDotEnv();
connect();
const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(json());
app.use(morgan("prod"));
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/shares", sharesRouter);
app.use(errorHandler);
app.use(notFound);

app.listen(8080);
