import { Box, HStack, VStack, Link } from "@chakra-ui/react";
import { FC } from "react";

interface IProps {
  src: string;
  alt: string;
}

const Image: FC<IProps> = ({ src, alt }) => {
  return (
    <Link href={src} target="_blank" rel="noopener noreferrer">
      <VStack bg="gray.800" borderRadius="sm" mx={0} spacing={0} as="span">
        <Box as="span">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} loading="lazy" />
        </Box>
        <Box fontSize="sm" p={2} as="span">
          {alt}
        </Box>
      </VStack>
    </Link>
  );
};

export default Image;
