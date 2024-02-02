function SearchMovies(params) {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <h2>Search Movie</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="search"></input>
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default SearchMovies;
