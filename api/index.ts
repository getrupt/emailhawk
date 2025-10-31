import express, { json, text, urlencoded } from "express";
import cookieParser from "cookie-parser";
import startMongo from "./db/mongo";
import adminRouter from "./routes/admin";
import authRouter from "./routes/auth";
import verifyRouter from "./routes/verify";
import projectRouter from "./routes/projects";
import webhookRoutes from "./routes/webhook";
import passport from "passport";
import { passportBearerStrategy, passportApiKeyStrategy } from "./controllers/PassportController";
import cors from "cors";

startMongo();

const app = express();
const port = process.env.PORT || 8006;

app.use((req, res, next) => {
  if (
    req.originalUrl === "/webhook/stripe" ||
    req.originalUrl === "/webhook/resend"
  ) {
    next();
  } else {
    json({ limit: "20mb" })(req, res, next);
  }
});

app.use(text());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

passport.use("bearer", passportBearerStrategy);
passport.use("api_key", passportApiKeyStrategy);

app.use((req, res, next) => {
  if (req.originalUrl === "/webhook/stripe") {
    next();
  } else {
    json()(req, res, next);
  }
});

app.get("/health", (req, res) => {
  res.status(200).json({ healthy: true, environment: process.env.ENV });
});

app.use("/admin", adminRouter);
app.use("/auth", authRouter);
app.use("/verify", verifyRouter);
app.use("/projects", projectRouter);
app.use("/webhook", webhookRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
