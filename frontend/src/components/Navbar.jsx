import { Globe, Menu, Moon, Sun, User } from "lucide-react";
import logo from "../assets/images.png";
import { Link, useNavigate } from "react-router-dom";
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

          <Link
            to="/"
            className="font-semibold text-gray-900 dark:text-white hover:text-[#FF385C] transition"
          >
            Homes
          </Link>

          <span className="text-gray-500 cursor-pointer hover:text-gray-900 dark:hover:text-white transition">
            Experiences
          </span>

          <span className="text-gray-500 cursor-pointer hover:text-gray-900 dark:hover:text-white transition">
            Services
          </span>

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
              <div className="absolute right-0 top-14 w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl py-2 z-50">

                {/* User */}
                {user && (
                  <div className="px-5 py-3 border-b border-gray-200 dark:border-gray-700">

                    <p className="font-semibold">
                      {user.name}
                    </p>

                    <p className="text-sm text-gray-500 truncate">
                      {user.email}
                    </p>

                  </div>
                )}


                {/* Login */}
                {!user && (
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="block px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
                  >
                    Login
                  </Link>
                )}


                {/* Wishlist */}
                <Link
                  to="/wishlist"
                  onClick={() => setMenuOpen(false)}
                  className="block px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Wishlist
                </Link>


                {/* My bookings */}
                {user && (
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      navigate("/my-bookings");
                    }}
                    className="w-full text-left px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    My Bookings
                  </button>
                )}


                {/* Host section */}
                {user && (
                  <>
                    <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>

                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        navigate("/host-dashboard");
                      }}
                      className="w-full text-left px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Host Dashboard
                    </button>

                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        navigate("/host-bookings");
                      }}
                      className="w-full text-left px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Host Bookings
                    </button>

                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        navigate("/add-property");
                      }}
                      className="w-full text-left px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Add Property
                    </button>
                  </>
                )}


                {/* Logout */}
                {user && (
                  <>
                    <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-red-500"
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