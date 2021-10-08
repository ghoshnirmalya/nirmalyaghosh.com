import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import GithubSlugger from "github-slugger";
import React, { FC } from "react";

interface IProps {
  source: string;
}

const TableOfContents: FC<IProps> = ({ source }) => {
  const headingLines = source
    .split("\n")
    .filter((line) => line.match(/^###*\s/));

  const headings = headingLines.map((raw) => {
    const text = raw.replace(/^###*\s/, "");
    const level = raw.slice(0, 3) === "###" ? 3 : 2;
    const slugger = new GithubSlugger();

    return {
      text,
      level,
      href: slugger.slug(text),
    };
  });

  return (
    <Box
      pos="sticky"
      top={8}
      h="100vh"
      overflow="scroll"
      display={["none", "none", "none", "block"]}
    >
      <VStack alignItems="left">
        <Heading size="sm">Table of contents</Heading>
        <VStack spacing={2} alignItems="left">
          {headings.map((heading, index) => {
            return (
              <Box as="a" href={`#${heading.href}`} key={index}>
                <Text
                  color="gray.400"
                  fontSize="sm"
                  ml={(heading.level - 2) * 4}
                  _hover={{
                    color: "blue.400",
                  }}
                >
                  {heading.text}
                </Text>
              </Box>
            );
          })}
        </VStack>
      </VStack>
    </Box>
  );
};

export default TableOfContents;
