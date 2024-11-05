import React from "react";
import MovieCard from "./MovieCard";

type Props = {
  title?: string;
  movies: any[];
  isVertical?: boolean;
};

function MoviesCaroussel({ title, movies, isVertical }: Props) {
  return (
    <div className="z-50">
      <h2>{title}</h2>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MoviesCaroussel;
