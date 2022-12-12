import Router from "koa-router";
import Users from "./users";

const ROUTER = new Router();
ROUTER.use(Users.routes());
export default ROUTER.routes();
