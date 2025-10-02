import express from "express";
import cors from "cors";
import campaignRoutes from "./routes/campaign";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/campaigns", campaignRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
