import { FC } from "react";
import { Box, Grid, Stack, useColorMode } from "@chakra-ui/core";
import Publications from "components/publications";
import SocialLinks from "components/social-links";
import IPublication from "types/publication";

interface Props {
  publications: IPublication[];
}

const Page: FC<Props> = ({ publications = [] }) => {
  const { colorMode } = useColorMode();
  const sectionBgColor = { light: "white", dark: "gray.900" };
  const sectionColor = { light: "gray.900", dark: "white" };

  return (
    <Box bg={sectionBgColor[colorMode]} color={sectionColor[colorMode]}>
      <Box maxW="6xl" mx="auto" px={4} py={8}>
        <Grid templateColumns={["1fr", "1fr", "1fr", "2fr 1fr"]} gap={8}>
          <Stack spacing={16} order={[2, 2, 2, 1]}>
            <Box as="section">
              <Publications publications={publications} hideViewAllLinksNode />
            </Box>
          </Stack>
          <Box order={[1, 1, 1, 2]}>
            <Box position="sticky" top={100}>
              <SocialLinks />
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Page;
