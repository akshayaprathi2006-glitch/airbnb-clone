import { Link, useLocation } from "react-router-dom";

const InfoPage = () => {
  const location = useLocation();

  const pageData = {
    "/help": {
      title: "Help Center",
      description:
        "Find answers and helpful information about bookings, properties, accounts, payments, and using our Airbnb Clone.",
      sections: [
        {
          title: "Booking a stay",
          content:
            "Search for a destination, choose your check-in and check-out dates, and select a property that suits your needs. You can open any property to view its details before making a booking.",
        },
        {
          title: "Managing your bookings",
          content:
            "You can view your bookings from the My Bookings section. Your booking information includes the property, dates, number of guests, and booking status.",
        },
        {
          title: "Finding a property",
          content:
            "Use the search bar to search by location, property name, or description. You can also use categories and sorting options to find properties more easily.",
        },
        {
          title: "Wishlist",
          content:
            "Found a property you like? Add it to your wishlist by clicking the heart icon on the property card. You need to be logged in to use the wishlist feature.",
        },
        {
          title: "Account and login",
          content:
            "Create an account to access features such as bookings and wishlist. If you already have an account, use the login page to access your account.",
        },
        {
          title: "Still need help?",
          content:
            "If you cannot find the information you are looking for, visit our Contact page and send us a message. We will be happy to help.",
        },
      ],
    },

    "/safety": {
      title: "Safety Information",
      description:
        "Learn about some basic safety practices when using our Airbnb Clone.",
      sections: [
        {
          title: "Before booking",
          content:
            "Review the property details, location, available amenities, and other information before making a booking.",
        },
        {
          title: "Check property information",
          content:
            "Make sure the property information matches what you are looking for. If you have questions about a property, contact the host when that feature is available.",
        },
        {
          title: "Protect your account",
          content:
            "Never share your account password or login credentials with anyone. Use a strong and unique password for your account.",
        },
        {
          title: "During your stay",
          content:
            "Follow the property rules and respect the safety instructions provided by the host.",
        },
      ],
    },

    "/cancellation": {
      title: "Cancellation Options",
      description:
        "Understand the basic cancellation process for your bookings.",
      sections: [
        {
          title: "Cancel a booking",
          content:
            "If you need to cancel a booking, open your booking details and use the available cancellation option.",
        },
        {
          title: "Cancellation status",
          content:
            "After cancelling a booking, check your booking information to confirm that the cancellation has been processed.",
        },
        {
          title: "Need assistance?",
          content:
            "If you have questions about a cancellation, contact us through the Contact page.",
        },
      ],
    },

    "/host": {
      title: "Become a Host",
      description:
        "Share your property with guests and become a host on our Airbnb Clone.",
      sections: [
        {
          title: "List your property",
          content:
            "Hosts can add their property by providing details such as title, location, price, description, category, and images.",
        },
        {
          title: "Manage your properties",
          content:
            "Hosts can manage their listed properties and update property information when needed.",
        },
        {
          title: "Manage bookings",
          content:
            "Hosts can view bookings associated with their properties through the host dashboard.",
        },
      ],
    },

    "/host-resources": {
      title: "Host Resources",
      description:
        "Helpful information for hosts managing their properties.",
      sections: [
        {
          title: "Create a good listing",
          content:
            "Use clear property titles, accurate descriptions, good-quality images, and correct pricing to help guests understand your property.",
        },
        {
          title: "Keep information updated",
          content:
            "Update your property details whenever something changes so guests can make informed decisions.",
        },
        {
          title: "Manage your bookings",
          content:
            "Check your host dashboard regularly to keep track of reservations and property activity.",
        },
      ],
    },

    "/community": {
      title: "Community Forum",
      description:
        "Connect with other hosts and guests and share experiences.",
      sections: [
        {
          title: "Share experiences",
          content:
            "Share your travel experiences, hosting tips, and useful information with the community.",
        },
        {
          title: "Ask questions",
          content:
            "Community discussions can help users exchange ideas and learn from one another.",
        },
        {
          title: "Respect the community",
          content:
            "Keep discussions respectful, helpful, and welcoming for everyone.",
        },
      ],
    },

    "/privacy": {
      title: "Privacy",
      description:
        "Learn about the importance of protecting your personal information.",
      sections: [
        {
          title: "Your information",
          content:
            "Account and booking information should be handled responsibly and used only for providing the services available on the platform.",
        },
        {
          title: "Account security",
          content:
            "Keep your login credentials private and avoid sharing your password with others.",
        },
      ],
    },

    "/terms": {
      title: "Terms & Conditions",
      description:
        "Important information about using our Airbnb Clone.",
      sections: [
        {
          title: "Using the platform",
          content:
            "Users are expected to provide accurate information and use the platform responsibly.",
        },
        {
          title: "Bookings",
          content:
            "Users should review property information, dates, pricing, and booking details before confirming a reservation.",
        },
        {
          title: "Property listings",
          content:
            "Hosts should provide accurate information about their properties and keep their listings updated.",
        },
      ],
    },

    "/sitemap": {
      title: "Sitemap",
      description:
        "Quickly navigate through the main sections of our Airbnb Clone.",
      sections: [
        {
          title: "Main pages",
          content:
            "Home, Experiences, Services, Wishlist, Login, Signup, and Property Details.",
        },
        {
          title: "Booking",
          content:
            "My Bookings, Booking Success, and other booking-related pages.",
        },
        {
          title: "Hosting",
          content:
            "Host Dashboard, Add Property, Edit Property, Host Bookings, and Host Resources.",
        },
      ],
    },
  };

  const page = pageData[location.pathname] || pageData["/help"];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white">

      {/* HEADER */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5">
          <Link
            to="/"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* MAIN */}
      <main className="max-w-5xl mx-auto px-6 md:px-10 py-14">

        {/* TITLE */}
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            {page.title}
          </h1>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 leading-8">
            {page.description}
          </p>
        </div>

        {/* CONTENT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

          {page.sections.map((section, index) => (
            <div
              key={index}
              className="
                border
                border-gray-200
                dark:border-gray-800
                rounded-2xl
                p-7
                hover:shadow-md
                transition
                bg-white
                dark:bg-gray-900
              "
            >
              <h2 className="text-xl font-semibold">
                {section.title}
              </h2>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                {section.content}
              </p>
            </div>
          ))}

        </div>

        {/* CONTACT CTA */}
        <div
          className="
            mt-14
            rounded-2xl
            bg-gray-100
            dark:bg-gray-900
            p-8
            md:p-10
            text-center
          "
        >
          <h2 className="text-2xl font-bold">
            Need more help?
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Our team is here to help you with your questions.
          </p>

          <Link
            to="/contact"
            className="
              inline-block
              mt-6
              bg-[#FF385C]
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              hover:bg-[#e31c5f]
              transition
            "
          >
            Contact Us
          </Link>
        </div>

      </main>

    </div>
  );
};

export default InfoPage;