const Search = ({
  title,
  setTerm,
}) => {
  return (
    <div>
        <input
          type="text"
          className="input-search"
          placeholder={`Cerca un ${title}`}
          onChange={(e) => setTerm(e.target.value)}
          name="query"
          // onClick={(e) => e.tagert.value = ''}
        />
    </div>
  );
};

export default Search;