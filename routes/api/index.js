const router = require("express").Router();
const DidRouts = require("./DinDer");

// Book routes
router.use("/dinder", DidRouts);

module.exports = router;
