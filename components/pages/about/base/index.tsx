import { Box, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import AvatarImage from "public/images/common/avatar.png";
import { FC } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const Page: FC = () => {
  const headingNode = () => {
    return (
      <HStack spacing={4} alignItems="center">
        <Box
          bgGradient="linear(to-l, #79c2ff, #4a5888)"
          rounded="full"
          p={1}
          w={100}
          h={100}
        >
          <Image
            src={AvatarImage}
            alt="Nirmalya Ghosh"
            height={100}
            width={100}
            quality={100}
            priority
          />
        </Box>
        <Box>
          <VStack spacing={2} align="left">
            <Heading as="h1" size="lg" color="white">
              Nirmalya Ghosh
            </Heading>
            <Text fontWeight="bold">
              Staff Developer Advocate @
              <Link
                href="https://rapidapi.com/"
                isExternal
                _hover={{
                  textDecoration: "none",
                }}
              >
                Rapid
              </Link>
            </Text>
          </VStack>
        </Box>
      </HStack>
    );
  };

  const bioDescriptionNode = () => {
    return (
      <Box className="article">
        <Text fontWeight="bold">
          Computer Science Engineer having interest in web-designing and
          development with an eye for detail.
        </Text>
        <Text>
          I&apos;m also a big fan of{" "}
          <Box as="span" fontWeight="bold">
            React.js
          </Box>{" "}
          and have{" "}
          <Box as="span" fontWeight="bold">
            around 6 years
          </Box>{" "}
          experience with it. I have also fiddled with Ruby on Rails and Elixir.
        </Text>
        <Text>
          Though I spend most of my time writing code for building User
          Interfaces, I&apos;ve also fiddled with many Back-end technologies. I
          like enjoying working in the intersection of design and development. I
          feel most productive when I&apos;m able to design User Interfaces
          which not only look good but has a good performance as well.
        </Text>
      </Box>
    );
  };

  const socialLinksNode = () => {
    return (
      <Box display="flex" alignItems="center">
        <HStack spacing={4}>
          <Link
            py={2}
            px={4}
            href="https://github.com/ghoshnirmalya"
            rounded="sm"
            bg="#333"
            color="#fff"
            fontWeight="bold"
            isExternal
            borderWidth={1}
            borderColor="gray.600"
            _hover={{
              textDecoration: "none",
            }}
          >
            <HStack spacing={2} alignItems="center">
              <Box as={IoLogoGithub} /> <Text>Github</Text>
            </HStack>
          </Link>
          <Link
            py={2}
            px={4}
            href="https://www.linkedin.com/in/ghoshnirmalya/"
            rounded="sm"
            bg="#0e76a8"
            color="#fff"
            fontWeight="bold"
            isExternal
            borderWidth={1}
            borderColor="blue.400"
            _hover={{
              textDecoration: "none",
            }}
          >
            <HStack spacing={2} alignItems="center">
              <Box as={IoLogoLinkedin} /> <Text>LinkedIn</Text>
            </HStack>
          </Link>
        </HStack>
      </Box>
    );
  };

  return (
    <Box as="main" maxW="2xl" mx="auto" p={8}>
      <VStack spacing={4} align="left">
        {headingNode()}
        {bioDescriptionNode()}
        {socialLinksNode()}
      </VStack>
    </Box>
  );
};

export default Page;
