import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-6 md:px-10 py-10">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* SUPPORT */}
        <div>
          <h3 className="font-bold mb-4">Support</h3>

          <ul className="space-y-3 text-gray-600 dark:text-gray-300">

            <li>
              <Link
                to="/help"
                className="hover:underline hover:text-black dark:hover:text-white transition"
              >
                Help Center
              </Link>
            </li>

            <li>
              <Link
                to="/safety"
                className="hover:underline hover:text-black dark:hover:text-white transition"
              >
                Safety Information
              </Link>
            </li>

            <li>
              <Link
                to="/cancellation"
                className="hover:underline hover:text-black dark:hover:text-white transition"
              >
                Cancellation Options
              </Link>
            </li>

          </ul>
        </div>


        {/* HOSTING */}
        <div>
          <h3 className="font-bold mb-4">Hosting</h3>

          <ul className="space-y-3 text-gray-600 dark:text-gray-300">

            <li>
              <Link
                to="/host"
                className="hover:underline hover:text-black dark:hover:text-white transition"
              >
                Become a Host
              </Link>
            </li>

            <li>
              <Link
                to="/host-resources"
                className="hover:underline hover:text-black dark:hover:text-white transition"
              >
                Host Resources
              </Link>
            </li>

            <li>
              <Link
                to="/community"
                className="hover:underline hover:text-black dark:hover:text-white transition"
              >
                Community Forum
              </Link>
            </li>

          </ul>
        </div>


        {/* AIRBNB CLONE */}
        <div>
          <h3 className="font-bold mb-4">Airbnb Clone</h3>

          <ul className="space-y-3 text-gray-600 dark:text-gray-300">

            <li>
              <Link
                to="/about"
                className="hover:underline hover:text-black dark:hover:text-white transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/careers"
                className="hover:underline hover:text-black dark:hover:text-white transition"
              >
                Careers
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:underline hover:text-black dark:hover:text-white transition"
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>


        {/* SOCIAL MEDIA */}
        <div>
          <h3 className="font-bold mb-4">Follow Us</h3>

          <div className="flex gap-5">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="cursor-pointer hover:text-blue-600 text-xl transition" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="cursor-pointer hover:text-pink-500 text-xl transition" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="cursor-pointer hover:text-sky-500 text-xl transition" />
            </a>

          </div>
        </div>

      </div>


      {/* DIVIDER */}
      <hr className="my-8 border-gray-300 dark:border-gray-700" />


      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center text-gray-500 dark:text-gray-400 text-sm">

        <p>
          © 2026 Airbnb Clone. All rights reserved.
        </p>

        <div className="flex gap-6">

          <Link
            to="/privacy"
            className="hover:underline hover:text-black dark:hover:text-white transition"
          >
            Privacy
          </Link>

          <Link
            to="/terms"
            className="hover:underline hover:text-black dark:hover:text-white transition"
          >
            Terms
          </Link>

          <Link
            to="/sitemap"
            className="hover:underline hover:text-black dark:hover:text-white transition"
          >
            Sitemap
          </Link>

        </div>

      </div>

    </footer>
  );
};

export default Footer;