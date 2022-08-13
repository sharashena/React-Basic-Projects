import { useRef, useEffect } from "react";
import { useGlobalContext } from "../helpers/context";

const SearchForm = () => {
  const { setSearch } = useGlobalContext();
  const searchValue = useRef("");

  const handleChange = () => {
    setSearch(searchValue.current.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
