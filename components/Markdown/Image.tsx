import Image from "next/image";

interface MDXImageProps {
  src?: string;
  alt?: string;
}

const MDXImage = ({ src, alt }: MDXImageProps) => {
  return <Image src={src} alt={alt} layout="fill" />;
};

export default MDXImage;
