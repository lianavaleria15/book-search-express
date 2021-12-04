//export router from express
const { Router } = require("express");

//create a router
const router = Router();

//register "api" endpoint
router.use("/api", apiRoutes);

//export router
module.exports = router;
