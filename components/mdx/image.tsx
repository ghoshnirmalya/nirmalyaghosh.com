import { Box, HStack, VStack } from "@chakra-ui/react";
import { FC } from "react";

interface IProps {
  src: string;
  alt: string;
}

const Image: FC<IProps> = ({ src, alt }) => {
  return (
    <VStack bg="gray.800" borderRadius="sm" mx={0} spacing={0}>
      <Box>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" />
      </Box>
      <HStack spacing={2} fontSize="sm" p={2}>
        <Box as="span">{alt}</Box>
        <Box as="a" href={src}>
          (Large preview)
        </Box>
      </HStack>
    </VStack>
  );
};

export default Image;
