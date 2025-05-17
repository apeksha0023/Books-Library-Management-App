import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("/api/books")
      .then((res) => {
        // Normalize the data to always be an array
        const data = res.data;
        if (Array.isArray(data)) {
          setBooks(data);
        } else if (Array.isArray(data.books)) {
          setBooks(data.books);
        } else {
          setBooks([]);
          console.warn("Unexpected API response shape:", data);
        }
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
        setError("Failed to load books. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-6">Loading books...</div>;

  if (error) return <div className="p-6 text-red-600">{error}</div>;

  if (books.length === 0) return <div className="p-6">No books found.</div>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default Home;
