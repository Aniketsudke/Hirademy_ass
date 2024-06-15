import mysql from "mysql2";

const connectDB = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "@niketsudke0M",
    database: "Hirademy_ass",
  })
  .promise();

export default connectDB;
