const express = require("express");
const router = express.Router();
const oauthCanvasRoutes = require("./oauthCanvas.route");

// health check
router.use("/health", (req, res) => {
  res.send("boilerplate-bff");
});

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// router.use("/api/smowl", [smowlClientRoutes, smowlAuthRoutes]);

module.exports = router;
