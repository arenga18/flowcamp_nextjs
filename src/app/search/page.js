import Image from "next/image";
import ListAnime from "../components/listAnime";

export default async function SearchPage({ searchParams }) {
  const query = searchParams.q;
  const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`);
  const animes = await response.json();
  console.log(animes);

  return (
    <div className="container mx-auto px-10 mt-4">
      <h2 className="text-2xl font-bold mb-4">
        Search Results for &quot;{query}&quot;
      </h2>
      <div className="flex flex-wrap gap-4 justify-start items-center">
        {animes.data
          .filter(
            (anime, index, self) =>
              index === self.findIndex((a) => a.mal_id === anime.mal_id)
          )
          .map((anime) => (
            <ListAnime
              key={anime.mal_id}
              id={anime.mal_id}
              title={anime.title}
              image={anime.images.webp.image_url}
            />
          ))}
      </div>
    </div>
  );
}
