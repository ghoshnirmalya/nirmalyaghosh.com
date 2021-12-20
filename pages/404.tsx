import { Box, Center, Flex, Heading, SlideFade } from "@chakra-ui/react";

const NotFoundPage = () => {
  return (
    <SlideFade in>
      <Center minH="calc(100vh - 200px)">
        <Heading>Page not found!</Heading>
      </Center>
    </SlideFade>
  );
};

export default NotFoundPage;
