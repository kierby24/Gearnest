function SearchBar() {
    return (
      <div className="search-container">
  
        <div className="search-box">
  
          <input
            type="text"
            placeholder="Search products..."
          />
  
          <button className="search-button">
            ⌕
          </button>
  
        </div>
  
      </div>
    );
  }
  
  export default SearchBar;