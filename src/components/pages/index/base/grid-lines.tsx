import { Box } from "@chakra-ui/react";

const GridLines = () => {
  return (
    <Box as="span">
      <Box
        display={{ base: "none", md: "block" }}
        position="absolute"
        top={0}
        left="50%"
        transform="translateX(-50%)"
        mx="auto"
        w="full"
        maxW="6xl"
        h="full"
      >
        <Box top="20%" position="absolute" w="full">
          <Box
            h="1px"
            bgGradient={["linear(to-r, gray.800, blue.100,gray.800)"]}
            opacity={0.15}
          />
          <Box
            h="1px"
            mt={2}
            bgGradient={["linear(to-r, gray.800, blue.100,gray.800)"]}
            opacity={0.15}
          />
        </Box>

        <Box bottom="20%" position="absolute" w="full">
          <Box
            h="1px"
            bgGradient={["linear(to-r, gray.800, blue.100,gray.800)"]}
            opacity={0.15}
          />
          <Box
            h="1px"
            mt={2}
            bgGradient={["linear(to-r, gray.800, blue.100,gray.800)"]}
            opacity={0.15}
          />
        </Box>
      </Box>

      <Box
        display={{ base: "none", md: "block" }}
        position="absolute"
        top={0}
        left="50%"
        transform="translateX(-50%)"
        mx="auto"
        w="full"
        maxW="lg"
        h="full"
      >
        <Box
          position="absolute"
          left={0}
          h="full"
          w="1px"
          bgGradient={["linear(to-b, gray.800, blue.100,gray.900)"]}
          opacity={0.15}
        />
        <Box
          position="absolute"
          left={2}
          h="full"
          w="1px"
          bgGradient={["linear(to-b, gray.800, blue.100,gray.900)"]}
          opacity={0.15}
        />
        <Box
          position="absolute"
          right={0}
          h="full"
          w="1px"
          bgGradient={["linear(to-b, gray.800, blue.100,gray.900)"]}
          opacity={0.15}
        />
        <Box
          position="absolute"
          right={2}
          h="full"
          w="1px"
          bgGradient={["linear(to-b, gray.800, blue.100,gray.900)"]}
          opacity={0.15}
        />
      </Box>

      <Box
        display={{ base: "none", md: "block" }}
        position="absolute"
        top={0}
        left="50%"
        transform="translateX(-50%)"
        mx="auto"
        w="full"
        maxW="6xl"
        h="full"
        opacity={0.1}
      >
        <Box
          position="absolute"
          left={0}
          h="full"
          w="1px"
          bgGradient={["linear(to-b, gray.800, blue.100,gray.900)"]}
          opacity={0.15}
        />
        <Box
          position="absolute"
          left={2}
          h="full"
          w="1px"
          bgGradient={["linear(to-b, gray.800, blue.100,gray.900)"]}
          opacity={0.15}
        />
        <Box
          position="absolute"
          right={0}
          h="full"
          w="1px"
          bgGradient={["linear(to-b, gray.800, blue.100,gray.900)"]}
          opacity={0.15}
        />
        <Box
          position="absolute"
          right={2}
          h="full"
          w="1px"
          bgGradient={["linear(to-b, gray.800, blue.100,gray.900)"]}
          opacity={0.15}
        />
      </Box>
    </Box>
  );
};

export default GridLines;
