const router = require("express").Router();
const user = require("./userRoutes");
const thought = require("./thoughRoutes");

router.use("/users", user);
//router.use("/thoughs", thought);

module.exports = router;
