import { Box, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { Guide } from "contentlayer/generated";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { getAllGuides } from "lib/get-guides-data";
import pick from "lodash/pick";
import NextLink from "next/link";
import { useState } from "react";

dayjs.extend(localizedFormat);

const Guides = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const guides = getAllGuides().map((guides) =>
    pick(guides, ["date", "description", "title", "slug"])
  );

  const sortedGuides = guides
    .sort(
      (a: Guide, b: Guide) =>
        Number(new Date(b.date)) - Number(new Date(a.date))
    )
    .filter((guide: Guide) =>
      guide.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const headingNode = () => {
    return (
      <VStack spacing={2} align="left">
        <Heading as="h1" size="lg" color="white">
          Guides
        </Heading>
        <Text>
          Guides related to some of the projects that I&apos;ve developed
        </Text>
      </VStack>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading
        as="h3"
        size="md"
        lineHeight="tall"
        color="blue.400"
        fontWeight="bold"
      >
        {title}
      </Heading>
    );
  };

  const descriptionNode = (description: string) => {
    return <Text color="gray.400">{description}</Text>;
  };

  const guidesNode = () => {
    if (!sortedGuides.length) {
      return (
        <VStack mx="auto" textAlign="center">
          <Text>No guides found!</Text>
        </VStack>
      );
    }

    return sortedGuides.map((guide: Guide) => {
      return (
        <Box key={guide.slug}>
          <Link
            as={NextLink}
            href={`/guides/${guide.slug}`}
            _hover={{
              textDecoration: "none",
            }}
          >
            <Box>
              <VStack spacing={1} align="left">
                {titleNode(guide.title)}
                {descriptionNode(guide.description)}
              </VStack>
            </Box>
          </Link>
        </Box>
      );
    });
  };

  return (
    <VStack spacing={12} align="left">
      {headingNode()}
      {guidesNode()}
    </VStack>
  );
};

export default Guides;
