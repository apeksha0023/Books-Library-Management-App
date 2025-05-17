const MyBook = require('../models/MyBook');

exports.getMyBooks = async (req, res) => {
  try {
    const myBooks = await MyBook.find({ userId: req.user.id }).populate('bookId');
    res.json(myBooks);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user books' });
  }
};

exports.addBook = async (req, res) => {
  const { bookId } = req.params;
  try {
    const exists = await MyBook.findOne({ userId: req.user.id, bookId });
    if (exists) return res.status(400).json({ message: 'Book already added' });

    const myBook = await MyBook.create({ userId: req.user.id, bookId });
    res.status(201).json(myBook);
  } catch (err) {
    res.status(500).json({ message: 'Error adding book' });
  }
};

exports.updateStatus = async (req, res) => {
  const { bookId } = req.params;
  const { status } = req.body;
  try {
    const updated = await MyBook.findOneAndUpdate(
      { userId: req.user.id, bookId },
      { status },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error updating status' });
  }
};

exports.updateRating = async (req, res) => {
  const { bookId } = req.params;
  const { rating } = req.body;
  try {
    const updated = await MyBook.findOneAndUpdate(
      { userId: req.user.id, bookId },
      { rating },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error updating rating' });
  }
};
