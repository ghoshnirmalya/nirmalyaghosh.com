import { Box, HStack, Link, Text, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

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
    <Box bg="gray.800" color="gray.100" p={4} rounded="sm">
      <VStack spacing={4} align="left">
        <Text>Share</Text>
        <HStack spacing={2}>
          {socialLinks.map((link, index) => {
            return (
              <Link
                key={index}
                py={2}
                px={4}
                href={link.href}
                rounded="sm"
                bg={link.bg}
                color="#fff"
                fontWeight="bold"
                isExternal
              >
                <HStack spacing={2} alignItems="center">
                  <Box as={link.icon} /> <Text fontSize="sm">{link.label}</Text>
                </HStack>
              </Link>
            );
          })}
        </HStack>
      </VStack>
    </Box>
  );
};

export default SocialShare;
