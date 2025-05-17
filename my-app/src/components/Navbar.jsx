import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Navbar = () => {
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    await axios.get("/api/auth/logout");
    setUser(null);
  };

  return (
    <nav className="p-4 flex justify-between bg-gray-800 text-white">
      <h1 className="text-xl font-bold">My Library</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        {user && <Link to="/mybooks">My Books</Link>}
        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <span>{user.email}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
