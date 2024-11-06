import AIAssistant from "@/components/AIAssistant";
import MoviesCaroussel from "@/components/MoviesCaroussel";
import { getPopularMovies, getSearchedMovie } from "@/lib/getMovies";
import { getMovieSuggestions } from "@/lib/getMovieSuggestions";
import { notFound } from "next/navigation";

interface SearchPageProps {
  params: { searchTerm: string };
}

export default async function SearchPage({ params }: SearchPageProps) {
  if (!params.searchTerm) notFound();

  const termToUse = decodeURI(params.searchTerm);

  const [movies, popularMovies, suggestions] = await Promise.all([
    getSearchedMovie(termToUse),
    getPopularMovies(),
    getMovieSuggestions(termToUse),
  ]);

  console.log(suggestions);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for "{termToUse}"</h1>
        <AIAssistant suggestions={suggestions} />
        <MoviesCaroussel title={""} movies={movies} isVertical />
        <MoviesCaroussel title="You may also like" movies={popularMovies} />
      </div>
    </div>
  );
}
