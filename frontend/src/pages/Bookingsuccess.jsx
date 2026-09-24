import { Link } from "react-router-dom";

const BookingSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white px-4">

      <div className="bg-white dark:bg-gray-900 shadow-xl rounded-3xl p-10 text-center w-full max-w-[500px]">

        <h1 className="text-6xl mb-4">🎉</h1>

        <h2 className="text-4xl font-bold">
          Booking Confirmed!
        </h2>

        <p className="mt-4 text-gray-500 dark:text-gray-300">
          Your reservation has been confirmed.
          We hope you have an amazing stay!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

          <Link to="/my-bookings">
            <button className="w-full bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-xl font-semibold transition">
              View My Bookings
            </button>
          </Link>

          <Link to="/">
            <button className="w-full border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Back to Home
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
};

export default BookingSuccess;