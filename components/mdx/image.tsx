import { Box, VStack, Link } from "@chakra-ui/react";
import { FC, useState } from "react";
import NextImage from "next/image";

interface IProps {
  src: string;
  alt: string;
  height: number;
  width: number;
}

const Image: FC<IProps> = ({ src, alt, height, width }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link href={src} target="_blank" rel="noopener noreferrer">
      <VStack
        bg="gray.900"
        borderRadius="sm"
        mx={0}
        spacing={0}
        as="span"
        borderWidth={1}
        borderColor="gray.800"
        overflow="hidden"
        shadow="xl"
      >
        <Box pos="relative" w="100%" h="100%" className="image">
          <NextImage
            src={src}
            alt={alt}
            height={height}
            width={width}
            className={loaded ? "unblur" : ""}
            onLoadingComplete={() => setLoaded(true)}
          />
        </Box>
        <Box fontSize="sm" p={2} as="span">
          {alt}
        </Box>
      </VStack>
    </Link>
  );
};

export default Image;
