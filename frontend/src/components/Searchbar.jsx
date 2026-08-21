import React from "react";
import { Search } from "lucide-react";

const Searchbar = ({
  searchText,
  setSearchText,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  checkAvailability,
}) => {
  return (
    <div className="flex justify-center mt-6 px-4">
      <div className="flex items-center w-full max-w-[850px] border border-gray-300 rounded-full shadow-md hover:shadow-lg transition bg-white">

        {/* WHERE */}
        <div className="flex-1 px-6 py-3">
          <h4 className="font-semibold text-sm">
            Where
          </h4>

          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search destinations"
            className="w-full text-sm text-gray-500 outline-none bg-transparent mt-1"
          />
        </div>

        {/* SEPARATOR */}
        <div className="h-8 border-r border-gray-300"></div>

        {/* WHEN */}
        <div className="flex-1 px-6 py-3 relative">
          <h4 className="font-semibold text-sm">
            When
          </h4>

          <div className="flex gap-2 mt-1">
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full text-xs outline-none bg-transparent"
            />

            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              min={checkIn || new Date().toISOString().split("T")[0]}
              className="w-full text-xs outline-none bg-transparent"
            />
          </div>
        </div>

        {/* SEPARATOR */}
        <div className="h-8 border-r border-gray-300"></div>

        {/* WHO */}
        <div className="flex-1 px-6 py-3 hidden sm:block">
          <h4 className="font-semibold text-sm">
            Who
          </h4>

          <p className="text-gray-500 text-sm mt-1">
            Add guests
          </p>
        </div>

        {/* SEARCH BUTTON */}
        <button
          type="button"
          onClick={checkAvailability}
          className="mr-2 bg-[#FF385C] text-white p-3 rounded-full hover:bg-[#E31C5F] transition"
        >
          <Search size={20} />
        </button>

      </div>
    </div>
  );
};

export default Searchbar;