import { useLocation, Link } from "react-router-dom";

const pageContent = {
  "/help": {
    title: "Help Center",
    description:
      "Find answers to common questions about bookings, properties, accounts, and using our Airbnb Clone.",
  },

  "/safety": {
    title: "Safety Information",
    description:
      "Your safety matters to us. Always verify property details, communicate through the platform, and follow the safety instructions provided by your host.",
  },

  "/cancellation": {
    title: "Cancellation Options",
    description:
      "Cancellation options depend on the property's booking policy. Check the cancellation terms before confirming your reservation.",
  },

  "/host": {
    title: "Become a Host",
    description:
      "Share your property with travelers and start hosting through our platform.",
  },

  "/host-resources": {
    title: "Host Resources",
    description:
      "Explore useful information and resources to help you manage your property and provide a great guest experience.",
  },

  "/community": {
    title: "Community Forum",
    description:
      "Connect with other hosts and travelers, share experiences, and learn from the community.",
  },

  "/about": {
    title: "About Airbnb Clone",
    description:
      "Our Airbnb Clone is a learning project built with React, Node.js, Express, MongoDB, and modern web technologies.",
  },

  "/careers": {
    title: "Careers",
    description:
      "We're building a better travel experience. Stay tuned for future opportunities to join our team.",
  },

  "/contact": {
    title: "Contact Us",
    description:
      "Have a question or need help? You can contact our support team for assistance.",
  },

  "/privacy": {
    title: "Privacy",
    description:
      "We respect your privacy and aim to keep your personal information secure while using our platform.",
  },

  "/terms": {
    title: "Terms & Conditions",
    description:
      "By using our platform, you agree to follow our terms and conditions regarding bookings, accounts, and property usage.",
  },

  "/sitemap": {
    title: "Sitemap",
    description:
      "Explore the main sections of our Airbnb Clone.",
  },
};

const InfoPage = () => {
  const location = useLocation();

  const content = pageContent[location.pathname];

  if (!content) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold mb-4">
          Page Not Found
        </h1>

        <p className="text-gray-500 mb-6">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="bg-[#FF385C] text-white px-6 py-3 rounded-full hover:bg-[#E31C5F] transition"
        >
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white">

      <div className="max-w-3xl mx-auto px-6 py-20">

        <Link
          to="/"
          className="text-sm text-gray-500 hover:text-black dark:hover:text-white"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mt-8 mb-6">
          {content.title}
        </h1>

        <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
          {content.description}
        </p>

      </div>

    </div>
  );
};

export default InfoPage;