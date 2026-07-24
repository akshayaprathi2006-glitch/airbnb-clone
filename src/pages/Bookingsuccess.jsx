import { Link } from "react-router-dom";

const BookingSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white">

      <div className="bg-white dark:bg-gray-900 shadow-xl rounded-3xl p-10 text-center w-[500px]">

        <h1 className="text-6xl mb-4">🎉</h1>

        <h2 className="text-4xl font-bold">
          Booking Confirmed!
        </h2>

        <p className="mt-4 text-gray-500 dark:text-gray-300">
          Your reservation has been confirmed.
          We hope you have an amazing stay!
        </p>

        <Link to="/">
          <button className="mt-8 bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-xl font-semibold">
            Back to Home
          </button>
        </Link>

      </div>

    </div>
  );
};

export default BookingSuccess;