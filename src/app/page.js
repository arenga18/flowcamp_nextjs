import Image from "next/image";
import ListAnime from "./components/listAnime";
import Navbar from "./components/navbar";

export default async function Home() {
  const response = await fetch(`https://api.jikan.moe/v4/anime`);
  const responseTopAnime = await fetch(`https://api.jikan.moe/v4/top/anime`);
  const topAnimes = await responseTopAnime.json();
  const animes = await response.json();
  console.log(topAnimes);
  return (
    <div className="container mx-auto px-10 mt-4">
      <section>
        <h2 className="text-xl font-bold">New this week</h2>
        <div className="flex overflow-x-auto gap-4 justify-start items-center">
          {animes.data.map((anime) => (
            <ListAnime
              key={anime.mal_id}
              id={anime.mal_id}
              title={anime.title}
              image={anime.images.webp.image_url}
            />
          ))}
        </div>
      </section>
      <section>
        <h2 className="mt-10 text-xl font-bold">Top Anime</h2>
        <div className="flex overflow-x-auto gap-4 justify-start items-center">
          {topAnimes.data.map((anime) => (
            <ListAnime
              key={anime.mal_id}
              title={anime.title}
              image={anime.images.webp.image_url}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
