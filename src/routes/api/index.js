//export router from express
const { Router } = require("express");

//create a router
const router = Router();

//register "api" endpoint to get books
router.use("/books", bookRoutes);

//export router
module.exports = router;
