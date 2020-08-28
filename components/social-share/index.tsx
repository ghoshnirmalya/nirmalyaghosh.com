import { Stack, Link, Box, Text } from "@chakra-ui/core";
import React, { FC } from "react";
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoReddit,
} from "react-icons/io";

interface IProps {
  title: string;
  url?: string;
}

const SocialShare: FC<IProps> = ({ title, url = window.location.href }) => {
  const socialLinks = [
    {
      href: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
      label: "Twitter",
      icon: IoLogoTwitter,
      bg: "#1DA1F2",
    },
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      label: "Facebook",
      icon: IoLogoFacebook,
      bg: "#4267B2",
    },
    {
      href: `https://www.linkedin.com/shareArticle?url=${url}&title=${title}`,
      label: "LinkedIn",
      icon: IoLogoLinkedin,
      bg: "#2867B2",
    },
  ];

  return (
    <Stack spacing={2}>
      <Text fontWeight="bold">Share this post:</Text>
      <Stack spacing={2} isInline>
        {socialLinks.map((link, index) => {
          return (
            <Link
              key={index}
              py={2}
              px={4}
              href={link.href}
              rounded="md"
              bg={link.bg}
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <Stack spacing={2} isInline alignItems="center">
                <Box as={link.icon} /> <Text fontSize="xs">{link.label}</Text>
              </Stack>
            </Link>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default SocialShare;
