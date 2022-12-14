import Router from "koa-router";
import { Users } from "./users";

const router = new Router({
  prefix: "/api",
});
router.use(Users.routes());
export default router;
