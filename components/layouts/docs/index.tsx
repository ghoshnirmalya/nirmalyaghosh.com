import { ArrowForwardIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Link as _Link,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import Link from "next/link";
import React, { FC, FormEvent, useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import IDoc from "types/doc";

dayjs.extend(localizedFormat);

interface Props {
  docs: IDoc[];
  hideViewAllLinksNode?: boolean;
}

const Docs: FC<Props> = ({ docs = [], hideViewAllLinksNode = false }) => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "white", dark: "gray.900" };
  const cardColor = { light: "gray.900", dark: "white" };
  const [searchQuery, setSearchQuery] = useState("");
  const sortedDocs = docs
    .sort(
      (a: IDoc, b: IDoc) => Number(new Date(b.date)) - Number(new Date(a.date))
    )
    .filter((doc) =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const viewAllLinksNode = () => {
    return (
      <Link href="/docs">
        <_Link p={2} href="/docs" rounded="md">
          <Stack spacing={2} isInline alignItems="center">
            <Box fontWeight="bold">View all documents</Box>
            <Box as={IoMdArrowRoundForward} size="15px" />
          </Stack>
        </_Link>
      </Link>
    );
  };

  const searchNode = () => {
    if (!hideViewAllLinksNode) return false;

    return (
      <Box>
        <Input
          bg={cardBgColor[colorMode]}
          color={cardColor[colorMode]}
          value={searchQuery}
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setSearchQuery(e.currentTarget.value)
          }
          placeholder="Search for a document"
        />
      </Box>
    );
  };

  const headingNode = () => {
    if (hideViewAllLinksNode) {
      return (
        <Box>
          <Stack spacing={2}>
            <Heading as="h1" size="xl">
              Documents
            </Heading>
            <Text>Posts related to some of the latest technologies</Text>
          </Stack>
        </Box>
      );
    }

    return (
      <Box d="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h2" size="xl">
          Documents
        </Heading>
        {viewAllLinksNode()}
      </Box>
    );
  };

  const metaNode = (date: string, readingTime: string) => {
    return (
      <Stack spacing={4} isInline alignItems="center">
        <Box>
          <Text fontSize="xs">{dayjs(date).format("LL")}</Text>
        </Box>
        <MinusIcon size="12px" />
        <Box>
          <Text fontSize="xs">{readingTime}</Text>
        </Box>
      </Stack>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading as="h3" size="md" letterSpacing="tight" lineHeight="tall">
        {title}
      </Heading>
    );
  };

  const descriptionNode = (description: string) => {
    return <Text fontSize="sm">{description}</Text>;
  };

  const ctaNode = () => {
    return (
      <Button rightIcon={<ArrowForwardIcon />} variant="link" fontSize="sm">
        Read more
      </Button>
    );
  };

  const docsNode = () => {
    if (!sortedDocs.length) {
      return (
        <Stack mx="auto" textAlign="center">
          <Image
            src="/images/common/no-items.svg"
            alt="No docs found!"
            size={64}
          />
          <Text>No docs found!</Text>
        </Stack>
      );
    }

    return sortedDocs.map((doc: IDoc) => {
      const permalink = doc.__resourcePath.replace(".mdx", "");

      return (
        <Box key={permalink}>
          <Link href={`/${permalink}`}>
            <a>
              <Box
                bg={cardBgColor[colorMode]}
                color={cardColor[colorMode]}
                p={8}
                rounded="md"
                shadow="md"
              >
                <Stack spacing={4}>
                  {metaNode(doc.date, doc.readingTime.text)}
                  {titleNode(doc.title)}
                  {descriptionNode(doc.description)}
                  <Box>{ctaNode()}</Box>
                </Stack>
              </Box>
            </a>
          </Link>
        </Box>
      );
    });
  };

  return (
    <Stack spacing={8}>
      {headingNode()}
      {searchNode()}
      {docsNode()}
    </Stack>
  );
};

export default Docs;
