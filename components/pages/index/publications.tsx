import { FC } from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  PseudoBox,
  Tag,
  Link as _Link,
  useColorMode,
} from "@chakra-ui/core";
import Link from "next/link";
import IPublication from "types/publication";
import {
  IoMdClock,
  IoMdArrowRoundForward,
  IoIosPricetag,
} from "react-icons/io";

interface Props {
  publications: IPublication[];
}

const Publications: FC<Props> = ({ publications = [] }) => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "white", dark: "black" };
  const cardColor = { light: "black", dark: "white" };

  const dateNode = (date: string) => {
    return (
      <Stack spacing={2} isInline alignItems="center">
        <Box as={IoMdClock} />
        <Text fontSize="sm">{date}</Text>
      </Stack>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading as="h4" size="md">
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
      <Stack spacing={2} isInline alignItems="center">
        <Box fontWeight="bold">Read more</Box>
        <Box as={IoMdArrowRoundForward} size="15px" />
      </Stack>
    );
  };

  return (
    <Stack spacing={8}>
      <Box d="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h2" size="xl">
          Publications
        </Heading>
        <Link href="/publications">
          <_Link p={2} href="/publications" rounded="md">
            <Stack spacing={2} isInline alignItems="center">
              <Box fontWeight="bold">View all publications</Box>
              <Box as={IoMdArrowRoundForward} size="15px" />
            </Stack>
          </_Link>
        </Link>
      </Box>
      <Stack spacing={8}>
        {publications.slice(0, 3).map((article: IPublication) => {
          return (
            <Box key={article.id}>
              <a href={article.url} target="_blank">
                <PseudoBox
                  rounded="md"
                  bg={cardBgColor[colorMode]}
                  color={cardColor[colorMode]}
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
                            {dateNode(article.date)}
                          </Stack>
                          {titleNode(article.title)}
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
