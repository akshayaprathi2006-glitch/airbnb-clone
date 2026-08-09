import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();


const [property, setProperty] = useState(null);

const [checkIn, setCheckIn] = useState("");
const [checkOut, setCheckOut] = useState("");
const [guests, setGuests] = useState(1);
const [showModal, setShowModal] = useState(false);
const [showGallery, setShowGallery] = useState(false);
const [currentImage, setCurrentImage] = useState(0);
useEffect(() => {
  const fetchProperty = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/properties/${id}`);

      setProperty(res.data.property);

      let viewed =
        JSON.parse(localStorage.getItem("recentProperties")) || [];

      viewed = viewed.filter(
        (item) => item._id !== res.data.property._id
      );

      viewed.unshift(res.data.property);

      viewed = viewed.slice(0, 5);

      localStorage.setItem(
        "recentProperties",
        JSON.stringify(viewed)
      );
    } catch (err) {
      console.log(err);
    }
  };

  fetchProperty();
}, [id]);


 if (!property) {
    return (
      <div className="text-center mt-20 text-2xl">
        Loading...
      </div>
    );
  }

let nights = 0;

if (checkIn && checkOut) {
  const start = new Date(checkIn);
  const end = new Date(checkOut);

  nights = Math.ceil(
    (end - start) / (1000 * 60 * 60 * 24)
  );
}
const cleaningFee = 1200;
const serviceFee = 850;
const totalPrice =
  nights > 0
    ? property.price * nights + cleaningFee + serviceFee
    : 0;


    const handleBooking = async () => {
  try {
    const token = localStorage.getItem("token");

    await axios.post(
      "${import.meta.env.VITE_API_URL}/api/bookings",
      {
        propertyId: property._id,
        checkIn,
        checkOut,
        guests,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    navigate("/booking-success");

  } catch (err) {
    console.log(err);
    alert(
      err.response?.data?.message || "Booking failed"
    );
  }
};

 return (
  <div className="max-w-6xl mx-auto p-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-2 h-auto lg:h-[500px]">

  <img
  src={property.images[currentImage]}
  alt={property.location}
  onClick={() => setShowGallery(true)}
  className="w-full h-72 lg:h-full object-cover rounded-xl lg:rounded-l-2xl cursor-pointer"
/>

  <div className="grid grid-cols-2 gap-2">

     {property.images?.slice(1).map((img,index)=>(
  <img
    key={index}
    src={img}
    alt=""
    onClick={() => {
      setCurrentImage(index + 1);
      setShowGallery(true);
    }}
    className="w-full h-full object-cover cursor-pointer"
  />
))}
  </div>

</div>

    <div className="mt-8 flex flex-col lg:flex-row gap-12">
  {/* LEFT SECTION */}
  <div className="w-full lg:w-2/3">

    <h1 className="text-4xl font-bold">
      {property.title}
    </h1>

    <p className="text-gray-600 mt-2">
      ⭐ {property.rating} • {property.reviews?.length || 0} reviews
       reviews
    </p>

    <hr className="my-6" />

    <h2 className="text-2xl font-semibold">
      Hosted by {property.host?.name || "Host"}
      {property.superHost && (
        <span className="ml-3 text-sm bg-rose-100 text-rose-600 px-3 py-1 rounded-full">
          Superhost
        </span>
      )}
    </h2>

    <p className="text-gray-500 mt-2">
      {property.guests} guests · {property.bedrooms} bedrooms ·
      {property.beds} beds · {property.bathrooms} bathrooms
    </p>

    <hr className="my-6" />

    <h2 className="text-2xl font-semibold">
      About this place
    </h2>

    <p className="mt-3 text-gray-700 leading-7">
      {property.description}
    </p>

    <hr className="my-6" />

    <h2 className="text-2xl font-semibold">
      What this place offers
    </h2>
    <hr className="my-8" />

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
     {property.amenities?.map((item) => (
  <div
    key={item}
    className="border rounded-xl p-4 hover:shadow-md transition"
  >
    {item}
  </div>
))}
    </div>
    <hr className="my-8" />

<h2 className="text-2xl font-semibold mb-6">
  ⭐ Guest Reviews
</h2>

<div className="space-y-5">
  {property.reviews?.map((review) => (
    <div
      key={review.id}
      className="border rounded-xl p-5 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg">
          {review.name}
        </h3>
        <span className="text-yellow-500">
          {"⭐".repeat(review.rating)}
        </span>
      </div>
      <p className="text-gray-600 mt-3">
        {review.comment}
      </p>
    </div>
  ))}
</div>
</div>

  {/* RIGHT SECTION */}
    <div className="w-full lg:w-1/3">

    <div className="border rounded-2xl shadow-xl p-6 sticky top-8">

      <h2 className="text-3xl font-bold">
        ₹{property.price}
        <span className="text-lg font-normal">
          {" "} / night
        </span>
      </h2>

      <div className="mt-6 space-y-4">

        <div>
          <label className="font-semibold">
              Check In
              </label>

          <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full border rounded-lg p-2 mt-1"
            />
        </div>

        <div>
          <label className="font-semibold">
                Check Out
                </label>
          <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              min={checkIn}
              className="w-full border rounded-lg p-2 mt-1"
            />
        </div>

        <div>
          <label className="font-semibold">
            Guests
          </label>

          <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full border rounded-lg p-2 mt-1" >
                <option value={1}>1 Guest</option>
                <option value={2}>2 Guests</option>
                <option value={3}>3 Guests</option>
                <option value={4}>4 Guests</option>
                <option value={5}>5 Guests</option>
                <option value={6}>6 Guests</option>
              </select>
        </div>
        {nights > 0 && (
              <p className="text-green-600 font-semibold">
                {nights} night{nights > 1 ? "s" : ""} selected
              </p>
            )}
        <button
            onClick={() => setShowModal(true)}
            disabled={nights <= 0}
            className={`w-full py-3 rounded-xl font-semibold text-white ${
              nights > 0
                ? "bg-gradient-to-r from-rose-500 to-pink-500 hover:scale-105 transition duration-300"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Reserve
          </button>
       {nights > 0 && (
  <div className="mt-6 border-t pt-4 space-y-2">

    <div className="flex justify-between">
      <span>
        ₹{property.price} × {nights} nights
      </span>

      <span>
        ₹{property.price * nights}
      </span>
    </div>

    <div className="flex justify-between">
      <span>Cleaning Fee</span>
      <span>₹{cleaningFee}</span>
    </div>

    <div className="flex justify-between">
      <span>Service Fee</span>
      <span>₹{serviceFee}</span>
    </div>

    <hr />

    <div className="flex justify-between font-bold text-lg">
      <span>Total</span>
      <span>₹{totalPrice}</span>
    </div>

  </div>
)}
      </div>
    </div>
  </div>
</div>
{showModal && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 w-[90%] max-w-[450px] shadow-2xl">

      <h2 className="text-3xl font-bold text-center mb-6">
        🎉 Confirm Booking
      </h2>

      <div className="space-y-3 text-lg">
        <p><strong>Property:</strong> {property.title}</p>
        <p><strong>Check In:</strong> {checkIn}</p>
        <p><strong>Check Out:</strong> {checkOut}</p>
        <p><strong>Guests:</strong> {guests}</p>
        <p><strong>Nights:</strong> {nights}</p>
        <p><strong>Total:</strong> ₹{totalPrice}</p>
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={() => setShowModal(false)}
          className="flex-1 border rounded-xl py-3">
          Cancel
        </button>

        <button
                  onClick={handleBooking}
                  className="flex-1 bg-rose-500 hover:bg-rose-600 text-white rounded-xl py-3">
                  Confirm Booking
                </button>
      </div>

    </div>
  </div>
)}
{showGallery && (
  <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

    <button
      onClick={() => setShowGallery(false)}
      className="absolute top-6 right-8 text-white text-4xl"
    >
      ×
    </button>

    <button
      onClick={() =>
    setCurrentImage(
    currentImage === 0
      ? property.images.length - 1
      : currentImage - 1
  )
}
      className="absolute left-8 text-white text-5xl"
    >
      ❮
    </button>

    <img
      src={property.images?.[currentImage]}
      className="max-h-[80vh] max-w-[85vw] rounded-2xl"
    />

    <button
      onClick={() =>
        setCurrentImage(
          currentImage === property.images.length - 1
            ? 0
            : currentImage + 1
        )
      }
      className="absolute right-8 text-white text-5xl"
    >
      ❯
    </button>

  </div>
)}
</div>
);
};

export default PropertyDetails;