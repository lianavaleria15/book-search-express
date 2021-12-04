const getBooks = (req, res) => {
  res.send("getBooks");
};
const getBooksById = (req, res) => {
  res.send("getBookById");
};
const addBook = (req, res) => {
  res.send("addBook");
};
const updateBook = (req, res) => {
  res.send("updateBook");
};
res.send("");
const deleteBook = (req, res) => {
  res.send("deleteBook");
};

//export controller fs
module.exports = { getBooks, getBooksById, addBook, updateBook, deleteBook };
