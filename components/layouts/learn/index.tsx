import { LearnGuide } from ".contentlayer/types";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import Link from "next/link";
import React, { FC, useState } from "react";

dayjs.extend(localizedFormat);

interface Props {
  guides: LearnGuide[];
}

const Guides: FC<Props> = ({ guides = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const sortedGuides = guides
    .sort(
      (a: LearnGuide, b: LearnGuide) =>
        Number(new Date(b.date)) - Number(new Date(a.date))
    )
    .filter((guide: LearnGuide) =>
      guide.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const headingNode = () => {
    return (
      <VStack spacing={2} align="left">
        <Heading as="h1" size="xl">
          Interactive guides
        </Heading>
        <Text>
          Short and interactive guides to help you understand different
          technologies
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
    return <Text fontSize="sm">{description}</Text>;
  };

  const guidesNode = () => {
    if (!sortedGuides.length) {
      return (
        <VStack mx="auto" textAlign="center">
          <Text>No guides found!</Text>
        </VStack>
      );
    }

    return sortedGuides.map((guide: LearnGuide) => {
      return (
        <Box key={guide.slug}>
          <Link href={`/learn/${guide.slug}`}>
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
