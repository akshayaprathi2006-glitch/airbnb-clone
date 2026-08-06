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

      const res = await axios.get(
        "http://localhost:3000/api/bookings/host",
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

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Host Dashboard
      </h1>

      {bookings.length === 0 ? (
        <p className="text-xl text-gray-500">
          No bookings for your properties.
        </p>
      ) : (
        <div className="space-y-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="border rounded-xl p-5 shadow"
            >
              <h2 className="text-2xl font-bold">
                {booking.property?.title}
              </h2>

              <p>
                <strong>Guest:</strong> {booking.guest?.name}
              </p>

              <p>
                <strong>Email:</strong> {booking.guest?.email}
              </p>

              <p>
                <strong>Location:</strong>{" "}
                {booking.property?.location}
              </p>

              <p>
                <strong>Check In:</strong>{" "}
                {new Date(booking.checkIn).toLocaleDateString()}
              </p>

              <p>
                <strong>Check Out:</strong>{" "}
                {new Date(booking.checkOut).toLocaleDateString()}
              </p>

              <p>
                <strong>Guests:</strong> {booking.guests}
              </p>

              <p>
                <strong>Total:</strong> ₹{booking.totalPrice}
              </p>

              <p>
                <strong>Status:</strong> {booking.status}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HostBookings;