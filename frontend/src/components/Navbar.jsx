import { Globe, Menu, Moon, Sun } from "lucide-react";
import logo from "../assets/images.png";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  navigate("/login");
};

  return (
   <nav className="flex flex-wrap justify-between items-center p-6 gap-4">

      {/* Left */}
      <div className="flex items-center gap-2">
        <img className="w-12" src={logo} alt="Airbnb logo" />
        <h1 className="font-bold text-2xl text-[#FF385C]">
          airbnb
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

       <h2 className="hidden md:block font-medium">
        Become a host
      </h2>

        <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
          <Globe size={18} />
        </button>

        <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
          <Menu size={18} />
        </button>

        {/* Dark Mode Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {!user && (
            <Link to="/login">
              <button className="border border-gray-300 dark:border-gray-600 px-5 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                Login
              </button>
            </Link>
          )}

        <Link to="/wishlist">
          <button className="border border-gray-300 dark:border-gray-600 px-5 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            Wishlist
          </button>
        </Link>
       <button
            onClick={() => navigate("/my-bookings")}
            className="border border-gray-300 dark:border-gray-600 px-5 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            My Bookings
          </button>
           {user && (
              <span className="font-semibold">
                Hi, {user.name}
              </span>
)}
          {user && (
  <button
    onClick={handleLogout}
    className="border border-gray-300 dark:border-gray-600 px-5 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
  >
    Logout
  </button>
)}
<button
  onClick={() => navigate("/host-bookings")}
  className="border border-gray-300 px-5 py-2 rounded-full"
>
  Host Bookings
</button>
<button
  onClick={() => navigate("/host-dashboard")}
  className="border border-gray-300 px-5 py-2 rounded-full">
  Host Dashboard
</button>
<button
onClick={() => navigate("/add-property")}
className="bg-pink-500 text-white px-4 py-2 rounded"
>
+ Add Property
</button>
      </div>

    </nav>
  );
};

export default Navbar;