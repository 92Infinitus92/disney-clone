import MoviesCaroussel from "@/components/MoviesCaroussel";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";
import { get } from "http";
import Image from "next/image";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  return (
    <main className="">
      {/* CarouseelBanner */}

      <div className="flex flex-col space-y-2 xl:-mt-48">
        {/* moviecaroussel */}
        <MoviesCaroussel title="Trending Now" movies={upcomingMovies} />

        <MoviesCaroussel title="Top Rated" movies={topRatedMovies} />

        <MoviesCaroussel title="Popular" movies={popularMovies} />
      </div>
    </main>
  );
}
