const Book = require("../models/bookModel");
const User = require("../models/userModel");
const ApiFeatures = require("../utils/apiFeature");

// Create Book Api
exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);

    res.status(201).json({
      success: true,
      book,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// getAllBook

exports.getAllBook = async (req, res) => {
  console.log(req, "=================== ");
  try {
    // const books = await Book.find()
    // const user = await User.findById(req.user._id)
    // const keyword = req.query.search ? {
    //     $or: [
    //         { bookCategory: { $regex: req.query.search, $options: "i" } },
    //         { author: { $regex: req.query.search, options: "i" } },
    //     ]
    // } : {}

    const books = await Book.find({
      $or: [
        { author: { $regex: req.params.key } },
        { bookCategory: { $regex: req.params.key } },
        { status: { $regex: req.params.key } },
      ],
    });

    // const books = await Book.find({keyword)
    console.log("hello world");
    console.log(books, "=========");

    // const readingStatus = books.filter((book) => book.status === "reading")

    // const finishReading = books.filter((book) => book.status === "finishReading")

    for (let i = 0; i < books.length; i++) {
      if (books[i].status === "reading") {
        books[i].status = "You are Currently this book";
      } else if (books[i].status === "finish") {
        books[i].status = "You finished reading this book";
      }
    }

    if (!books) {
      return res.status(500).json("Book not found");
    }

    res.status(200).json({
      success: true,
      books,
      // filter: {
      //     reading: readingStatus.length,
      //     finsh: finishReading.length,
      // }
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    // const apiFeature = new ApiFeatures(Book.find(), req.query).search()
    const apiFeature = new ApiFeatures(Book.find(), req.query).searchByAuthor().searchByCategory().searchByStatus();

    let books = await apiFeature.query;


    res.status(200).json({
      success: true,
      books,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// getSingleBook Details

exports.getSingleBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(500).json("Book not found");
    }

    res.status(200).json({
      success: true,
      book,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// update api

exports.updateBook = async (req, res) => {
  try {
    let book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(500).json("Book not found");
    }

    book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      book,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// saved book

exports.savedPost = async (req, res) => {
  try {
    const user = await User.find({
      _id: req.user._id,
      saved: req.params.id,
    });

    if (user.length > 0) {
      return res.status(500).json("Yoh have already save this book");
    }

    const save = await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $push: { saved: req.params.id },
      },
      {
        new: true,
      }
    );

    if (!save) {
      return res.status(500).json("Users does not exist");
    }

    res.status(200).json({
      success: true,
      message: "book saved SuccessFully",
      save,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//unsaved book

exports.unSavedPost = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      {
        _id: req.user._id,
      },
      {
        $pull: { saved: req.params.id },
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "book removed successfully",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
