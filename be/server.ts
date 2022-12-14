import dotenv from "dotenv";
import http from "http";
import app from "./src/app";

const PORT = process.env.PORT || 3003;
const SERVER = http.createServer(app.callback());

const gracefulShutdown = (msg: any) => {
  SERVER.close(() => {
    process.exit();
  });
};

SERVER.listen(PORT, () => {
  // Handle kill commands
  process.on("SIGTERM", gracefulShutdown);

  // Handle interrupts
  process.on("SIGINT", gracefulShutdown);

  // Prevent dirty exit on uncaught exceptions:
  process.on("uncaughtException", gracefulShutdown);

  // Prevent dirty exit on unhandled promise rejection
  process.on("unhandledRejection", gracefulShutdown);
});
