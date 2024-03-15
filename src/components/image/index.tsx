import Image, { ImageProps } from "next/image";
import { useState } from "react";

const BlurImage = ({ src, ...props }: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <Image
      {...props}
      alt={props.alt || ""}
      src={src}
      style={{
        filter: isLoaded ? "none" : "blur(5px)",
      }}
      onLoad={() => setIsLoaded(true)}
    />
  );
};

export default BlurImage;
