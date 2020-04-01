const router = require("express").Router();
const DidRouts = require("./DinDer");

// Book routes
router.use(DidRouts);

module.exports = router;
