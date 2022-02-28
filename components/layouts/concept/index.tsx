import { Concept } from "contentlayer/generated";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import Link from "next/link";
import React, { FC, useState } from "react";

dayjs.extend(localizedFormat);

interface Props {
  concepts: Concept[];
}

const Concepts: FC<Props> = ({ concepts = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const sortedConcepts = concepts
    .sort(
      (a: Concept, b: Concept) =>
        Number(new Date(b.date)) - Number(new Date(a.date))
    )
    .filter((concept: Concept) =>
      concept.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const headingNode = () => {
    return (
      <VStack spacing={2} align="left">
        <Heading as="h1" size="lg" color="white">
          Interactive concepts
        </Heading>
        <Text>
          Short and interactive concepts to help you understand different
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

  const conceptsNode = () => {
    if (!sortedConcepts.length) {
      return (
        <VStack mx="auto" textAlign="center">
          <Text>No concepts found!</Text>
        </VStack>
      );
    }

    return sortedConcepts.map((concept: Concept) => {
      return (
        <Box key={concept.slug}>
          <Link href={`/concepts/${concept.slug}`}>
            <a>
              <Box>
                <VStack spacing={1} align="left">
                  {titleNode(concept.title)}
                  {descriptionNode(concept.description)}
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
      {conceptsNode()}
    </VStack>
  );
};

export default Concepts;
