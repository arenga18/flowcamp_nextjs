import Image from "next/image";
import Link from "next/link";

export default function ListAnime({ title, image, id }) {
  return (
    <Link href={`/anime/${id}`}>
      <div className="min-w-max">
        <div className="shadow-md rounded-md mx-auto">
          <Image
            src={image}
            alt={title}
            width={150}
            height={200}
            className="hover:scale-105 object-contain"
          />
        </div>
      </div>
    </Link>
  );
}
