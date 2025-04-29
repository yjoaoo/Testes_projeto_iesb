const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken");

const authController = require("./controllers/authController");

router.post("/register", authController.register)
router.post("/login", authController.login)

// Google
router.get("/auth/google", passport.authenticate("google", { scope: ["email", "profile"] }));
router.get("/auth/google/callback", passport.authenticate("google", { session: false }), (req, res) => {
  const token = jwt.sign({ id: req.user.id, email: req.user.email }, process.env.JWT_SECRET, { expiresIn: "2h" });
  res.json({ token });
});

// Microsoft
router.get("/auth/microsoft", passport.authenticate("microsoft"));
router.get("/auth/microsoft/callback", passport.authenticate("microsoft", { session: false }), (req, res) => {
  const token = jwt.sign({ id: req.user.id, email: req.user.email }, process.env.JWT_SECRET, { expiresIn: "2h" });
  res.json({ token });
});

module.exports = router 