import Searchbar from "./Searchbar";

const SearchFilter = ({ searchText, setSearchText,sortBy,setSortBy, }) => {
  return (
    <div className="my-8">
      <Searchbar />
      <input
            type="text"
            placeholder="Search destination..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full max-w-md border rounded-xl p-3 mt-6 mx-auto block"
            />
            <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border rounded-lg p-3 mt-4 ml-4">
                    <option value="">Sort By</option>
                    <option value="priceLow">Price: Low to High</option>
                    <option value="priceHigh">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    </select>
    </div>
  );
};

export default SearchFilter;