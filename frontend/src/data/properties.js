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
    title: "Luxury Beach Villa",
    location: "Goa, India",
    distance: "500 km away",
    dates: "1-6 Jul",
    category: "Beach",

    price: 4500,
    rating: 4.9,
    images: [
        goa,
        goa,
        goa,
        goa,
        goa,
      ],

    image: goa,

    host: "Akshaya",
    superHost: true,

    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,

    description:
      "Enjoy a luxurious stay overlooking the Arabian Sea. Wake up to stunning beach views, relax in your private pool, and enjoy easy access to Goa's vibrant nightlife.",

    amenities: [
      "WiFi",
      "Pool",
      "Kitchen",
      "Air Conditioning",
      "Free Parking",
      "TV",
      "Washing Machine",
      "Pets Allowed"
    ],
    reviews: [
  {
    id: 1,
    name: "Rahul",
    rating: 5,
    comment: "Amazing stay! The beach view was incredible."
  },
  {
    id: 2,
    name: "Priya",
    rating: 5,
    comment: "Very clean and peaceful. Highly recommended."
  },
  {
    id: 3,
    name: "Arjun",
    rating: 4,
    comment: "Host was friendly and the amenities were excellent."
  }
],

    reviewCount: 124
  },

  {
    id: 2,
    title: "Mountain View Cottage",
    location: "Manali, India",
    distance: "300 km away",
    dates: "10-15 Jul",
    category: "Mountains",

    price: 3500,
    rating: 4.8,

    images: [
      manali,
      manali,
      manali,
      manali,
      manali,
    ],

image: manali,

    host: "Rohit",
    superHost: false,

    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,

    description:
      "Escape into the Himalayas with breathtaking mountain views, cozy interiors, and peaceful surroundings perfect for families and couples.",

    amenities: [
      "WiFi",
      "Fireplace",
      "Kitchen",
      "Free Parking",
      "Balcony",
      "Hot Water",
      "TV"
    ],reviews: [
  {
    id: 1,
    name: "Rahul",
    rating: 5,
    comment: "Amazing stay! The beach view was incredible."
  },
  {
    id: 2,
    name: "Priya",
    rating: 5,
    comment: "Very clean rooms and friendly host."
  },
  {
    id: 3,
    name: "Arjun",
    rating: 4,
    comment: "Would definitely visit again."
  }
],

    reviewCount: 89
  },

  {
    id: 3,
    title: "Tea Garden Retreat",
    location: "Ooty, India",
    distance: "450 km away",
    dates: "20-25 Jul",
    category: "Mountains",

    price: 4000,
    rating: 4.7,

    images: [
  ooty,
  ooty,
  ooty,
  ooty,
  ooty,
],

image: ooty,

    host: "Priya",
    superHost: true,

    guests: 5,
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,

    description:
      "Stay amidst beautiful tea plantations with cool weather, peaceful surroundings, and spectacular sunrise views every morning.",

    amenities: [
      "WiFi",
      "Garden",
      "Kitchen",
      "Parking",
      "Bonfire Area",
      "TV",
      "Heater"
    ],
    reviews: [
  {
    id: 1,
    name: "Rahul",
    rating: 5,
    comment: "The tea gardens were beautiful and the weather was amazing."
  },
  {
    id: 2,
    name: "Sneha",
    rating: 4,
    comment: "Very peaceful place. Loved waking up to the mountain views."
  },
  {
    id: 3,
    name: "Kiran",
    rating: 5,
    comment: "Perfect family vacation. Clean rooms and great hospitality."
  }
],
reviewCount: 97
  },

  {
    id: 4,
    title: "Backwater House",
    location: "Kerala, India",
    distance: "700 km away",
    dates: "5-10 Aug",
    category: "Beach",
    price: 5200,
    rating: 4.9,
    images: [
        kerala,
        kerala,
        kerala,
        kerala,
        kerala,
      ],

      image: kerala,
    host: "Anand",
    superHost: true,
    guests: 5,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    description: "Relax beside Kerala's peaceful backwaters with luxury interiors and nature all around.",
    amenities: ["WiFi","Pool","Kitchen","Parking","AC","TV"],
    reviews: [
  {
    id: 1,
    name: "Aditi",
    rating: 5,
    comment: "The backwater view was breathtaking. Highly recommended!"
  },
  {
    id: 2,
    name: "Rohan",
    rating: 5,
    comment: "Beautiful house with excellent amenities."
  },
  {
    id: 3,
    name: "Anjali",
    rating: 4,
    comment: "Very relaxing stay and friendly host."
  }
],
reviewCount: 145
  },

  {
    id: 5,
    title: "Snow Peak Cabin",
    location: "Shimla, India",
    distance: "650 km away",
    dates: "12-17 Aug",
    category: "Mountains",
    price: 5000,
    rating: 4.9,
    images: [
        shimla,
        shimla,
        shimla,
        shimla,
        shimla,
      ],

image: shimla,
    host: "Karan",
    superHost: true,
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    description: "A cozy wooden cabin surrounded by snow-covered mountains and pine forests.",
    amenities: ["WiFi","Fireplace","Kitchen","Parking","Heater","TV"],
    reviews: [
  {
    id: 1,
    name: "Vikram",
    rating: 5,
    comment: "Snowfall made our trip unforgettable."
  },
  {
    id: 2,
    name: "Neha",
    rating: 5,
    comment: "The cabin was warm and cozy."
  },
  {
    id: 3,
    name: "Arun",
    rating: 4,
    comment: "Amazing mountain views and peaceful surroundings."
  }
],
reviewCount: 172
  },

  {
    id: 6,
    title: "Coffee Estate Stay",
    location: "Coorg, India",
    distance: "380 km away",
    dates: "3-8 Sep",
    category: "Cabins",
    price: 4600,
    rating: 4.7,
   images: [
        coorg,
        coorg,
        coorg,
        coorg,
        coorg,
      ],

image: coorg,
    host: "Meera",
    superHost: false,
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    description: "Experience peaceful mornings in the middle of lush coffee plantations.",
    amenities: ["WiFi","Garden","Kitchen","Parking","Bonfire","TV"],
   reviews: [
  {
    id: 1,
    name: "Pooja",
    rating: 5,
    comment: "Coffee plantations were beautiful and relaxing."
  },
  {
    id: 2,
    name: "Deepak",
    rating: 4,
    comment: "Very clean property with excellent food."
  },
  {
    id: 3,
    name: "Megha",
    rating: 5,
    comment: "Loved the bonfire and nature around the stay."
  }
],
reviewCount: 88
  },

  {
    id: 7,
    title: "Adventure Camp",
    location: "Rishikesh, India",
    distance: "900 km away",
    dates: "15-20 Sep",
    category: "Camping",
    price: 3200,
    rating: 4.8,
    images: [
  rishikesh,
  rishikesh,
  rishikesh,
  rishikesh,
  rishikesh,
],

image: rishikesh,
    host: "Vikram",
    superHost: false,
    guests: 3,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    description: "Stay close to the Ganga River and enjoy rafting, camping, and adventure sports.",
    amenities: ["WiFi","Parking","Campfire","Breakfast","River View"],
    reviews: [
  {
    id: 1,
    name: "Sahil",
    rating: 5,
    comment: "Rafting and camping experience was fantastic."
  },
  {
    id: 2,
    name: "Nisha",
    rating: 4,
    comment: "Beautiful riverside location and peaceful atmosphere."
  },
  {
    id: 3,
    name: "Ritesh",
    rating: 5,
    comment: "Adventure lovers will absolutely enjoy this place."
  }
],
reviewCount: 104
  }
];

export default properties;