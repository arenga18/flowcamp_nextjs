import Link from "next/link";
import Image from "next/image";

export default async function DetailPage({ params }) {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${params.id}`);
  const anime = await response.json();
  const data = anime.data;

  return (
    <div className="bg-black absolute top-0 min-w-full text-white">
      <div className="relative h-[90vh]">
        <Image
          src={data.images.jpg.large_image_url}
          alt={data.title}
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-10 left-10 max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">{data.title}</h1>
          <div className="flex gap-4 mb-6">
            <span className="bg-red-600 px-3 py-1 rounded-full text-sm">
              {data.rating}
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">
              {data.type}
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">
              {data.episodes} Episodes
            </span>
          </div>
          <p className="text">{data.synopsis}</p>
        </div>
      </div>

      {/* Detail Section */}
      <div className="p-10">
        <h2 className="text-2xl font-bold mb-4">Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Genres</h3>
            <div className="flex flex-wrap gap-2">
              {data.genres.map((genre) => (
                <span
                  key={genre.mal_id}
                  className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                  {genre.name}
                </span>
              ))}
            </div>
            {/* Trailer Section */}
            {data.trailer?.embed_url && (
              <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">Trailer</h2>
                <div className="aspect-video w-full max-w-4xl">
                  <iframe
                    src={data.trailer.embed_url}
                    title={`${data.title} Trailer`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"></iframe>
                </div>
              </div>
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Information</h3>
            <ul className="space-y-2">
              <li>
                <strong>Status:</strong> {data.status}
              </li>
              <li>
                <strong>Released:</strong> {data.aired?.string}
              </li>
              <li>
                <strong>Studio:</strong>{" "}
                {data.studios?.map((studio) => studio.name).join(", ")}
              </li>
              <li>
                <strong>Source:</strong> {data.source}
              </li>
              <li>
                <strong>Duration:</strong> {data.duration}
              </li>
            </ul>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-10">
          <Link
            href="/"
            className="bg-red-600 px-6 py-2 rounded-lg text-lg hover:bg-red-700 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
