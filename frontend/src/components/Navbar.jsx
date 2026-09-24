import { Globe, Menu, Moon, Sun, User } from "lucide-react";
import logo from "../assets/images.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { useContext, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user") || "null");
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setMenuOpen(false);
    navigate("/login");
  };

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* ================= LEFT - LOGO ================= */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="Airbnb"
            className="w-9 h-9 object-contain"
          />

          <span className="font-bold text-2xl text-[#FF385C]">
            airbnb
          </span>
        </Link>


        {/* ================= CENTER ================= */}
        <div className="hidden md:flex items-center gap-10">

  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive
        ? "font-semibold text-gray-900 dark:text-white border-b-2 border-black dark:border-white pb-2"
        : "font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-white transition"
    }
  >
    Homes
  </NavLink>

  <NavLink
    to="/experiences"
    className={({ isActive }) =>
      isActive
        ? "font-semibold text-gray-900 dark:text-white border-b-2 border-black dark:border-white pb-2"
        : "font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-white transition"
    }
  >
    Experiences
  </NavLink>

  <NavLink
    to="/services"
    className={({ isActive }) =>
      isActive
        ? "font-semibold text-gray-900 dark:text-white border-b-2 border-black dark:border-white pb-2"
        : "font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-white transition"
    }
  >
    Services
  </NavLink>

</div>
        {/* ================= RIGHT ================= */}
        <div className="flex items-center gap-3">

          {/* Become a host */}
          <button
            onClick={() => navigate("/add-property")}
            className="hidden lg:block px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Become a host
          </button>


          {/* Globe */}
          <button
            className="hidden sm:flex p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Globe size={19} />
          </button>


          {/* Dark mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>


          {/* ================= USER MENU ================= */}
          <div className="relative">

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-full px-3 py-2 hover:shadow-md transition bg-white dark:bg-gray-900"
            >

              <Menu size={19} />

              <div className="w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center text-white">
                <User size={16} />
              </div>

            </button>


          {/* ================= DROPDOWN ================= */}
{menuOpen && (
  <div className="absolute right-0 top-14 w-60 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 py-2 z-50">

    {/* LOGIN / SIGNUP WHEN USER IS NOT LOGGED IN */}
    {!user ? (
      <>
        <Link
          to="/signup"
          onClick={() => setMenuOpen(false)}
          className="block px-5 py-3 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Sign up
        </Link>

        <Link
          to="/login"
          onClick={() => setMenuOpen(false)}
          className="block px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Log in
        </Link>

        <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>

        <Link
          to="/wishlist"
          onClick={() => setMenuOpen(false)}
          className="block px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Wishlist
        </Link>
      </>
    ) : (
      <>
        {/* USER INFO */}
        <div className="px-5 py-3">
          <p className="font-semibold text-gray-900 dark:text-white">
            {user.name}
          </p>

          <p className="text-sm text-gray-500 truncate">
            {user.email}
          </p>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>

        {/* USER OPTIONS */}

        <Link
          to="/my-bookings"
          onClick={() => setMenuOpen(false)}
          className="block px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          My Bookings
        </Link>

        <Link
          to="/wishlist"
          onClick={() => setMenuOpen(false)}
          className="block px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Wishlist
        </Link>

        <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>

        {/* HOST OPTIONS */}

        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/add-property");
          }}
          className="w-full text-left px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Become a Host
        </button>

        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/host-dashboard");
          }}
          className="w-full text-left px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Host Dashboard
        </button>

        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/host-bookings");
          }}
          className="w-full text-left px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Host Bookings
        </button>

        <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>

        {/* LOGOUT */}

        <button
          onClick={handleLogout}
          className="w-full text-left px-5 py-3 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 transition"
        >
          Logout
        </button>
      </>
    )}
  </div>
)}
          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;