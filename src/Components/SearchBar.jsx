import rightArrowImage from "../assets/images/icon-arrow.svg";

const SearchBar = ({ onInputChange, onSearch }) => (
  <form
    onSubmit={onSearch}
    className="flex align-center justify-center mx-8 mb-8 md:mb-14"
  >
    <input
      type="text"
      className="w-full max-w-xl px-8 py-4 rounded-l-xl text-lg border-4 border-transparent focus:outline-none"
      placeholder="Search for any IP address or domain."
      onChange={onInputChange}
      id="searchInput"
    />
    <button type="submit" className="bg-black rounded-r-xl px-6">
      <img src={rightArrowImage} alt="" className="w-4 h-4" />
    </button>
  </form>
);

export default SearchBar;
