const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('../models/Book');
const booksData = require('../data/books.json');

dotenv.config();
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Book.deleteMany();
    await Book.insertMany(booksData.books);
    console.log('Database seeded!');
    process.exit();
  })
  .catch(err => console.error(err));
