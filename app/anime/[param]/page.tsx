import { getEpisodeDetail } from "@/lib/api"
import { EpisodeDetailClient } from "./episode-detail-client"
import type { EpisodeDetail } from "@/types/anime" // Assuming you have this type defined

interface PageProps {
  params: Promise<{ param: string }>
}

export default async function EpisodeDetailPage({ params }: PageProps) {
  const resolvedParams = await params
  const episodeDetail: EpisodeDetail = await getEpisodeDetail(resolvedParams.param)

  return <EpisodeDetailClient initialEpisodeDetail={episodeDetail} />
}
