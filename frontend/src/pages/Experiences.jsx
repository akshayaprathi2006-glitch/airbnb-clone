import Navbar from "../components/Navbar";

const Experiences = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white">
      <Navbar />

      <section className="px-6 md:px-10 py-10">
        <h1 className="text-3xl font-bold mb-2">
          Experiences
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Discover unforgettable experiences around the world.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          <div>
            <div className="aspect-square bg-gray-200 rounded-xl"></div>
            <h2 className="font-semibold mt-3">
              Food & drinks
            </h2>
            <p className="text-gray-500 text-sm">
              Explore local food and drinks
            </p>
          </div>

          <div>
            <div className="aspect-square bg-gray-200 rounded-xl"></div>
            <h2 className="font-semibold mt-3">
              Art & culture
            </h2>
            <p className="text-gray-500 text-sm">
              Discover local art and culture
            </p>
          </div>

          <div>
            <div className="aspect-square bg-gray-200 rounded-xl"></div>
            <h2 className="font-semibold mt-3">
              Outdoor activities
            </h2>
            <p className="text-gray-500 text-sm">
              Adventures and activities
            </p>
          </div>

          <div>
            <div className="aspect-square bg-gray-200 rounded-xl"></div>
            <h2 className="font-semibold mt-3">
              Photography
            </h2>
            <p className="text-gray-500 text-sm">
              Capture beautiful moments
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Experiences;