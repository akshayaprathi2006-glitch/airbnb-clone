
import Searchbar from "./Searchbar";

const SearchFilter = ({
  searchText,
  setSearchText,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  sortBy,
  setSortBy,
  checkAvailability,
}) => {
  return (
    <section className="w-full bg-[#F7F7F7] border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800 pt-1 pb-5">

      {/* SEARCH BAR */}
      <Searchbar
        searchText={searchText}
        setSearchText={setSearchText}
        checkIn={checkIn}
        setCheckIn={setCheckIn}
        checkOut={checkOut}
        setCheckOut={setCheckOut}
        checkAvailability={checkAvailability}
      />

      {/* SORTING - PRESERVED */}
      <div className="flex justify-center mt-4 px-4">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full max-w-[220px] border border-gray-300 dark:border-gray-700 rounded-full px-5 py-3 text-sm bg-white dark:bg-gray-800 dark:text-white shadow-sm outline-none cursor-pointer"
        >
          <option value="">Sort By</option>
          <option value="priceLow">
            Price: Low to High
          </option>
          <option value="priceHigh">
            Price: High to Low
          </option>
          <option value="rating">
            Highest Rated
          </option>
        </select>
      </div>

    </section>
  );
};

export default SearchFilter;