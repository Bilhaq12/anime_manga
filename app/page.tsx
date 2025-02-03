import { Hero } from "@/components/hero"
import { AnimeList } from "@/components/anime-list"
import { FeaturedCollection } from "@/components/featured-collection"
import { getAnimeList } from "@/lib/api"
import type { AnimeResponse } from "@/types/anime"

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Home({ searchParams }: PageProps) {
  const resolvedParams = await searchParams
  const page = Number(resolvedParams.page) || 1
  let animeList: AnimeResponse | undefined
  let error: string | undefined

  try {
    animeList = await getAnimeList(page)
  } catch (e) {
    console.error("Error fetching anime list:", e)
    error = e instanceof Error ? e.message : "An unknown error occurred"
  }

  return (
    <div className="bg-[#0f0f0f] min-h-screen">
      <Hero />
      <div className="container py-8 space-y-12">
        {error ? (
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4 text-red-500">Error</h2>
            <p className="text-white">{error}</p>
          </div>
        ) : (
          <AnimeList initialAnimeList={animeList} />
        )}
        <FeaturedCollection />
      </div>
    </div>
  )
}
