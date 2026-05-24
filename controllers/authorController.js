const Author = require("../models/author");

// Display list of all Authors.
exports.author_list = async (req, res, next) => {
//   res.send("NOT IMPLEMENTED: Author list");
try{
    const authors = await Author.find();   
    res.json(authors);  
}catch(err){
    next(err);  
}
};

// Display detail page for a specific Author.
exports.author_detail = async (req, res, next) => {
    try{
        const author = await Author.findById(req.params.id);
        if(!author){
            const err = new Error("Author not found");
            err.status = 404;
            return next(err);
        }
        //how to use that virtual property name
        // author.name will access the virtual property defined in the author model
        author.name = author.name; // This will trigger the virtual property to be calculated
        //Still name property is not showing in the response because we are not sending the author object as it is. We are sending a new object with only name property. So we need to send the author object as it is. 
        res.json({...author._doc, name: author.name});   
    }catch(err){
        next(err);
    }
};

// Display Author create form on GET.
exports.author_create_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author create GET");
};

// Handle Author create on POST.
exports.author_create_post = async (req, res, next) => {
  // res.send("NOT IMPLEMENTED: Author create POST");
  const author = new Author(req.body);
  try{
    const savedAuthor = await author.save();
    res.status(201).json(savedAuthor);
  }catch(err){
    next(err);
  }
};

// Display Author delete form on GET.
exports.author_delete_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author delete GET");
};

// Handle Author delete on POST.
exports.author_delete_post = async (req, res, next) => {
  // res.send("NOT IMPLEMENTED: Author delete POST");
  try{
    const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
    if(!deletedAuthor){
        const err = new Error("Author not found");
        err.status = 404;
        return next(err);
    }
    res.json(deletedAuthor);
  }catch(err){
    next(err);
  }

};

// Display Author update form on GET.
exports.author_update_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author update GET");
};

// Handle Author update on POST.
exports.author_update_post = async (req, res, next) => {
  // res.send("NOT IMPLEMENTED: Author update POST");
  try{
    const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if(!updatedAuthor){
        const err = new Error("Author not found");
        err.status = 404;
        return next(err);
    }
    res.json(updatedAuthor);
  }catch(err){
    next(err);
  }
};