import Image from "next/image";
import Link from "next/link";

const SingleImage = ({ data }) => {
  return (
    <Link href={data.urls.regular} target="_blank" rel="noreferrer">
      <Image
        className="h-72 w-full object-cover rounded-lg shadow-md"
        src={data.urls.small}
        alt={data.alt_description}
        width="0"
        height="0"
      />
    </Link>
  );
};

export default SingleImage;
