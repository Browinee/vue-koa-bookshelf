import { Sequelize } from "sequelize";
import DBConfig from "./db";
const sequelize = new Sequelize(
  DBConfig.getConf("database") as string,
  DBConfig.getConf("user") as string,
  DBConfig.getConf("password") as string,
  {
    dialect: "mysql",
    host: DBConfig.getConf("host") as string,
    port: DBConfig.getConf("port") as number,
    logging: true,
    pool: {
      min: 0,
      max: 5,
      idle: 30000,
      acquire: 60000,
    },
  }
);

export default sequelize;
