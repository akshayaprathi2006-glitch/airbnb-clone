import { Link } from "react-router-dom";

const Contact = () => {
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
          CONTACT
        </p>

        <h1 className="text-4xl md:text-5xl font-bold">
          How can we help?
        </h1>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8">
          Have a question about a property, booking, hosting,
          or the platform? Get in touch with us.
        </p>


        <div className="grid md:grid-cols-3 gap-5 mt-12">

          <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6">

            <div className="text-3xl">
              📧
            </div>

            <h2 className="font-bold text-lg mt-4">
              Email
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              support@airbnbclone.com
            </p>

          </div>


          <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6">

            <div className="text-3xl">
              📞
            </div>

            <h2 className="font-bold text-lg mt-4">
              Phone
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              +91 1800 000 000
            </p>

          </div>


          <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6">

            <div className="text-3xl">
              💬
            </div>

            <h2 className="font-bold text-lg mt-4">
              Support
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Our support team is here to help.
            </p>

          </div>

        </div>


        {/* CONTACT FORM */}

        <section className="mt-14">

          <h2 className="text-2xl font-bold">
            Send us a message
          </h2>

          <div className="mt-6 space-y-5">

            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#FF385C]"
            />

            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#FF385C]"
            />

            <textarea
              rows="5"
              placeholder="How can we help?"
              className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#FF385C] resize-none"
            />

            <button
              type="button"
              className="bg-[#FF385C] text-white px-7 py-3 rounded-xl font-semibold hover:bg-[#E31C5F] transition"
            >
              Send message
            </button>

          </div>

        </section>

      </main>

    </div>
  );
};

export default Contact;