function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex justify-center mb-12">
      <input
        type="text"
        placeholder="Search by location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded-lg px-4 py-3 w-80 shadow-sm focus:outline-none"
      />
    </div>
  );
}

export default SearchBar;
