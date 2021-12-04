//export router from express
const { Router } = require("express");

//import api routes
const apiRoutes = require("./api");

//create a router
const router = Router();

//register "api" endpoint
router.use("/api", apiRoutes);

//export router
module.exports = router;
