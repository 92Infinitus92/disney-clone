async function GenreDropdown() {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24 * 7,
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  return <div>GenreDropdown</div>;
}
export default GenreDropdown;
