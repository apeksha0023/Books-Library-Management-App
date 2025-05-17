import { useAuth } from "../context/AuthContext";
import axios from "axios";

const BookCard = ({ book }) => {
  const { user } = useAuth();

  const handleAdd = async () => {
    if (!user) return alert("Please login to add books");
    await axios.post(`/api/mybooks/${book._id}`);
    alert("Book added!");
  };

  return (
    <div className="border p-4 rounded shadow">
      <img src={book.coverImage} className="h-48 w-full object-cover" />
      <h3 className="text-lg font-bold mt-2">{book.title}</h3>
      <p>{book.author}</p>
      <button onClick={handleAdd} className="mt-2 bg-blue-500 px-4 py-2 text-white rounded">
        Want to Read
      </button>
    </div>
  );
};

export default BookCard;
