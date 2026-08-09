import { useEffect, useState } from "react";
import axios from "axios";

const HostBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchHostBookings();
  }, []);

  const fetchHostBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/bookings/host`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBookings(res.data.bookings);
    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message ||
          "Failed to fetch host bookings"
      );
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Host Bookings
      </h1>

      {bookings.length === 0 ? (
        <p className="text-gray-500 text-xl">
          No bookings received yet.
        </p>
      ) : (
        <div className="space-y-6">

          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="border rounded-2xl p-6 shadow-sm"
            >

              {/* Property */}
              <h2 className="text-2xl font-bold">
                {booking.property?.title}
              </h2>

              <p className="text-gray-500 mt-1">
                {booking.property?.location}
              </p>

              <hr className="my-4" />

              {/* Guest */}
              <h3 className="text-lg font-semibold">
                Guest
              </h3>

              <p className="mt-1">
                {booking.guest?.name}
              </p>

              <p className="text-gray-500">
                {booking.guest?.email}
              </p>

              {/* Booking details */}
              <div className="mt-4 space-y-2">

                <p>
                  <strong>Check In:</strong>{" "}
                  {new Date(
                    booking.checkIn
                  ).toLocaleDateString()}
                </p>

                <p>
                  <strong>Check Out:</strong>{" "}
                  {new Date(
                    booking.checkOut
                  ).toLocaleDateString()}
                </p>

                <p>
                  <strong>Guests:</strong>{" "}
                  {booking.guests}
                </p>

                <p>
                  <strong>Total:</strong>{" "}
                  ₹{booking.totalPrice}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={
                      booking.status === "confirmed"
                        ? "text-green-600 font-semibold"
                        : "text-red-500 font-semibold"
                    }
                  >
                    {booking.status}
                  </span>
                </p>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default HostBookings;