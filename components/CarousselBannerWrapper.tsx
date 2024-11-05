import { getDiscoverMovies } from "@/lib/getMovies";
import React from "react";
import CarousselBanner from "./CarousselBanner";

async function CarousselBannerWrapper({
  id,
  keywords,
}: {
  id: string;
  keywords?: string;
}) {
  const movies = await getDiscoverMovies(id, keywords);
  return <CarousselBanner movies={movies} />;
}

export default CarousselBannerWrapper;
