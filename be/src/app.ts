import koa from "koa";
import Router from "koa-router";
import body from "koa-body";
import json from "koa-json";
import routes from "./routes";
import { errors, responseTime } from "./middlewares";
import dotenv from "dotenv";
import cors from "koa2-cors";
import Conf from "./config/db";

dotenv.config();

const app = new koa();

app.use(errors);
app.use(json());
app.use(body());
app.use(routes);
app.use(
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PATCH", "DELETE"],
    allowHeaders: ["Content-Type", "Accept"],
    exposeHeaders: ["bookshelf-api-cache", "bookshelf-api-response-time"],
  })
);
app.use(responseTime);
export default app;
