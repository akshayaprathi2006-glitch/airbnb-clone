import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HostDashboard = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchMyProperties();
  }, []);

  const fetchMyProperties = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:3000/api/properties/my-properties",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProperties(res.data.properties);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProperty = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:3000/api/properties/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchMyProperties();
    } catch (err) {
      console.log(err);
      alert("Failed to delete property");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Host Dashboard
        </h1>

        <button
          onClick={() => navigate("/add-property")}
          className="bg-rose-500 text-white px-5 py-3 rounded-xl font-semibold hover:bg-rose-600"
        >
          + Add Property
        </button>
      </div>

      {properties.length === 0 ? (
        <p>No properties added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {properties.map((property) => (
            <div
              key={property._id}
              className="border rounded-xl p-4 shadow"
            >

              <img
                src={property.images?.[0]}
                className="w-full h-56 object-cover rounded-xl"
                alt={property.title}
              />

              <h2 className="text-2xl font-bold mt-3">
                {property.title}
              </h2>

              <p>{property.location}</p>

              <p className="font-semibold mt-2">
                ₹{property.price}/night
              </p>

              <div className="flex gap-3 mt-5">

                <button
                        onClick={() => navigate(`/edit-property/${property._id}`)}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                      >
                        Edit
                      </button>

                <button
                  onClick={() => deleteProperty(property._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default HostDashboard;