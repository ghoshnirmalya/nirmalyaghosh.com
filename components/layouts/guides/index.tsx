import { Box, Heading, Input, Text, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import Link from "next/link";
import React, { FC, FormEvent, useState } from "react";
import IGuide from "types/guide";

dayjs.extend(localizedFormat);

interface Props {
  guides: IGuide[];
}

const Guides: FC<Props> = ({ guides = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const sortedGuides = guides
    .sort(
      (a: IGuide, b: IGuide) =>
        Number(new Date(b.data?.date)) - Number(new Date(a.data?.date))
    )
    .filter((guide: IGuide) =>
      guide.data?.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const searchNode = () => {
    return (
      <Box>
        <Input
          bg="gray.800"
          color="white"
          border="none"
          value={searchQuery}
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setSearchQuery(e.currentTarget.value)
          }
          placeholder="Search for a guide"
        />
      </Box>
    );
  };

  const headingNode = () => {
    return (
      <Box>
        <VStack spacing={2} align="left">
          <Heading as="h1" size="xl">
            Guides
          </Heading>
          <Text>
            Guides related to some of the projects that I&apos;ve developed
          </Text>
        </VStack>
      </Box>
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

    return sortedGuides.map((guide: IGuide) => {
      return (
        <Box key={guide.data.slug}>
          <Link href={`/guides/${guide.data.slug}`}>
            <a>
              <Box>
                <VStack spacing={1} align="left">
                  {titleNode(guide.data.title)}
                  {descriptionNode(guide.data.description)}
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
      {searchNode()}
      {guidesNode()}
    </VStack>
  );
};

export default Guides;
