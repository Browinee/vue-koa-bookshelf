import { Context } from "koa";
import Router from "koa-router";

const router = new Router({
  prefix: "/v1/users",
});

router.get("/:id", async (ctx: Context) => {
  ctx.status = 200;
  const { id } = ctx.params;
  ctx.body = "id: " + id;
});

export default router;
