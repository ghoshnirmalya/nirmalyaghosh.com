import { FC } from "react";
import { Box, useColorMode, Grid, Stack } from "@chakra-ui/core";
import Jumbotron from "components/pages/index/jumbotron";
import Articles from "components/pages/index/articles";
import Publications from "components/pages/index/publications";

interface Article {
  id: number;
  title: string;
}

interface Props {
  articles: Article[];
}

const Page: FC<Props> = ({ articles }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.100", dark: "gray.900" };
  const color = { light: "gray.900", dark: "gray.100" };

  return (
    <>
      <Box as="section" bg={bgColor[colorMode]} color={color[colorMode]}>
        <Box maxW="6xl" mx="auto" p={4}>
          <Jumbotron />
        </Box>
      </Box>
      <Box maxW="6xl" mx="auto" px={4} py={8}>
        <Grid templateColumns={["1fr", "1fr", "1fr", "2fr 1fr"]} gap={8}>
          <Stack spacing={16}>
            <Box as="section">
              <Articles articles={articles} />
            </Box>
            <Box as="section">
              <Publications />
            </Box>
          </Stack>
          <Box>
            <Box h={32} bg="transparent" />
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Page;
