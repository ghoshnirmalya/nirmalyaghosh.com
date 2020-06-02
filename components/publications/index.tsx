import { FC } from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  PseudoBox,
  Link as _Link,
  useColorMode,
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
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "white", dark: "black" };
  const cardColor = { light: "black", dark: "white" };

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
        <Heading as="h2" size="xl">
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
      <Heading as="h4" size="md" color="brandColor">
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
      <Stack spacing={2} isInline alignItems="center" color="brandColor">
        <Box fontWeight="bold">Read more</Box>
        <Box as={IoMdArrowRoundForward} size="15px" />
      </Stack>
    );
  };

  return (
    <Stack spacing={8}>
      {headingNode()}
      <Stack spacing={8}>
        {publications.map((publication: IPublication, index: number) => {
          return (
            <Box key={index}>
              <a href={publication.url} target="_blank">
                <PseudoBox
                  rounded="md"
                  bg={cardBgColor[colorMode]}
                  color={cardColor[colorMode]}
                  shadow="lg"
                >
                  <Stack isInline p={4} spacing={4}>
                    <Stack>
                      <Stack
                        spacing={4}
                        justifyContent="space-between"
                        h="full"
                      >
                        <Stack spacing={4}>
                          <Stack
                            spacing={8}
                            isInline
                            justifyContent="space-between"
                          >
                            {dateNode(publication.date)}
                          </Stack>
                          {titleNode(publication.title)}
                          {descriptionNode()}
                        </Stack>
                        <Box>{ctaNode()}</Box>
                      </Stack>
                    </Stack>
                  </Stack>
                </PseudoBox>
              </a>
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Publications;
