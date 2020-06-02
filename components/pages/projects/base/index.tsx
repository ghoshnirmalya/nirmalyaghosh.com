import { FC } from "react";
import { Box, Grid, Stack, useColorMode } from "@chakra-ui/core";
import Projects from "components/projects";
import SocialLinks from "components/social-links";
import IProject from "types/project";

interface Props {
  projects: IProject[];
}

const Page: FC<Props> = ({ projects = [] }) => {
  const { colorMode } = useColorMode();
  const sectionBgColor = { light: "gray.100", dark: "gray.900" };
  const sectionColor = { light: "gray.900", dark: "gray.100" };

  return (
    <Box bg={sectionBgColor[colorMode]} color={sectionColor[colorMode]}>
      <Box maxW="6xl" mx="auto" px={4} py={8}>
        <Grid templateColumns={["1fr", "1fr", "1fr", "2fr 1fr"]} gap={8}>
          <Stack spacing={16} order={[2, 2, 2, 1]}>
            <Box as="section">
              <Projects projects={projects} hideViewAllLinksNode />
            </Box>
          </Stack>
          <Box order={[1, 1, 1, 2]}>
            <SocialLinks />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Page;
