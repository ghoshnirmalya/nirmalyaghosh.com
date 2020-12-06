import React, { FC } from "react";
import {
  Text,
  useColorMode,
  Box,
  Stack,
  Input,
  Button,
  Heading,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const NewsletterSubscriptionForm: FC = () => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "gray.900", dark: "gray.100" };
  const cardColor = { light: "gray.100", dark: "gray.900" };

  return (
    <Box
      p={4}
      rounded="md"
      bg={cardBgColor[colorMode]}
      color={cardColor[colorMode]}
    >
      <Stack spacing={4}>
        <Box>
          <Heading as="h2" size="lg">
            Newsletter
          </Heading>
        </Box>
        <form
          action="https://www.getrevue.co/profile/ghoshnirmalya/add_subscriber"
          method="post"
          id="revue-form"
          name="revue-form"
          target="_blank"
        >
          <Stack spacing={4}>
            <Box>
              <Text>
                Subscribe to my newsletter to know more about the latest
                technologies. No spam ever!
              </Text>
            </Box>
            <Box
              rounded="md"
              color={cardBgColor[colorMode]}
              bg={cardColor[colorMode]}
            >
              <InputGroup size="md">
                <Input
                  type="email"
                  name="member[email]"
                  id="member_email"
                  aria-describedby="email-helper-text"
                  placeholder="john@doe.com"
                  p={2}
                />
                <InputRightElement width="auto">
                  <Button size="sm" type="submit" id="member_submit" m={2}>
                    Subscribe
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
};

export default NewsletterSubscriptionForm;
