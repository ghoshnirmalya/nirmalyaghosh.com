import { Box, Heading, SlideFade } from "@chakra-ui/react";

const NotFoundPage = () => {
  return (
    <SlideFade in>
      <Box
        maxW="2xl"
        mx="auto"
        px={4}
        py={8}
        display="flex"
        justifyContent="center"
      >
        <Heading>Page not found!</Heading>
      </Box>
    </SlideFade>
  );
};

export default NotFoundPage;
