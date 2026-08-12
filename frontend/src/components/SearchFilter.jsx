import Searchbar from "./Searchbar";

const SearchFilter = ({
  searchText,
  setSearchText,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="mt-6">

      {/* Airbnb-style search bar */}
      <Searchbar />

      {/* Search + Sort controls */}
      <div className="flex items-center justify-between px-6 md:px-10 mt-6">

        {/* Search input */}
        <input
          type="text"
          placeholder="Search destination..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full max-w-md border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-rose-500"
        />

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-3 ml-4 bg-white"
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