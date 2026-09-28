const express = require("express");

const {
    health,
    register,
    login,
} = require("../controllers/authController");

const requireAuth = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/health", health);

router.post("/register", register);

router.post("/login", login);

router.get("/profile", requireAuth, (req, res) => {
    res.json({
        message: "Access granted",
        user: req.user
    });
});


module.exports = router;