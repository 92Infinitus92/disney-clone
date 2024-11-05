"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

Autoplay.globalOptions = {
  delay: 8000,
};

function CarousselBanner({ movies }: { movies: any[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);
  return (
    <div
      ref={emblaRef}
      className="overflow-hidden lg:-mt-40 relative cursor-pointer"
    >
      <div className="flex">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-full min-w-0 relative">
            hello
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarousselBanner;
