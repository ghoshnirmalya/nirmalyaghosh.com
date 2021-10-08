import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import GithubSlugger from "github-slugger";
import React, { FC, useEffect, useRef } from "react";

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

  useEffect(() => {
    const target = document.querySelectorAll("h2[id], h3[id]");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");

        if (entry.intersectionRatio > 0) {
          document
            .querySelector(`.toc a[href="#${id}"]`)
            .classList.add("active");
        } else {
          document
            .querySelector(`.toc a[href="#${id}"]`)
            .classList.remove("active");
        }
      });
    });

    target.forEach((section) => {
      observer.observe(section);
    });

    return function cleanup() {
      target.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

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
        <VStack spacing={2} alignItems="left" className="toc">
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
