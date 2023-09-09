import express from "express";
import prisma from "../../prisma/prisma.js";

export const songRouter = express.Router();

//made for you
songRouter.get("/for-you", async (req, res) => {
  try {
    const randomSongs = await prisma.$queryRaw`
      SELECT * FROM "Song" ORDER BY RANDOM() LIMIT 7;
    `;

    res.json(randomSongs);
  } catch (error) {
    console.error("Error retrieving random songs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
