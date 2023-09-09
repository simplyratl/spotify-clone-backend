import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { songRouter } from "./song/song.router.js";

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/song", songRouter);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Listening on localhost http://localhost:${PORT}`);
});
