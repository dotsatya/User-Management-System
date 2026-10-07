import http from "http";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { serverConfig, frontendConfig } from "./config/server.config.js";
import { dbConnect } from "./config/dbConnect.config.js";

import authRoutes from "./routes/authRoutes.js";
import getallusers from "./routes/allUsersRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

const allowedOrigins = [
  frontendConfig.frontend_url1,
  frontendConfig.frontend_url2,
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, 
  }),
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoutes);
app.use("/api/getallusers", getallusers);
app.use("/api/getuser", userRoutes);

const server = http.createServer(app);

server.listen(serverConfig.port, async () => {
  console.log(
    `Example app listening on port ${serverConfig.port}! Check it out at http://localhost:${serverConfig.port}`,
  );
  await dbConnect();
});
