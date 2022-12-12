import vue from "@vitejs/plugin-vue";
import { defineConfig, CommonServerOptions } from "vite";
import dotenv, { DotenvParseOutput } from "dotenv";
import fs from "fs";
import path from "path";
// import { toNumber } from "@/utils/stringUtil";

export default defineConfig((mode) => {
  const envFileName: string = ".env";
  const curEnvFileName = `${envFileName}.${mode.mode}`;
  const envData = fs.readFileSync(curEnvFileName);
  const envMap: DotenvParseOutput = dotenv.parse(envData);
  console.log("envMap:", envMap);
  const server: CommonServerOptions = {
    // host: envMap.VITE_HOST,
    port: +envMap.VITE_PORT,
    ...(mode.mode === "production"
      ? {}
      : {
          proxy: {
            [envMap.VITE_BASE_URL]: {
              target: envMap.VITE_PROXY_DOMAIN,
            },
          },
        }),
  };
  return {
    plugins: [vue()],
    baseUrl: "/",
    resolve: {
      alias: {
        // 和 tsconfig.json 中 paths设置别名的区别，
        //  paths 主要用于编译期间别名的设置。
        // 而 vite.config.ts  中别名的设置主要用于
        // cnpm run build 时检测 项目中的@路径
        "@": path.resolve(__dirname, "src"),
      },
    },
    server,
  };
});
