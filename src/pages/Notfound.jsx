import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 text-black dark:text-white">

      <h1 className="text-8xl font-bold text-rose-500">
        404
      </h1>

      <h2 className="text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 dark:text-gray-300 mt-3">
        Sorry, the page you're looking for doesn't exist.
      </p>

      <Link to="/">
        <button className="mt-8 px-6 py-3 rounded-xl bg-rose-500 text-white hover:bg-rose-600 transition">
          Back to Home
        </button>
      </Link>

    </div>
  );
};

export default NotFound;