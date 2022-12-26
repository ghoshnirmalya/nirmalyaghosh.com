import NextImage from "next/image";

const imageKitLoader = ({ src, width, quality }) => {
  if (src[0] === "/") {
    src = src.slice(1);
  }

  const params = [`w-${width}`];

  if (quality) {
    params.push(`q-${quality}`);
  }

  const paramsString = params.join(",");

  let urlEndpoint = process.env.IMAGEKIT_URL_ENDPOINT;

  if (urlEndpoint?.[urlEndpoint?.length - 1] === "/") {
    urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  }

  return `${src}?tr=${paramsString}`;
};

export const Image = ({
  src,
  alt,
  width = "100",
  height = "100",
  ...rest
}: {
  src: string;
  alt: string;
  width: string | number;
  height: string | number;
}) => {
  return (
    <NextImage
      loader={imageKitLoader}
      src={src}
      alt={alt}
      width={typeof width === "string" ? parseInt(width) : width}
      height={typeof height === "string" ? parseInt(height) : height}
      blurDataURL={imageKitLoader({ src, width, quality: 1 })}
      placeholder="blur"
      {...rest}
    />
  );
};
