import { Logger } from "../logs/logger";
import { initDBUsers, initDBShares } from "./initDB";
import mongoose from "mongoose";
import { User } from "./model/user";
const connect = async () => {
  try {
    //read the connection string from dotenv file:
    const connectionString = process.env.DB_CONNECTION_STRING;

    if (!connectionString) {
      Logger.error("DB_CONNECTION_STRING IS NOT DEFINED IN your .env file");
      return;
    }

    //connect to the database:
    await mongoose.connect(connectionString);
    Logger.debug("Database Connected");
    //init the database:
    await initDBUsers();
    const userHolder = await User.findOne();
    await initDBShares(userHolder._id);
  } catch (err) {
    Logger.error("Cant Connect to database", err);
  }
};

export { connect };
