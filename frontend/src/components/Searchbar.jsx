import { Search } from "lucide-react";

const Searchbar = () => {
  return (
    <div className="flex justify-center mt-6 px-4">

      <div
        className="
          flex items-center
          w-full max-w-4xl
          border border-gray-300
          rounded-full
          shadow-sm
          hover:shadow-md
          transition
          bg-white
        "
      >

        {/* WHERE */}
        <div className="flex-1 px-8 py-4 cursor-pointer rounded-full hover:bg-gray-100">

          <p className="text-xs font-bold">
            Where
          </p>

          <p className="text-sm text-gray-500 mt-1">
            Search destinations
          </p>

        </div>


        {/* DIVIDER */}
        <div className="h-8 border-l border-gray-300" />


        {/* WHEN */}
        <div className="flex-1 px-8 py-4 cursor-pointer rounded-full hover:bg-gray-100">

          <p className="text-xs font-bold">
            When
          </p>

          <p className="text-sm text-gray-500 mt-1">
            Add dates
          </p>

        </div>


        {/* DIVIDER */}
        <div className="h-8 border-l border-gray-300" />


        {/* WHO */}
        <div className="flex-1 px-8 py-4 cursor-pointer rounded-full hover:bg-gray-100">

          <p className="text-xs font-bold">
            Who
          </p>

          <p className="text-sm text-gray-500 mt-1">
            Add guests
          </p>

        </div>


        {/* SEARCH BUTTON */}
        <button
          className="
            mr-2
            w-12 h-12
            rounded-full
            bg-[#FF385C]
            text-white
            flex
            items-center
            justify-center
            hover:bg-[#E31C5F]
            transition
          "
        >
          <Search size={20} />
        </button>

      </div>

    </div>
  );
};

export default Searchbar;
