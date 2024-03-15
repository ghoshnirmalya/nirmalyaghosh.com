import { Box } from "@chakra-ui/react";

import GridLines from "components/pages/index/base/grid-lines";
import Jumbotron from "components/pages/index/base/jumbotron";

const Page = () => {
  return (
    <Box
      as="main"
      bgColor="gray.900"
      bgGradient={["conic(gray.800, gray.900,gray.800)"]}
      display="flex"
      alignItems="center"
      flex="1"
      position="relative"
    >
      <GridLines />

      <Box maxW="2xl" mx="auto" p={8}>
        <Jumbotron />
      </Box>
    </Box>
  );
};

export default Page;
