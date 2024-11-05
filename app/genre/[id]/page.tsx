import MoviesCaroussel from "@/components/MoviesCaroussel";
import { getDiscoverMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
  searchParams: {
    genre: string;
  };
}

async function GenreSearchPage({ params, searchParams }: Props) {
  if (!params.id) notFound();
  const { id } = params;
  const movies = await getDiscoverMovies(id);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">
          Results for "{searchParams.genre}"
        </h1>
      </div>
      <MoviesCaroussel title={``} movies={movies} isVertical />
    </div>
  );
}
export default GenreSearchPage;
