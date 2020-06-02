import React, { FC } from "react";
import { Stack, Button } from "@chakra-ui/core";
import { IoLogoGithub, IoLogoLinkedin, IoLogoDribbble } from "react-icons/io";

const SocialLinks: FC = () => {
  return (
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
  );
};

export default SocialLinks;
