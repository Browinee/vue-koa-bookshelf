import Koa, { Context } from "koa";

export default async (ctx: Context, next: Koa.Next) => {
  try {
    await next();
  } catch (error: unknown) {
    if (error instanceof Error) {
      ctx.status = 500;
      ctx.body = error.message;
    }
  }
};
