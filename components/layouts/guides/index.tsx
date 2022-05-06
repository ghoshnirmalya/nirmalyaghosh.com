import { Guide } from "contentlayer/generated";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import Link from "next/link";
import React, { FC, useState } from "react";

dayjs.extend(localizedFormat);

interface Props {
  guides: Guide[];
}

const Guides: FC<Props> = ({ guides = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");

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
          <Link href={`/guides/${guide.slug}`}>
            <a>
              <Box>
                <VStack spacing={1} align="left">
                  {titleNode(guide.title)}
                  {descriptionNode(guide.description)}
                </VStack>
              </Box>
            </a>
          </Link>
        </Box>
      );
    });
  };

  return (
    <VStack spacing={8} align="left">
      {headingNode()}
      {guidesNode()}
    </VStack>
  );
};

export default Guides;
