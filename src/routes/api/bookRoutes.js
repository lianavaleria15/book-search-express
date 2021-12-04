//export router from express
const { Router } = require("express");

//import functions
const {
  getBooks,
  getBooksById,
  addBook,
  updateBook,
  deleteBook,
} = require("../../controllers/api/book");
//create a router
const router = Router();

//register a get path
router.get("./", getBooks);
router.get("./:id", getBooksById);

//register a post path
router.post("./books", addBook);

//register a put path
router.put("./:id", updateBook);

//register a delete path
router.delete("./:id", deleteBook);

//export router
module.exports = router;
