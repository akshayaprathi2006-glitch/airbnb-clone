import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-8 py-10">

      <div className="grid grid-cols-4 gap-10">

        <div>
          <h3 className="font-bold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>Help Center</li>
            <li>Safety Information</li>
            <li>Cancellation Options</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Hosting</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>Become a Host</li>
            <li>Host Resources</li>
            <li>Community Forum</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Airbnb Clone</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Follow Us</h3>

          <div className="flex gap-4">
           <FaFacebook className="cursor-pointer hover:text-blue-600 text-xl" />
            <FaInstagram className="cursor-pointer hover:text-pink-500 text-xl" />
            <FaTwitter className="cursor-pointer hover:text-sky-500 text-xl" />
          </div>
        </div>

      </div>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">

        <p>© 2026 Airbnb Clone. All rights reserved.</p>

        <div className="flex gap-6">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Sitemap</span>
        </div>

      </div>

    </footer>
  );
};

export default Footer;