const route = require("express").Router();
const qrController = require("../controllers/qrController");

route.get("/health-check", (req, res) =>
  res.status(200).json({ msg: "Connected to server." })
);

route.get("/check-qrcode", qrController.checkQR);

module.exports = route;
