import React, { FC } from "react";
import {
  Link,
  Text,
  useColorMode,
  Box,
  Image,
  Stack,
  Icon,
} from "@chakra-ui/core";

const NewsletterSubscriptionForm: FC = () => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "gray.900", dark: "white" };
  const cardColor = { light: "white", dark: "gray.900" };
  const MAILCHIMP_SIGNUP_FORM_URL = "http://eepurl.com/g6SNEv";

  return (
    <Link
      as="a"
      target="blank"
      href={MAILCHIMP_SIGNUP_FORM_URL}
      bg={cardBgColor[colorMode]}
      color={cardColor[colorMode]}
      p={8}
      rounded="md"
      shadow="md"
      w="full"
      d="flex"
      flexDirection="column"
      textAlign="center"
    >
      <Stack spacing={4}>
        <Box d="flex" justifyContent="center">
          <Image
            objectFit="cover"
            src="/images/common/newsletter-subscription.svg"
            alt="Subscribe to my newsletter"
            size={32}
            bg={cardColor[colorMode]}
            color={cardBgColor[colorMode]}
            rounded="full"
            p={2}
          />
        </Box>
        <Box
          bg={cardColor[colorMode]}
          color={cardBgColor[colorMode]}
          fontSize="lg"
          fontWeight="bold"
          p={4}
          rounded="md"
          shadow="md"
          mx="auto"
        >
          <Stack spacing={4} isInline alignItems="center">
            <Text>Subscribe to my newsletter</Text>
            <Icon name="external-link" />
          </Stack>
        </Box>
      </Stack>
    </Link>
  );
};

export default NewsletterSubscriptionForm;
