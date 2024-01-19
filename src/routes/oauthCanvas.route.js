const { check, validationResult } = require("express-validator");
const express = require("express");
const router = express();

const canvasController = require("../app/controller/oauthCanvas.controller");

// router.post("/launch", canvasController.launch);
// router.get("/response", canvasController.response);
// router.get("/oauth", canvasController.oauth);
// router.get("/response/oauth/redirect", canvasController.response);

// router.post("/smowl/render", canvasController.render_smowl_api);

module.exports = router;
