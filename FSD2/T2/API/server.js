const express = require("express");
const app = express();

// import your npm-style API
const marvelAPI = require("marveldc-apibypsp");

// optional: global middleware
app.use(express.json());

// ✅ Clean base route
app.use("/api/movies", marvelAPI());

// ✅ Root route (nice touch for production)
app.get("/", (req, res) => {
    res.send("🎬 Movie API is running...");
});

// ❌ Handle unknown routes (important)
app.use((req, res) => {
    res.status(404).json({ error: "Route Not Found" });
});

// 🚀 Start server
const PORT = 5665;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});