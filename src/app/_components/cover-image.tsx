import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import { Artist } from "@/interfaces/artist";

type Props = {
  title: string;
  src: string;
  slug?: string;
  artistName?: string;
  artistUrl?: string;
};

const CoverImage = ({ title, src, slug, artistName, artistUrl }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm w-full", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={1300}
      height={630}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>

      ) : (
        <>
        {image}
        {artistName && artistUrl ? (<p className="text-center m-2">{artistName} did this photo. Say hi at <span className="font-bold"><a href={artistUrl} target="_blank">{artistUrl}</a></span></p>): ''}
        
        </>
      )}
    </div>
  );
};

export default CoverImage;
