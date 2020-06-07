import React, { FC } from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Link as _Link,
} from "@chakra-ui/core";
import Link from "next/link";
import IPublication from "types/publication";
import { IoMdClock, IoMdArrowRoundForward } from "react-icons/io";

interface Props {
  publications: IPublication[];
  hideViewAllLinksNode?: boolean;
}

const Publications: FC<Props> = ({
  publications = [],
  hideViewAllLinksNode = false,
}) => {
  const viewAllLinksNode = () => {
    if (hideViewAllLinksNode) return false;

    return (
      <Link href="/publications">
        <_Link p={2} href="/publications" rounded="md" color="brandColor">
          <Stack spacing={2} isInline alignItems="center">
            <Box fontWeight="bold">View all publications</Box>
            <Box as={IoMdArrowRoundForward} size="15px" />
          </Stack>
        </_Link>
      </Link>
    );
  };

  const headingNode = () => {
    return (
      <Box d="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h2" size="lg">
          Publications
        </Heading>
        {viewAllLinksNode()}
      </Box>
    );
  };

  const dateNode = (date: string) => {
    return (
      <Stack spacing={2} isInline alignItems="center">
        <Box as={IoMdClock} color="brandColor" />
        <Text fontSize="sm">{date}</Text>
      </Stack>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading as="h3" size="md" color="brandColor">
        {title}
      </Heading>
    );
  };

  const descriptionNode = () => {
    return (
      <Text>
        Ut at ipsum porttitor, dignissim eros a, interdum nisl. Duis egestas sed
        mauris nec interdum. Nunc at pellentesque purus. Suspendisse felis
        ligula, auctor gravida tempor non, vehicula ut massa.
      </Text>
    );
  };

  const ctaNode = () => {
    return (
      <Button
        rightIcon="arrow-forward"
        color="brandColor"
        variant="link"
        fontSize="sm"
      >
        Read more
      </Button>
    );
  };

  return (
    <Stack spacing={8}>
      {headingNode()}
      <Stack spacing={16}>
        {publications.map((publication: IPublication, index: number) => {
          return (
            <Box key={index}>
              <a href={publication.url} target="_blank" rel="noopener">
                <Box>
                  <Stack spacing={4}>
                    {dateNode(publication.date)}
                    {titleNode(publication.title)}
                    {descriptionNode()}
                    <Box>{ctaNode()}</Box>
                  </Stack>
                </Box>
              </a>
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Publications;
