import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditProperty = () => {
  const { id } = useParams();
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

  const [loading, setLoading] = useState(true);

  // Fetch property
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/properties/${id}`
        );

        const property = res.data.property;

        setFormData({
          title: property.title || "",
          description: property.description || "",
          price: property.price || "",
          location: property.location || "",
          category: property.category || "Beach",
          guests: property.guests || 1,
          bedrooms: property.bedrooms || 1,
          bathrooms: property.bathrooms || 1,
          amenities: property.amenities
            ? property.amenities.join(", ")
            : "",
        });

        setLoading(false);
      } catch (error) {
        console.log(error);
        alert("Failed to load property");
        navigate("/host-dashboard");
      }
    };

    fetchProperty();
  }, [id, navigate]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Update property
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const amenitiesArray = formData.amenities
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "");

      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/properties/${id}`,
        {
          title: formData.title,
          description: formData.description,
          price: formData.price,
          location: formData.location,
          category: formData.category,
          guests: formData.guests,
          bedrooms: formData.bedrooms,
          bathrooms: formData.bathrooms,
          amenities: amenitiesArray,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Property updated successfully!");

      navigate("/host-dashboard");

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Failed to update property"
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading property...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold mb-8">
          Edit Your Property
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

          {/* Buttons */}
          <div className="flex gap-4 pt-4">

            <button
              type="submit"
              className="flex-1 bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-xl font-semibold"
            >
              Save Changes
            </button>

            <button
              type="button"
              onClick={() => navigate("/host-dashboard")}
              className="flex-1 border border-gray-300 py-3 rounded-xl font-semibold"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditProperty;