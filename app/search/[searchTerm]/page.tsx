import { notFound } from "next/navigation";

export default function SearchTermPage({
  params,
}: {
  params: { searchTerm: string };
}) {
  const { searchTerm } = params;
  if (!searchTerm) notFound();

  const termToUse = decodeURI(searchTerm);
  return <div>SearchTermPage: {searchTerm}</div>;
}
