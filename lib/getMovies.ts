async function fetchFromTMDB(url: URL, cacheTime?: number) {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24 * 7,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

export async function getUpcomingMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/upcoming");

  const data = await fetchFromTMDB(url);
  return data.results;
}

export async function getTopRatedMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/top_rated");

  const data = await fetchFromTMDB(url);
  return data.results;
}

export async function getPopularMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/popular");

  const data = await fetchFromTMDB(url);
  return data.results;
}

export async function getDiscoverMovies(genreId?: string, keywords?: string) {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");

  keywords && url.searchParams.set("with_keywords", keywords);
  genreId && url.searchParams.set("with_genres", genreId);

  const data = await fetchFromTMDB(url);
  return data.results;
}

export async function getSearchedMovie(term: string) {
  const url = new URL("https://api.themoviedb.org/3/search/movie");
  url.searchParams.set("query", term);

  const data = await fetchFromTMDB(url);
  return data.results;
}
