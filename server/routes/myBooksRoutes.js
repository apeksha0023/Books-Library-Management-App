const express = require('express');
const {
  getMyBooks,
  addBook,
  updateStatus,
  updateRating
} = require('../controllers/myBooksController');
const protect = require('../middlewares/authMiddleware');
const router = express.Router();

router.use(protect);
router.get('/', getMyBooks);
router.post('/:bookId', addBook);
router.patch('/:bookId/status', updateStatus);
router.patch('/:bookId/rating', updateRating);

module.exports = router;
