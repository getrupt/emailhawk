import express from "express";
import startMongo from "./db/mongo";
import adminRouter from "./routes/admin";

const app = express();
const port = process.env.PORT || 8006;

startMongo();

app.use("/admin", adminRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
