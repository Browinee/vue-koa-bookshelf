import { User } from "../../../model";
import { UserInfo } from "../../../model/users";
import { Context } from "koa";
import Router from "koa-router";

// NOTE: add version info
const router = new Router({
  prefix: "/v1/users",
});

router.get("/", async (ctx) => {
  try {
    ctx.status = 200;
    ctx.body = "123123";
  } catch (error) {}
});

router.get("/:id", async (ctx) => {
  ctx.body = "test";
  ctx.status = 200;
});

router.post("/", async (ctx) => {
  try {
    const userInfo = ctx.request.body;
    console.log("userINfo", ctx.request.body);

    const result = await User.create(userInfo);
    console.log("result", result);

    ctx.status = 201;
  } catch (error: any) {
    console.log("error", error);

    // ctx.throw(400, error.message);
  }
});
router.post("/query", async (ctx) => {
  try {
    ctx.status = 200;
    ctx.body = "query";
  } catch (error) {}
});
// // Update a user
router.patch("/:id", async (ctx) => {
  try {
    ctx.status = 200;
  } catch (error) {}
});

router.delete("/:id", async (ctx) => {
  try {
    ctx.status = 200;
  } catch (error) {}
});
export default router;
