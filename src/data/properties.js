import goa from "../assets/properties/goa.jpg";
import manali from "../assets/properties/manali.png";
import ooty from "../assets/properties/ooty.png";
import shimla from "../assets/properties/shimla.jpg";
import coorg from "../assets/properties/coorg.jpg";
import rishikesh from "../assets/properties/rishikesh.jpg";
import kerala from "../assets/properties/kerala.png";
const properties = [
  {
    id: 1,
    location: "Goa, India",
    distance: "500 km away",
    dates: "1-6 Jul",
    category:"Beach",
    price: 4500,
    rating: 4.9,
    image: goa
  },
  {
    id: 2,
    location: "Manali, India",
    distance: "300 km away",
    dates: "10-15 Jul",
    category:"Mountains",
    price: 3500,
    rating: 4.8,
    image: manali
  },
   {
    id: 3,
    location: "Ooty, India",
    category: "Mountains",
    distance: "450 km away",
    dates: "20-25 Jul",
    price: 4000,
    rating: 4.7,
    image: ooty
  },
  {
    id: 4,
    location: "Kerala, India",
    category: "Beach",
    distance: "700 km away",
    dates: "5-10 Aug",
    price: 5200,
    rating: 4.9,
    image: kerala
  },
  {
  id: 5,
  location: "Shimla, India",
  distance: "650 km away",
  dates: "12-17 Aug",
  category: "Mountains",
  price: 5000,
  rating: 4.9,
  image: shimla
},
{
  id: 6,
  location: "Coorg, India",
  distance: "380 km away",
  dates: "3-8 Sep",
  category: "Cabins",
  price: 4600,
  rating: 4.7,
  image: coorg
},
{
  id: 7,
  location: "Rishikesh, India",
  distance: "900 km away",
  dates: "15-20 Sep",
  category: "Camping",
  price: 3200,
  rating: 4.8,
  image: rishikesh
}
];

export default properties;