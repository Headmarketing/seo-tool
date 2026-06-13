import express from "express";
import cors from "cors";
import Anthropic from "@anthropic-ai/sdk";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// ✅ ADD YOUR FRONTEND RENDER URL HERE
// Example: "https://seo-tool-client.onrender.com"
// If you are using a single service, you can leave the array as is
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "http://localhost:4173",
            "https://seo-tool-1-5x6c.onrender.com",  // ← your exact static site URL
            process.env.FRONTEND_URL || "",
        ],
        methods: ["GET", "POST", "OPTIONS"],
        credentials: true,
    })
);

app.use(express.json());

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// API endpoint — frontend calls this
app.post("/api/claude", async (req, res) => {
    try {
        const { messages, max_tokens = 1000 } = req.body;

        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: "messages array is required" });
        }

        const response = await client.messages.create({
            model: "claude-sonnet-4-20250514",
            max_tokens,
            messages,
        });

        res.json(response);
    } catch (err) {
        console.error("Anthropic API error:", err);
        res.status(500).json({ error: err.message });
    }
});

// Serve built frontend (only used in single-service setup)
app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("*", (_, res) => {
    const indexPath = path.join(__dirname, "../client/dist/index.html");
    res.sendFile(indexPath, (err) => {
        if (err) {
            res.status(404).json({ error: "Frontend not found. Are you using two separate services?" });
        }
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));