import goa from "../assets/properties/goa.jpg";
import manali from "../assets/properties/manali.png";
import ooty from "../assets/properties/ooty.png";
import shimla from "../assets/properties/shimla.jpg";
import coorg from "../assets/properties/coorg.jpg";
import rishikesh from "../assets/properties/rishikesh.jpg";
import kerala from "../assets/properties/kerala.png";
import pondicherry from "../assets/properties/pondicherry.jpg";
import varkala from "../assets/properties/varkala.jpg";
import alleppey from "../assets/properties/alleppey.jpg";
import munnar from "../assets/properties/munnar.jpg";
import darjeeling from "../assets/properties/darjeeling.jpg";
import kasol from "../assets/properties/kasol.jpg";
import mussoorie from "../assets/properties/mussoorie.jpg";
import nainital from "../assets/properties/nainital.jpg";
import andaman from "../assets/properties/andaman.jpg";
import gokarna from "../assets/properties/gokarna.jpg";
const properties = [
  {
    id: 1,
    location: "Goa, India",
    distance: "500 km away",
    dates: "1-6 Jul",
    category:"Beach",
    price: 4500,
    rating: 4.9,
    image: goa,
    host: "Rahul Sharma",
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    description:
      "Enjoy a luxurious beachside villa in Goa with a private pool, sea breeze, and beautiful sunsets. Perfect for families and groups.",
    amenities: [
      "Wifi",
      "Kitchen",
      "Private Pool",
      "Free Parking",
      "Air Conditioning",
      "Beach Access"
]
  },
  {
    id: 2,
    location: "Manali, India",
    distance: "300 km away",
    dates: "10-15 Jul",
    category:"Mountains",
    price: 3500,
    rating: 4.8,
    image: manali,
    host: "Aman Verma",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    description:
      "A cozy wooden cottage surrounded by snow-covered mountains. Perfect for nature lovers and peaceful vacations.",
    amenities: [
      "Wifi",
      "Fireplace",
      "Mountain View",
      "Free Parking",
      "Heater",
      "Kitchen"
]
  },
   {
    id: 3,
    location: "Ooty, India",
    category: "Mountains",
    distance: "450 km away",
    dates: "20-25 Jul",
    price: 4000,
    rating: 4.7,
    image: ooty,
    host: "Priya Nair",
    guests: 5,
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
    description:
      "Stay in the heart of Ooty with breathtaking hill views, lush gardens, and peaceful surroundings.",
    amenities: [
      "Wifi",
      "Garden",
      "Kitchen",
      "Free Parking",
      "Balcony",
      "TV"
]
  },
  {
    id: 4,
    location: "Kerala, India",
    category: "Beach",
    distance: "700 km away",
    dates: "5-10 Aug",
    price: 5200,
    rating: 4.9,
    image: kerala,
    host: "Joseph Mathew",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    description:
      "Experience the famous Kerala backwaters in this modern waterfront home with peaceful surroundings.",
    amenities: [
      "Wifi",
      "Boat Ride",
      "Kitchen",
      "Free Parking",
      "Air Conditioning",
      "Lake View"
    ]
  },
  {
  id: 5,
  location: "Shimla, India",
  distance: "650 km away",
  dates: "12-17 Aug",
  category: "Mountains",
  price: 5000,
  rating: 4.9,
  image: shimla,
  host: "Neha Kapoor",
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 3,
    description:
      "Luxury mountain retreat in Shimla with panoramic valley views and warm wooden interiors.",
    amenities: [
      "Wifi",
      "Fireplace",
      "Kitchen",
      "Free Parking",
      "Mountain View",
      "TV"
]
},
{
  id: 6,
  location: "Coorg, India",
  distance: "380 km away",
  dates: "3-8 Sep",
  category: "Cabins",
  price: 4600,
  rating: 4.7,
  image: coorg,
  host: "Arjun Gowda",
    guests: 5,
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
    description:
      "Escape to a peaceful coffee plantation stay surrounded by greenery and fresh air.",
    amenities: [
      "Wifi",
      "Coffee Estate",
      "Kitchen",
      "Free Parking",
      "Garden",
      "BBQ"
]
},
{
  id: 7,
  location: "Rishikesh, India",
  distance: "900 km away",
  dates: "15-20 Sep",
  category: "Camping",
  price: 3200,
  rating: 4.8,
  image: rishikesh,
  host: "Karan Singh",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    description:
      "A peaceful riverside cabin close to adventure sports, yoga retreats, and the Ganga.",
    amenities: [
      "Wifi",
      "River View",
      "Kitchen",
      "Free Parking",
      "Yoga Space",
      "Balcony"
]
},
{
  id: 8,
  location: "Pondicherry, India",
  distance: "420 km away",
  dates: "22-27 Sep",
  category: "Beach",
  price: 4100,
  rating: 4.8,
  image: pondicherry,
  host: "Ananya Roy",
guests: 4,
bedrooms: 2,
beds: 2,
bathrooms: 2,
description:
  "A charming French-style villa near the beach with cozy interiors, peaceful surroundings, and cafés just a short walk away.",
amenities: [
  "Wifi",
  "Kitchen",
  "Free Parking",
  "Air Conditioning",
  "Balcony",
  "Beach Access"
]
},
{
  id: 9,
  location: "Varkala, India",
  distance: "820 km away",
  dates: "1-6 Oct",
  category: "Beach",
  price: 4700,
  rating: 4.9,
  image: varkala,
  host: "Vivek Menon",
guests: 5,
bedrooms: 2,
beds: 3,
bathrooms: 2,
description:
  "Relax at this cliffside stay with breathtaking ocean views, beautiful sunsets, and easy access to Varkala Beach.",
amenities: [
  "Wifi",
  "Ocean View",
  "Kitchen",
  "Free Parking",
  "Air Conditioning",
  "Beach Access"
]
},
{
  id: 10,
  location: "Alleppey, India",
  distance: "760 km away",
  dates: "10-15 Oct",
  category: "Tropical",
  price: 5400,
  rating: 4.9,
  image: alleppey,
  host: "Thomas Joseph",
guests: 4,
bedrooms: 2,
beds: 2,
bathrooms: 2,
description:
  "Stay on the peaceful backwaters of Alleppey and enjoy stunning sunrise views with traditional Kerala hospitality.",
amenities: [
  "Wifi",
  "Lake View",
  "Kitchen",
  "Boat Ride",
  "Air Conditioning",
  "Free Parking"
]
},
{
  id: 11,
  location: "Munnar, India",
  distance: "680 km away",
  dates: "18-23 Oct",
  category: "Mountains",
  price: 4900,
  rating: 4.8,
  image: munnar,
  host: "Sneha Mathew",
guests: 4,
bedrooms: 2,
beds: 2,
bathrooms: 2,
description:
  "A peaceful tea plantation cottage surrounded by lush green hills and cool weather throughout the year.",
amenities: [
  "Wifi",
  "Mountain View",
  "Garden",
  "Kitchen",
  "Free Parking",
  "Fireplace"
]
},
{
  id: 12,
  location: "Darjeeling, India",
  distance: "1400 km away",
  dates: "25-30 Oct",
  category: "Mountains",
  price: 5300,
  rating: 4.9,
  image: darjeeling,
  host: "Tenzing Sherpa",
guests: 6,
bedrooms: 3,
beds: 4,
bathrooms: 2,
description:
  "Wake up to spectacular Himalayan views and enjoy a luxurious mountain retreat in the heart of Darjeeling.",
amenities: [
  "Wifi",
  "Mountain View",
  "Kitchen",
  "Heater",
  "Free Parking",
  "Balcony"
]
},
{
  id: 13,
  location: "Kasol, India",
  distance: "980 km away",
  dates: "5-10 Nov",
  category: "Camping",
  price: 3600,
  rating: 4.7,
  image: kasol,
  host: "Rohan Thakur",
guests: 3,
bedrooms: 1,
beds: 2,
bathrooms: 1,
description:
  "A riverside wooden cabin surrounded by pine forests, perfect for camping, trekking, and relaxing in nature.",
amenities: [
  "Wifi",
  "River View",
  "Fireplace",
  "Kitchen",
  "Free Parking",
  "BBQ"
]
},
{
  id: 14,
  location: "Mussoorie, India",
  distance: "870 km away",
  dates: "12-17 Nov",
  category: "Mountains",
  price: 4500,
  rating: 4.8,
  image: mussoorie,
  host: "Meera Kapoor",
guests: 5,
bedrooms: 2,
beds: 3,
bathrooms: 2,
description:
  "Experience the Queen of Hills from this beautiful cottage offering stunning valley views and cozy interiors.",
amenities: [
  "Wifi",
  "Mountain View",
  "Kitchen",
  "Free Parking",
  "Balcony",
  "TV"
]
},
{
  id: 15,
  location: "Nainital, India",
  distance: "920 km away",
  dates: "20-25 Nov",
  category: "Mountains",
  price: 4800,
  rating: 4.8,
  image: nainital,
  host: "Kunal Joshi",
guests: 4,
bedrooms: 2,
beds: 2,
bathrooms: 2,
description:
  "Enjoy peaceful mornings overlooking Naini Lake while staying in this modern and comfortable hillside apartment.",
amenities: [
  "Wifi",
  "Lake View",
  "Kitchen",
  "Free Parking",
  "Balcony",
  "TV"
]
},
{
  id: 16,
  location: "Andaman Islands",
  distance: "2200 km away",
  dates: "2-7 Dec",
  category: "Tropical",
  price: 8900,
  rating: 5.0,
  image: andaman,
  host: "Rakesh Das",
guests: 6,
bedrooms: 3,
beds: 4,
bathrooms: 3,
description:
  "A luxury beachfront villa with crystal-clear waters, private beach access, and unforgettable island sunsets.",
amenities: [
  "Wifi",
  "Private Pool",
  "Beach Access",
  "Kitchen",
  "Free Parking",
  "Air Conditioning"
]
},
{
  id: 17,
  location: "Gokarna, India",
  distance: "650 km away",
  dates: "15-20 Dec",
  category: "Beach",
  price: 4300,
  rating: 4.9,
  image: gokarna,
  host: "Arvind Shetty",
guests: 4,
bedrooms: 2,
beds: 2,
bathrooms: 2,
description:
  "A peaceful beach house located just steps away from Gokarna's serene coastline, perfect for a relaxing getaway.",
amenities: [
  "Wifi",
  "Beach Access",
  "Kitchen",
  "Free Parking",
  "Air Conditioning",
  "Garden"
]
}
];

export default properties;