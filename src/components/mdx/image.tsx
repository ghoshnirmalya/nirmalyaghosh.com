import { Box, Link, VStack } from "@chakra-ui/react";
import BlurImage from "components/image";
import { FC } from "react";

interface IProps {
  src: string;
  alt: string;
  height: number;
  width: number;
}

const Image: FC<IProps> = ({ src, alt, height, width }) => {
  return (
    <Link
      href={src}
      isExternal
      _hover={{
        textDecoration: "none",
      }}
    >
      <VStack
        bg="gray.900"
        borderRadius="sm"
        mx={0}
        spacing={0}
        as="span"
        borderWidth={1}
        borderColor="gray.700"
        overflow="hidden"
        shadow="xl"
      >
        <Box pos="relative" w="100%" h="100%" className="image">
          <BlurImage src={src} alt={alt} height={height} width={width} />
        </Box>
        <Box fontSize="sm" p={2} as="span">
          {alt}
        </Box>
      </VStack>
    </Link>
  );
};

export default Image;
