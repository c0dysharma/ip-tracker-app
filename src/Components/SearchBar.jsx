import rightArrowImage from "../assets/images/icon-arrow.svg";

const SearchBar = ({ onInputChange, onSearch, inputRef }) => (
  <form
    onSubmit={onSearch}
    className="flex align-center justify-center mx-2 mb-4 md:mb-14 md:mx-8"
  >
    <input
      type="text"
      className="w-full max-w-xl px-4 py-2 rounded-l-xl text-sm border-4 border-transparent focus:outline-none md:px-8 md:py-4 md:text-lg"
      placeholder="Search for any IP address or domain."
      onChange={onInputChange}
      id="searchInput"
      ref={inputRef}
    />
    <button type="submit" className="bg-black rounded-r-xl px-4 md:px-6">
      <img src={rightArrowImage} alt="" className="w-4 h-4" />
    </button>
  </form>
);

export default SearchBar;
