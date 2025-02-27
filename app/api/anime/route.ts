import { NextResponse } from "next/server"
import { getAnimeList } from "@/lib/api"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = Number(searchParams.get("page")) || 1

  try {
    const animeList = await getAnimeList(page)
    return NextResponse.json(animeList)
  } catch (error) {
    console.error("Error fetching anime list:", error);
    return NextResponse.json({ error: "Failed to fetch anime list" }, { status: 500 })
  }
}
