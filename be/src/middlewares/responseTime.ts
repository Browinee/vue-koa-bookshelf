import Koa, { Context } from "koa";

export default async (ctx: Context, next: Koa.Next) => {
  const start = Date.now();
  await next()
  const ms = Date.now() - start
  ctx.set("bookshelf-api-response-time", `${ms}ms`)
};
