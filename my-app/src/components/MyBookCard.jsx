import axios from "axios";

const MyBookCard = ({ book, refresh }) => {
  const updateStatus = async (status) => {
    await axios.patch(`/api/mybooks/${book.bookId._id}/status`, { status });
    refresh();
  };

  const updateRating = async (e) => {
    await axios.patch(`/api/mybooks/${book.bookId._id}/rating`, { rating: e.target.value });
    refresh();
  };

  return (
    <div className="border p-4 rounded shadow">
      <img src={book.bookId.coverImage} className="h-48 w-full object-cover" />
      <h3 className="text-lg font-bold mt-2">{book.bookId.title}</h3>
      <p>{book.bookId.author}</p>
      <div className="mt-2">
        <select onChange={(e) => updateStatus(e.target.value)} value={book.status}>
          <option value="Want to Read">Want to Read</option>
          <option value="Currently Reading">Currently Reading</option>
          <option value="Read">Read</option>
        </select>
        <input
          type="number"
          min="1"
          max="5"
          value={book.rating || ""}
          onChange={updateRating}
          className="ml-2 border px-2"
        />
      </div>
    </div>
  );
};

export default MyBookCard;
