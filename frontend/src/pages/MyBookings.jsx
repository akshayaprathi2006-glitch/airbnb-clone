import { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

     const res = await axios.get(
            "http://localhost:3000/api/bookings/my",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBookings(res.data.bookings);
    } catch (err) {
      console.log(err);
    }
  };

  const cancelBooking = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
  `http://localhost:3000/api/bookings/${id}/cancel`,
  {},
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
 fetchBookings(); // Refresh bookings after cancellation

  } catch (err) {
    console.log(err);
    alert(err.response?.data?.message || "Failed to cancel booking");
  }
};

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        My Bookings
      </h1>

      
        <div className="space-y-6">
  {bookings.length === 0 ? (
    <p className="text-gray-500 text-xl">
      No bookings yet.
    </p>
  ) : (
    bookings.map((booking) => (
      <div
        key={booking._id}
        className="border rounded-xl p-5 shadow"
      >
        <img
          src={booking.property.images?.[0]}
          className="w-full h-64 object-cover rounded-xl"
        />

        <h2 className="text-2xl font-bold mt-4">
           {booking.property?.title}
        </h2>

         <p>{booking.property?.location}</p>

        <p>
          {new Date(booking.checkIn).toLocaleDateString()} →{" "}
          {new Date(booking.checkOut).toLocaleDateString()}
        </p>

        <p>Guests: {booking.guests}</p>

        <p>Total: ₹{booking.totalPrice}</p>

        <p>Status: {booking.status}</p>

        {booking.status === "confirmed" && (
          <button
            onClick={() => cancelBooking(booking._id)}
            className="mt-4 bg-red-500 text-white px-5 py-2 rounded"
          >
            Cancel Booking
          </button>
        )}
      </div>
    ))
  )}
</div>
    </div>
  );
};

export default MyBookings;