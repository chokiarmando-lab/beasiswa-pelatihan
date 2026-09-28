const express = require("express");
const authRoutes = require("./src/routes/authRoutes");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Auth Service is running"
    });
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Auth Service running on port ${PORT}`);
});