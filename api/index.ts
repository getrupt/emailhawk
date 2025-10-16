import express from "express";
import startMongo from "./db/mongo";
import adminRouter from "./routes/admin";
import authRouter from "./routes/auth";
import passport from "passport";
import { passportBearerStrategy, passportApiKeyStrategy } from "./controllers/PassportController";

const app = express();
const port = process.env.PORT || 8006;

startMongo();

passport.use("bearer", passportBearerStrategy);
passport.use("api_key", passportApiKeyStrategy);

app.use("/admin", adminRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
