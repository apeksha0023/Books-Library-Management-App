import { useEffect, useState } from "react";
import axios from "axios";
import MyBookCard from "../components/MyBookCard";

const MyBooks = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = () => {
    axios.get("/api/mybooks")
      .then((res) => {
        console.log("API Response:", res.data);
        // Defensive check for the data shape
        setBooks(Array.isArray(res.data) ? res.data : res.data.books || []);
      })
      .catch((err) => {
        console.error("Error fetching my books:", err);
        setBooks([]); // Clear books on error or show fallback UI
      });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.isArray(books) && books.map((book) => (
        <MyBookCard key={book._id} book={book} refresh={fetchBooks} />
      ))}
    </div>
  );
};

export default MyBooks;
