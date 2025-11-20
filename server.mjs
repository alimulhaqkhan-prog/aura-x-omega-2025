import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Test route – browser me open karne pe yeh text nazar aayega
app.get("/", (req, res) => {
  res.send("AURA-X Ω Backend Running ✔");
});

// Example API route (baad me front-end yahan call karega)
app.post("/react", (req, res) => {
  res.json({
    ok: true,
    msg: "Backend connected successfully",
    data: req.body || null
  });
});

app.listen(PORT, () => {
  console.log(`AURA-X backend live on port ${PORT}`);
});
