const Book = require("../models/book");

exports.index = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
};

// Display list of all books.
exports.book_list = async (req, res, next) => {
  // res.send("NOT IMPLEMENTED: Book list");
  const books = await Book.find().populate("author").populate("genre").exec();
  if(books.length === 0){
    res.status(404).json({ message: "No books found" });
  }else{
    res.json(books);
  }
};

// Display detail page for a specific book.
exports.book_detail = async (req, res, next) => {
  // res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`);
  const book = await Book.findById(req.params.id);
  if(!book){
    res.status(404).json({messsage: "No book found"});
  }else{
    res.json(book);
  }
};

// Display book create form on GET.
exports.book_create_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book create GET");
};

// Handle book create on POST.
exports.book_create_post = async (req, res, next) => {
  // res.send("NOT IMPLEMENTED: Book create POST");
  try{
    const book = await Book.create(req.body);
    res.status(201).json(book);
  }catch(err){
    next(err);
  }
};

// Display book delete form on GET.
exports.book_delete_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book delete GET");
};

// Handle book delete on POST.
exports.book_delete_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book delete POST");
};

// Display book update form on GET.
exports.book_update_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book update GET");
};

// Handle book update on POST.
exports.book_update_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book update POST");
};