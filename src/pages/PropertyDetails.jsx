import { useParams } from "react-router-dom";
import properties from "../data/properties";


const PropertyDetails = () => {
  const { id } = useParams();
  
const property = properties.find(
  (property) => property.id === Number(id)
);

 return (
  <div className="max-w-6xl mx-auto p-8">

    <img
      src={property.image}
      alt={property.location}
      className="w-full h-[500px] object-cover rounded-2xl"
    />

    <h1 className="text-4xl font-bold mt-6">
      {property.location}
    </h1>

    <p className="text-gray-600 mt-2">
      ⭐ {property.rating}
    </p>

    <p className="text-xl font-semibold mt-6">
      Hosted by {property.host}
    </p>

    <p className="text-gray-500 mt-2">
      {property.guests} guests · {property.bedrooms} bedrooms ·{" "}
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

    <div className="grid grid-cols-2 gap-3 mt-4">
      {property.amenities.map((item) => (
        <div
          key={item}
          className="border rounded-lg p-3"
        >
          {item}
        </div>
      ))}
    </div>

    <hr className="my-6" />

    <h2 className="text-3xl font-bold">
      ₹{property.price}
      <span className="text-lg font-normal">
        {" "}
        / night
      </span>
    </h2>

    <p className="text-gray-500 mt-2">
      {property.distance}
    </p>

    <p className="text-gray-500">
      {property.dates}
    </p>

  </div>
);
};

export default PropertyDetails;