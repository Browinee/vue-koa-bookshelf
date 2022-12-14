import koa from "koa";
import Router from "koa-router";
import body from "koa-body";
import json from "koa-json";
import routes from "./routes";
const app = new koa();

app.use(json());
app.use(body());
app.use(routes);
app.listen(3002);
