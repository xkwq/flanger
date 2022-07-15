import { useCallback } from "react";

const SearchBar = () => {
  const searchInput = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          ref={searchInput}
          className="px-4 py-2 mr-2 text-2xl border-2 w-fit rounded-2xl text-slate-300 bg-slate-800 border-slate-900"
        />
        <input
          type="submit"
          value="Submit"
          className="w-auto px-4 py-2 text-2xl rounded-2xl text-slate-300 bg-slate-900 hover:bg-stone-900 hover:cursor-pointer"
        />
      </form>
    </>
  );
};

export default SearchBar;
