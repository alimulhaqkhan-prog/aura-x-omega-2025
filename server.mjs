import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("AURA-X backend running ✔");
});

app.get("/api/chat", (req, res) => {
  res.send("Use POST method for /api/chat");
});

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4o",
      messages
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error("LLM error:", err);
    res.status(500).json({ error: "LLM request failed" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("AURA-X backend listening on port", PORT);
});
