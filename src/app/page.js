import ListAnime from "./components/listAnime";

export default async function Home() {
  try {
    const [response, responseTopAnime] = await Promise.all([
      fetch("https://api.jikan.moe/v4/anime"),
      fetch("https://api.jikan.moe/v4/top/anime"),
    ]);

    if (!response.ok || !responseTopAnime.ok) {
      throw new Error("Failed to fetch anime data");
    }

    const { data: animes } = await response.json();
    const { data: topAnimes } = await responseTopAnime.json();

    return (
      <div className="container mx-auto px-10 mt-4">
        {/* New This Week */}
        <section>
          <h2 className="text-xl font-bold">New This Week</h2>
          <div className="flex overflow-x-auto overflow-y-hidden gap-4">
            {animes.map((anime) => (
              <ListAnime
                key={anime.mal_id}
                id={anime.mal_id}
                title={anime.title}
                image={anime.images.webp.image_url}
              />
            ))}
          </div>
        </section>

        {/* Top Anime */}
        <section>
          <h2 className="mt-10 text-xl font-bold">Top Anime</h2>
          <div className="flex overflow-x-auto overflow-y-hidden gap-4">
            {topAnimes.map((anime) => (
              <ListAnime
                key={anime.mal_id}
                id={anime.mal_id}
                title={anime.title}
                image={anime.images.webp.image_url}
              />
            ))}
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className="container mx-auto px-10 mt-4">
        <h2 className="text-xl font-bold text-red-500">
          Failed to Load Anime Data
        </h2>
      </div>
    );
  }
}
