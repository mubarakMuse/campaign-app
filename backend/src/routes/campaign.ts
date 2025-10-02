import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// POST /campaigns
router.post("/", async (req, res) => {
  const { title, description, budget } = req.body;
  try {
    const campaign = await prisma.campaign.create({
      data: { title, description, budget: Number(budget) },
    });
    res.json(campaign);
  } catch (error) {
    res.status(500).json({ error: "Failed to create campaign" });
  }
});

// GET /campaigns
router.get("/", async (_req, res) => {
  try {
    const campaigns = await prisma.campaign.findMany({
      orderBy: { created_at: "desc" }
    });
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch campaigns" });
  }
});

export default router;
