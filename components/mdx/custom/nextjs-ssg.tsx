import {
  Box,
  BoxProps,
  Button,
  Center,
  Fade,
  HStack,
  Icon,
  StackProps,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { BiCodeCurly } from "react-icons/bi";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { MdOutlineRestartAlt } from "react-icons/md";
import MockBrowser from "./browser";
import Wrapper from "./wrapper";

const MotionHStack = motion<StackProps>(HStack);
const MotionVStack = motion<StackProps>(VStack);
const MotionCenter = motion<BoxProps>(Center);
const MotionBox = motion<BoxProps>(Box);

const NextJSSSG: FC = () => {
  const [currentStep, setCurrentStep] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (currentStep === 1) {
      timer = setTimeout(() => {
        setCurrentStep(2);
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [currentStep]);

  const startStep = () => {
    if (currentStep > 0) {
      return false;
    }

    return (
      <VStack spacing={4} w="100%">
        <MotionCenter
          pos="relative"
          w={24}
          h={48}
          left={-12}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                delayChildren: 0.5,
              },
            },
          }}
          initial="hidden"
          animate="show"
        >
          <MotionVStack
            pos="absolute"
            p={4}
            bg="gray.700"
            rounded="sm"
            color="gray.400"
            w={32}
            shadow="lg"
            fontWeight="bold"
            variants={{
              hidden: { left: 0 },
              show: {
                left: "-80px",
                transform: "rotate(10deg)",
              },
            }}
          >
            <Fade in>
              <Icon as={BiCodeCurly} h={12} w={12} />
            </Fade>
            <Fade in>home.js</Fade>
          </MotionVStack>
          <MotionVStack
            pos="absolute"
            p={4}
            bg="gray.700"
            rounded="sm"
            color="gray.400"
            w={32}
            shadow="lg"
            fontWeight="bold"
            variants={{
              hidden: { left: 0 },
              show: {
                left: 20,
                transform: "rotate(15deg)",
              },
            }}
          >
            <Fade in>
              <Icon as={BiCodeCurly} h={12} w={12} />
            </Fade>
            <Fade in>blogs.js</Fade>
          </MotionVStack>
          <MotionVStack
            pos="absolute"
            p={4}
            bg="gray.700"
            rounded="sm"
            color="gray.400"
            w={32}
            shadow="lg"
            fontWeight="bold"
            variants={{
              hidden: { left: 0 },
              show: {
                left: "125px",
                transform: "rotate(20deg)",
              },
            }}
          >
            <Fade in>
              <Icon as={BiCodeCurly} h={12} w={12} />
            </Fade>
            <Fade in>projects.js</Fade>
          </MotionVStack>
        </MotionCenter>
        <Box fontSize="sm" bg="gray.900" p={4} rounded="sm">
          The above JavaScript files are present inside your Next.js
          application. These files contain code in React.js. They might
          potentially contain calls to 3rd party APIs as well as CSS files.
        </Box>
        <Button
          w="full"
          bg="blue.600"
          size="sm"
          rounded="sm"
          onClick={() => setCurrentStep(1)}
          isDisabled={currentStep === 1}
        >
          Build all pages
        </Button>
      </VStack>
    );
  };

  const buildingStep = () => {
    if (currentStep !== 1) {
      return false;
    }

    return (
      <Center
        p={4}
        border={2}
        borderColor="gray.800"
        borderStyle="dashed"
        rounded="sm"
        color="gray.400"
        w="100%"
      >
        <MotionVStack
          spacing={4}
          w="100%"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <Fade in>Next.js is building all the pages...</Fade>
          <Box fontSize="sm" bg="gray.900" p={4} rounded="sm" w="100%">
            In this step, Next.js takes all the pages that your created inside
            your application and builds them into HTML files.
          </Box>
        </MotionVStack>
      </Center>
    );
  };

  const finishStep = () => {
    if (currentStep !== 2) {
      return false;
    }

    return (
      <VStack spacing={4} w="100%">
        <MotionHStack
          spacing={2}
          h={48}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <MotionVStack
            p={4}
            bg="gray.700"
            rounded="sm"
            color="gray.400"
            shadow="lg"
            fontWeight="bold"
            w={32}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
          >
            <Fade in>
              <Icon as={BsReverseLayoutTextWindowReverse} h={16} w={16} />
            </Fade>
            <Fade in>home.html</Fade>
          </MotionVStack>
          <MotionVStack
            p={4}
            bg="gray.700"
            rounded="sm"
            color="gray.400"
            shadow="lg"
            fontWeight="bold"
            w={32}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
          >
            <Fade in>
              <Icon as={BsReverseLayoutTextWindowReverse} h={16} w={16} />
            </Fade>
            <Fade in>blogs.html</Fade>
          </MotionVStack>
          <MotionVStack
            p={4}
            bg="gray.700"
            rounded="sm"
            color="gray.400"
            shadow="lg"
            fontWeight="bold"
            w={32}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
          >
            <Fade in>
              <Icon as={BsReverseLayoutTextWindowReverse} h={16} w={16} />
            </Fade>
            <Fade in>projects.html</Fade>
          </MotionVStack>
        </MotionHStack>
        <Box fontSize="sm" bg="gray.900" p={4} rounded="sm">
          Post the build process of Next.js, you will get a bunch of HTML,
          JavaScript and CSS files. You can deploy these files to a server to
          make it available to everyone in the world.
        </Box>
        <Button
          w="full"
          bg="blue.600"
          size="sm"
          rounded="sm"
          onClick={() => setCurrentStep(3)}
          isDisabled={currentStep !== 2}
        >
          View the blogs.html page
        </Button>
      </VStack>
    );
  };

  const renderLayoutStep = () => {
    if (currentStep < 3) {
      return false;
    }

    return (
      <VStack spacing={4} w="100%">
        <MockBrowser address="blogs.html">
          <HStack h="100%">
            <Box
              w="25%"
              h="100%"
              bg="gray.900"
              p={2}
              rounded="sm"
              fontSize="xs"
            >
              <VStack spacing={2}>
                <Box w="100%">Menu 1</Box>
                <Box w="100%">Menu 2</Box>
                <Box w="100%">Menu 3</Box>
              </VStack>
            </Box>
            <MotionVStack
              w="75%"
              h="100%"
              bg="gray.900"
              p={2}
              rounded="sm"
              spacing={2}
              overflow="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    when: "beforeChildren",
                    staggerChildren: 0.3,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              <MotionBox
                w="100%"
                bg="gray.700"
                p={2}
                rounded="sm"
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: -10 },
                }}
              >
                <VStack>
                  <Box w="100%" fontWeight="bold">
                    Title 1
                  </Box>
                  <Box w="100%" fontSize="xs">
                    This is a description of the post.
                  </Box>
                </VStack>
              </MotionBox>
              <MotionBox
                w="100%"
                bg="gray.700"
                p={2}
                rounded="sm"
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: -10 },
                }}
              >
                <VStack>
                  <Box w="100%" fontWeight="bold">
                    Title 2
                  </Box>
                  <Box w="100%" fontSize="xs">
                    This is a description of the post.
                  </Box>
                </VStack>
              </MotionBox>
              <MotionBox
                w="100%"
                bg="gray.700"
                p={2}
                rounded="sm"
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: -10 },
                }}
              >
                <VStack>
                  <Box w="100%" fontWeight="bold">
                    Title 3
                  </Box>
                  <Box w="100%" fontSize="xs">
                    This is a description of the post.
                  </Box>
                </VStack>
              </MotionBox>
            </MotionVStack>
          </HStack>
        </MockBrowser>
        <Box fontSize="sm" bg="gray.900" p={4} rounded="sm">
          Since the generated files are static files, these files are
          immediately available when someone visits them. No fetching of data
          happens in these files.
        </Box>
        <Button
          w="full"
          bg="blue.600"
          size="sm"
          rounded="sm"
          onClick={() => setCurrentStep(0)}
          leftIcon={<MdOutlineRestartAlt />}
        >
          Play again
        </Button>
      </VStack>
    );
  };

  return (
    <Wrapper>
      <VStack spacing={8}>
        {startStep()}
        {buildingStep()}
        {finishStep()}
        {renderLayoutStep()}
      </VStack>
    </Wrapper>
  );
};

export default NextJSSSG;
