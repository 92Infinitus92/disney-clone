"use client";

import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  movies: any[];
  isVertical?: boolean;
};

function MoviesCaroussel({ title, movies, isVertical }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: React.WheelEvent) => {
    if (containerRef.current && !isVertical) {
      e.preventDefault();
      containerRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="z-50">
      <div className="relative">
        {!isVertical && (
          <>
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
              onClick={() => {
                if (containerRef.current) {
                  containerRef.current.scrollLeft -= 200; // Adjust scroll amount as needed
                }
              }}
            >
              &#8592;
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
              onClick={() => {
                if (containerRef.current) {
                  containerRef.current.scrollLeft += 200; // Adjust scroll amount as needed
                }
              }}
            >
              &#8594;
            </button>
          </>
        )}
        <div
          ref={containerRef}
          onWheel={handleWheel}
          className={cn(
            "flex space-x-4 overflow-x-scroll px-5 lg:px-10 py-5",
            isVertical
              ? "flex-col space-x-0 space-y-12 overflow-y-scroll scrollbar-hide"
              : "scrollbar-hide"
          )}
        >
          {isVertical
            ? movies.map((movie) => (
                <div
                  key={movie.id}
                  className="flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
                >
                  <MovieCard movie={movie} />
                  <div className="max-w-2xl">
                    <p>
                      {movie.title} {movie.release_date?.split("-")[0]}
                    </p>
                    <hr className="mb-3" />
                    <p>{movie.overview}</p>
                  </div>
                </div>
              ))
            : movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </div>
  );
}

export default MoviesCaroussel;
