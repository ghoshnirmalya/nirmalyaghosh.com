import React, { FC } from "react";
import { Box, Stack, Button, Heading } from "@chakra-ui/core";
import { IoLogoGithub, IoLogoLinkedin, IoLogoDribbble } from "react-icons/io";

const SocialLinks: FC = () => {
  return (
    <Box position="sticky" top={100} rounded="md">
      <Box py={4} borderTopLeftRadius="md" borderTopRightRadius="md">
        <Heading as="h4" size="md">
          Follow me
        </Heading>
      </Box>
      <Stack spacing={4} isInline>
        <Button
          leftIcon={IoLogoGithub}
          bg="#333"
          color="#fff"
          textAlign="left"
          _hover={{
            color: "#fff",
          }}
        >
          Github
        </Button>
        <Button
          leftIcon={IoLogoLinkedin}
          bg="#0e76a8"
          color="#fff"
          textAlign="left"
          _hover={{
            color: "#fff",
          }}
        >
          LinkedIn
        </Button>
        <Button
          leftIcon={IoLogoDribbble}
          bg="#ea4c89"
          color="#fff"
          textAlign="left"
          _hover={{
            color: "#fff",
          }}
        >
          Dribbble
        </Button>
      </Stack>
    </Box>
  );
};

export default SocialLinks;
