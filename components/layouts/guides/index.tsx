import {
  Box,
  Heading,
  HStack,
  Image,
  Input,
  Link as _Link,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { FC, FormEvent, useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import IGuide from "types/guide";

interface Props {
  guides: IGuide[];
}

const Guides: FC<Props> = ({ guides = [] }) => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "white", dark: "gray.900" };
  const cardColor = { light: "gray.900", dark: "white" };
  const linkColor = { light: "blue.600", dark: "blue.400" };
  const [searchQuery, setSearchQuery] = useState("");

  const sortedGuides = guides
    .sort(
      (a: IGuide, b: IGuide) =>
        Number(new Date(b.frontMatter.date)) -
        Number(new Date(a.frontMatter.date))
    )
    .filter((guide: IGuide) =>
      guide.frontMatter.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const searchNode = () => {
    return (
      <Box>
        <Input
          bg={cardBgColor[colorMode]}
          color={cardColor[colorMode]}
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
            Guides related to some of the projects that I've developed
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
        letterSpacing="tight"
        lineHeight="tall"
        color={linkColor[colorMode]}
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
          <Image
            src="/images/common/no-items.svg"
            alt="No guides found!"
            size={64}
          />
          <Text>No guides found!</Text>
        </VStack>
      );
    }

    return sortedGuides.map((guide: IGuide) => {
      return (
        <Box key={guide.slug}>
          <Link href={`/guides/${guide.slug}`}>
            <a>
              <Box>
                <VStack spacing={1} align="left">
                  {titleNode(guide.frontMatter.title)}
                  {descriptionNode(guide.frontMatter.description)}
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
