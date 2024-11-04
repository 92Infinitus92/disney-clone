function GenreSearchPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: {
    genre: string;
  };
}) {
  const { id } = params;
  return (
    <div>
      GenreSearchPage: {id}
      <h2>{searchParams.genre}</h2>
    </div>
  );
}
export default GenreSearchPage;
