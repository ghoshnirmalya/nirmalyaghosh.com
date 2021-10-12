import { Box, Heading } from "@chakra-ui/react";

const NotFoundPage = () => {
  return (
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
  );
};

export default NotFoundPage;
