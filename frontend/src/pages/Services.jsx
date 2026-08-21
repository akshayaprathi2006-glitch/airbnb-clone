import Navbar from "../components/Navbar";

const Services = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white">
      <Navbar />

      <section className="px-6 md:px-10 py-10">
        <h1 className="text-3xl font-bold mb-2">
          Services
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Helpful services to make your stay easier.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          <div>
            <div className="aspect-square bg-gray-200 rounded-xl"></div>
            <h2 className="font-semibold mt-3">
              Cleaning
            </h2>
            <p className="text-gray-500 text-sm">
              Professional cleaning services
            </p>
          </div>

          <div>
            <div className="aspect-square bg-gray-200 rounded-xl"></div>
            <h2 className="font-semibold mt-3">
              Airport pickup
            </h2>
            <p className="text-gray-500 text-sm">
              Convenient airport transfers
            </p>
          </div>

          <div>
            <div className="aspect-square bg-gray-200 rounded-xl"></div>
            <h2 className="font-semibold mt-3">
              Private chef
            </h2>
            <p className="text-gray-500 text-sm">
              Enjoy meals prepared by a private chef
            </p>
          </div>

          <div>
            <div className="aspect-square bg-gray-200 rounded-xl"></div>
            <h2 className="font-semibold mt-3">
              Photography
            </h2>
            <p className="text-gray-500 text-sm">
              Capture your special moments
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;