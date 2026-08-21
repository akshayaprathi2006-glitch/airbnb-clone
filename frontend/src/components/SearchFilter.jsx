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
    <div className="my-8">
      <Searchbar
        searchText={searchText}
        setSearchText={setSearchText}
        checkIn={checkIn}
        setCheckIn={setCheckIn}
        checkOut={checkOut}
        setCheckOut={setCheckOut}
        checkAvailability={checkAvailability}
      />

      <div className="flex justify-center mt-4">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded-full px-5 py-3 text-sm bg-white shadow-sm"
        >
          <option value="">Sort By</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;