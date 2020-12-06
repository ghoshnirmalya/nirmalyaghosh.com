import {
  Box,
  Grid,
  Stack,
  Heading,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import withNavbarLayout from "lib/with-navbar-layout";
import React, { FC } from "react";
import dynamic from "next/dynamic";

const NewsletterSubscriptionForm = dynamic(
  import("components/pages/index/newsletter-subscription-form")
);

const Page: FC = () => {
  const headingNode = () => {
    return (
      <Box>
        <Stack spacing={2}>
          <Heading as="h1" size="xl">
            Newsletter
          </Heading>
          <Text>
            Subscribe to my newsletter to know more about the latest
            technologies. No spam ever!
          </Text>
        </Stack>
      </Box>
    );
  };

  const formNode = () => {
    return (
      <form
        action="https://www.getrevue.co/profile/ghoshnirmalya/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
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
      </form>
    );
  };

  return (
    <Box maxW="3xl" mx="auto" px={4} py={8}>
      <Grid templateColumns="1fr">
        <Box as="section">
          <Stack spacing={8}>
            {headingNode()}
            {formNode()}
          </Stack>
        </Box>
      </Grid>
    </Box>
  );
};

export default withNavbarLayout(Page);
