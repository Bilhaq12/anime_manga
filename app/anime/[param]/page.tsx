import { getEpisodeDetail } from "@/lib/api";
import { EpisodeDetailClient } from "./episode-detail-client";
import { notFound } from 'next/navigation';

interface EpisodeDetailPageProps {
  params: { param: string };
}

interface EpisodeDetail {
  title: string;
  description: string;
  episodes: any;
}


async function fetchEpisodeDetail(param: string): Promise<EpisodeDetail | null> {
  try {
    const episodeDetail = await getEpisodeDetail(param);

    if (!episodeDetail) {
      notFound();
      return null;
    }

    return episodeDetail;
  } catch (error) {
    console.error("Error fetching episode details:", error);
    throw error;
  }
}

export default async function EpisodeDetailPage({ params }: EpisodeDetailPageProps) {
  const episodeDetail = await fetchEpisodeDetail(params.param);

  if (!episodeDetail) {
    return <div>Loading...</div>;
  }

  return <EpisodeDetailClient initialEpisodeDetail={episodeDetail} />;
}
