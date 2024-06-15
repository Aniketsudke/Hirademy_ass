import express from "express";
import bodyParser from "body-parser";
import router from "./routes/assistantRoutes.js";
import connectDB from "./db/index.js";

const app = express();

app.use(bodyParser.json());
app.use("/api", router);

const PORT = process.env.PORT || 3000;

connectDB
  .getConnection()
  .then(() => {
    console.log("Connected to the database successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
