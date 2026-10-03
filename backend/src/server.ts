import express from "express";

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "PathPilot AI backend is running 🚀"
  });
});

app.listen(PORT, () => {
  console.log(`PathPilot AI backend running on http://localhost:${PORT}`);
});