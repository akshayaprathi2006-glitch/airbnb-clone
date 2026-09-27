import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

      {/* HEADER */}

      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-5">
          <Link
            to="/"
            className="text-[#FF385C] font-bold text-xl"
          >
            Airbnb Clone
          </Link>
        </div>
      </div>


      {/* CONTENT */}

      <main className="max-w-4xl mx-auto px-6 py-16">

        <p className="text-[#FF385C] font-semibold mb-3">
          ABOUT US
        </p>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          About Airbnb Clone
        </h1>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8">
          Airbnb Clone is a modern accommodation platform
          created to make discovering and booking unique
          stays simple and convenient.
        </p>


        {/* SECTION */}

        <section className="mt-14">

          <h2 className="text-2xl font-bold">
            Our Platform
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
            Users can explore properties, search by location,
            browse different categories, view property details,
            add properties to their wishlist, and make bookings.
          </p>

        </section>


        {/* FEATURES */}

        <section className="mt-12">

          <h2 className="text-2xl font-bold">
            What you can do
          </h2>

          <div className="grid sm:grid-cols-2 gap-5 mt-6">

            <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
              <h3 className="font-semibold text-lg">
                🏠 Discover Stays
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Browse properties and discover places that
                match your travel plans.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
              <h3 className="font-semibold text-lg">
                🔍 Search Easily
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Search destinations and filter properties
                based on your preferences.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
              <h3 className="font-semibold text-lg">
                ❤️ Save Favorites
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Save properties to your wishlist and
                find them again later.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
              <h3 className="font-semibold text-lg">
                📅 Book Your Stay
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Select your dates and complete your property
                booking through the platform.
              </p>
            </div>

          </div>

        </section>


        {/* BACK */}

        <div className="mt-14">
          <Link
            to="/"
            className="inline-block bg-[#FF385C] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#E31C5F] transition"
          >
            Explore stays
          </Link>
        </div>

      </main>

    </div>
  );
};

export default About;