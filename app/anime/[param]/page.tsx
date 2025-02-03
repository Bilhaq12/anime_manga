import { getEpisodeDetail } from "@/lib/api"
import { EpisodeDetailClient } from "./episode-detail-client"
import type { EpisodeDetail } from "@/types/anime"

export default async function EpisodeDetailPage({ params }: { params: { param: string } }) {
  const episodeDetail: EpisodeDetail = await getEpisodeDetail(params.param)

  return <EpisodeDetailClient initialEpisodeDetail={episodeDetail} />
}
