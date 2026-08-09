import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProperty = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    category: "Beach",
    guests: 1,
    bedrooms: 1,
    bathrooms: 1,
    amenities: "",
  });

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("location", formData.location);
      data.append("category", formData.category);
      data.append("guests", formData.guests);
      data.append("bedrooms", formData.bedrooms);
      data.append("bathrooms", formData.bathrooms);

      // Convert amenities string into array
      const amenitiesArray = formData.amenities
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "");

      amenitiesArray.forEach((amenity) => {
        data.append("amenities", amenity);
      });

      // Add images
      for (let i = 0; i < images.length; i++) {
        data.append("images", images[i]);
      }

      axios.post(
            `${import.meta.env.VITE_API_URL}/api/properties`,
            data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Property added successfully!");

      navigate("/host-dashboard");

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Failed to add property"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-6">

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold mb-8">
          Add Your Property
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Title */}
          <div>
            <label className="font-semibold">
              Property Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Beautiful beach house"
              className="w-full border rounded-lg p-3 mt-1"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="font-semibold">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your property..."
              rows="4"
              className="w-full border rounded-lg p-3 mt-1"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="font-semibold">
              Price per night
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="2500"
              className="w-full border rounded-lg p-3 mt-1"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="font-semibold">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Goa, India"
              className="w-full border rounded-lg p-3 mt-1"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="font-semibold">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1 bg-white"
              required
            >
              <option value="Beach">🏖️ Beach</option>
              <option value="Camping">🏕️ Camping</option>
              <option value="Mountains">⛰️ Mountains</option>
              <option value="Cabins">🏡 Cabins</option>
              <option value="Tropical">🌴 Tropical</option>
            </select>
          </div>

          {/* Guests / Bedrooms / Bathrooms */}
          <div className="grid grid-cols-3 gap-4">

            <div>
              <label className="font-semibold">
                Guests
              </label>

              <input
                type="number"
                name="guests"
                min="1"
                value={formData.guests}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-1"
              />
            </div>

            <div>
              <label className="font-semibold">
                Bedrooms
              </label>

              <input
                type="number"
                name="bedrooms"
                min="1"
                value={formData.bedrooms}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-1"
              />
            </div>

            <div>
              <label className="font-semibold">
                Bathrooms
              </label>

              <input
                type="number"
                name="bathrooms"
                min="1"
                value={formData.bathrooms}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-1"
              />
            </div>

          </div>

          {/* Amenities */}
          <div>
            <label className="font-semibold">
              Amenities
            </label>

            <input
              type="text"
              name="amenities"
              value={formData.amenities}
              onChange={handleChange}
              placeholder="WiFi, Pool, Parking, AC"
              className="w-full border rounded-lg p-3 mt-1"
            />

            <p className="text-sm text-gray-500 mt-1">
              Separate amenities using commas.
            </p>
          </div>

          {/* Images */}
          <div>
            <label className="font-semibold">
              Property Images
            </label>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setImages(e.target.files)}
              className="w-full border rounded-lg p-3 mt-1"
            />

            <p className="text-sm text-gray-500 mt-1">
              You can select up to 5 images.
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-xl font-semibold"
          >
            Add Property
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddProperty;