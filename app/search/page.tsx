import { searchAnime } from "@/lib/db"
import { AnimeCard } from "@/components/anime-card"

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function SearchPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams
  const query = resolvedParams.q as string
  const results = await searchAnime(query)

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-4">Search Results for &quot;{query}&quot;</h1>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {results.map((anime) => (
            <AnimeCard key={anime.id} {...anime} />
          ))}
        </div>
      )}
    </div>
  )
}
