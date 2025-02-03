import { getEpisodeDetail } from "@/lib/api";
import { EpisodeDetailClient } from "./episode-detail-client";
import { notFound } from 'next/navigation';

async function fetchEpisodeDetail(param: string) {
    try {
      const episodeDetail = await getEpisodeDetail(param);
      if (!episodeDetail) {
        notFound();
      }
      return episodeDetail;
    } catch (error) {
      console.error("Error fetching episode details:", error);
      throw error;
    }
  }

export default async function EpisodeDetailPage({ params }: { params: { param: string } }) {
  const episodeDetail = await fetchEpisodeDetail(params.param);

  return <EpisodeDetailClient initialEpisodeDetail={episodeDetail} />;
}
