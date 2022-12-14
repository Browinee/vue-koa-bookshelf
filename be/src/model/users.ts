import sequelize from "../config/connect";
import { DataTypes } from "sequelize";

export interface UserInfo {
  username: string;
  password: string;
  address?: string;
  valid?: number;
}
const User = sequelize.define(
  "user",
  {
    userId: {
      type: DataTypes.INTEGER,
      field: "userId",
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    valid: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
  },
  {}
);

User.sync({ force: false });

export default User;
