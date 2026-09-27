import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

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


      <main className="max-w-4xl mx-auto px-6 py-16">

        <p className="text-[#FF385C] font-semibold mb-3">
          CAREERS
        </p>

        <h1 className="text-4xl md:text-5xl font-bold">
          Build the future of travel
        </h1>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8">
          We are building a platform that makes discovering
          places and planning stays easier for everyone.
          Explore opportunities to become part of our team.
        </p>


        <section className="mt-14">

          <h2 className="text-2xl font-bold">
            Why work with us?
          </h2>

          <div className="grid sm:grid-cols-2 gap-5 mt-6">

            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="font-semibold text-lg">
                💡 Build
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Work on products that bring technology
                and travel together.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="font-semibold text-lg">
                🤝 Collaborate
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Work with people who enjoy solving
                interesting problems.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="font-semibold text-lg">
                🚀 Learn
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Grow your technical and professional
                skills through real projects.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="font-semibold text-lg">
                🌍 Create Impact
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Help create a better experience for
                travelers and hosts.
              </p>
            </div>

          </div>

        </section>


        <section className="mt-14">

          <h2 className="text-2xl font-bold">
            Interested in joining?
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Send us your resume and tell us what kind of
            work you would like to contribute to.
          </p>

          <a
            href="mailto:careers@airbnbclone.com"
            className="inline-block mt-6 bg-[#FF385C] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#E31C5F] transition"
          >
            Contact Careers Team
          </a>

        </section>

      </main>

    </div>
  );
};

export default Careers;