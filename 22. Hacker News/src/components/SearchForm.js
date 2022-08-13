import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();

  const handleSubmit = e => e.preventDefault();

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>search hacker news</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={e => handleSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
