import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Input,
  Link as _Link,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import Link from "next/link";
import React, { FC, FormEvent, useState } from "react";
import { IoMdArrowForward, IoMdArrowRoundForward } from "react-icons/io";
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
  const linkColor = { light: "blue.600", dark: "blue.400" };
  const [searchQuery, setSearchQuery] = useState("");

  const sortedDocs = docs
    .sort(
      (a: IDoc, b: IDoc) =>
        Number(new Date(b.frontMatter.date)) -
        Number(new Date(a.frontMatter.date))
    )
    .filter((doc: IDoc) =>
      doc.frontMatter.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const viewAllLinksNode = () => {
    return (
      <Link href="/docs">
        <_Link p={2} href="/docs" rounded="md">
          <HStack spacing={2} alignItems="center">
            <Box fontWeight="bold">View all documents</Box>
            <Box as={IoMdArrowRoundForward} size="15px" />
          </HStack>
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
          <VStack spacing={2} align="left">
            <Heading as="h1" size="xl">
              Documents
            </Heading>
            <Text>Posts related to some of the latest technologies</Text>
          </VStack>
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

  const metaNode = (date: string) => {
    return (
      <Box>
        <Text fontSize="xs">{dayjs(date).format("LL")}</Text>
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

  const ctaNode = () => {
    return (
      <Button rightIcon={<IoMdArrowForward />} variant="link" fontSize="sm">
        Read more
      </Button>
    );
  };

  const docsNode = () => {
    if (!sortedDocs.length) {
      return (
        <VStack mx="auto" textAlign="center">
          <Image
            src="/images/common/no-items.svg"
            alt="No docs found!"
            size={64}
          />
          <Text>No docs found!</Text>
        </VStack>
      );
    }

    return sortedDocs.map((doc: IDoc) => {
      return (
        <Box key={doc.slug}>
          <Link href={`/docs/${doc.slug}`}>
            <a>
              <Box>
                <VStack spacing={2} align="left">
                  {metaNode(doc.frontMatter.date)}
                  {titleNode(doc.frontMatter.title)}
                  {descriptionNode(doc.frontMatter.description)}
                  <Box>{ctaNode()}</Box>
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
      {docsNode()}
    </VStack>
  );
};

export default Docs;
