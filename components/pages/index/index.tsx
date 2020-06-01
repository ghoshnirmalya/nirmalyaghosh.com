import { FC } from "react";
import { Box, Grid, Stack, useColorMode } from "@chakra-ui/core";
import Jumbotron from "components/pages/index/jumbotron";
import Articles from "components/pages/index/articles";
import Publications from "components/pages/index/publications";
import SocialLinks from "components/pages/index/social-links";

interface Article {
  id: number;
  title: string;
}

interface Props {
  articles: Article[];
}

const Page: FC<Props> = ({ articles }) => {
  const { colorMode } = useColorMode();
  const sectionBgColor = { light: "gray.100", dark: "gray.900" };
  const sectionColor = { light: "gray.900", dark: "gray.100" };

  return (
    <>
      <Box
        as="section"
        bg={sectionBgColor[colorMode]}
        color={sectionColor[colorMode]}
      >
        <Box maxW="6xl" mx="auto" p={4}>
          <Jumbotron />
        </Box>
      </Box>
      <Box maxW="6xl" mx="auto" px={4} py={8}>
        <Grid templateColumns={["1fr", "1fr", "1fr", "2fr 1fr"]} gap={8}>
          <Stack spacing={16} order={[2, 2, 2, 1]}>
            <Box as="section">
              <Articles articles={articles} />
            </Box>
            <Box as="section">
              <Publications />
            </Box>
          </Stack>
          <Box order={[1, 1, 1, 2]}>
            <SocialLinks />
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Page;
