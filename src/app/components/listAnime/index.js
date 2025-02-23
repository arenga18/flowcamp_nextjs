import Image from "next/image";
import Link from "next/link";

export default function ListAnime({ title, image, id }) {
  return (
    <Link href={`/anime/${id}`}>
      <div className="min-w-max">
        <Image
          src={image}
          alt={title}
          width={160}
          height={250}
          className="hover:scale-105"
          style={{ height: "250px", objectFit: "cover" }}
        />
      </div>
    </Link>
  );
}
