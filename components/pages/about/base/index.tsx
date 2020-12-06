import React, { FC } from "react";
import {
  Box,
  Grid,
  Stack,
  Heading,
  Image,
  Text,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import withNavbarLayout from "lib/with-navbar-layout";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const Page: FC = () => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "white", dark: "gray.900" };
  const cardColor = { light: "gray.900", dark: "white" };

  const headingNode = () => {
    return (
      <Stack isInline spacing={4} alignItems="center">
        <Box>
          <Image
            objectFit="cover"
            src="/images/common/avatar.png"
            alt="Nirmalya Ghosh"
            size={20}
            bg={cardColor[colorMode]}
            color={cardBgColor[colorMode]}
            rounded="full"
            p={1}
          />
        </Box>
        <Box>
          <Stack spacing={2}>
            <Heading as="h1" size="xl">
              Nirmalya Ghosh
            </Heading>
            <Text>A little bit about me</Text>
          </Stack>
        </Box>
      </Stack>
    );
  };

  const bioDescriptionNode = () => {
    return (
      <Box className="article">
        <Text fontWeight="bold">
          Computer Science Engineer having interest in web-designing and
          development with an eye for detail.
        </Text>
        <Text>
          I'm also a big fan of{" "}
          <Box as="span" fontWeight="bold">
            React.js
          </Box>{" "}
          and have{" "}
          <Box as="span" fontWeight="bold">
            around 5 years
          </Box>{" "}
          experience with it. I have also fiddled with Ruby on Rails and Elixir.
          I'm eager to learn new frameworks, libraries and languages like Elm,
          Vue.js and ReasonML. I'm also interested in learning Go and Python.
        </Text>
        <Text>
          Though I spend most of my time writing code for building User
          Interfaces, I've also fiddled with many Back-end technologies. I like
          enjoying working in the intersection of design and development. I feel
          most productive when I'm able to design User Interfaces which not only
          look good but has a good performance as well.
        </Text>
      </Box>
    );
  };

  const socialLinksNode = () => {
    return (
      <Stack spacing={4}>
        <Stack spacing={8}>
          <Heading as="h2" size="lg">
            Social profiles
          </Heading>
          <Text>You can find me in the following social websites:</Text>
        </Stack>
        <Box d="flex" alignItems="center">
          <Stack spacing={4} isInline>
            <Link
              py={2}
              px={4}
              href="https://github.com/ghoshnirmalya"
              rounded="md"
              bg="#333"
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <Stack spacing={2} isInline alignItems="center">
                <Box as={IoLogoGithub} /> <Text>Github</Text>
              </Stack>
            </Link>
            <Link
              py={2}
              px={4}
              href="https://www.linkedin.com/in/ghoshnirmalya/"
              rounded="md"
              bg="#0e76a8"
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <Stack spacing={2} isInline alignItems="center">
                <Box as={IoLogoLinkedin} /> <Text>LinkedIn</Text>
              </Stack>
            </Link>
          </Stack>
        </Box>
      </Stack>
    );
  };

  return (
    <Box maxW="3xl" mx="auto" px={4} py={8}>
      <Grid templateColumns="1fr">
        <Box as="section">
          <Stack spacing={8}>
            {headingNode()}
            {bioDescriptionNode()}
            {socialLinksNode()}
          </Stack>
        </Box>
      </Grid>
    </Box>
  );
};

export default withNavbarLayout(Page);
