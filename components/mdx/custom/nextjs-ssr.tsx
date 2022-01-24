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
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import { FaServer } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";
import { MdDataSaverOn, MdOutlineRestartAlt } from "react-icons/md";
import MockBrowser from "./browser";
import Wrapper from "./wrapper";

const MotionVStack = motion<StackProps>(VStack);
const MotionCenter = motion<BoxProps>(Center);
const MotionBox = motion<BoxProps>(Box);

const NextJSSSR: FC = () => {
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
          View the projects.html page
        </Button>
      </VStack>
    );
  };

  const buildingStep = () => {
    if (currentStep !== 1) {
      return false;
    }

    return (
      <Center rounded="sm" w="100%">
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
          <HStack justifyContent="space-between" w="100%">
            <VStack spacing={0} p={4} rounded="sm" color="gray.400">
              <Icon as={GoBrowser} h={16} w={16} />
              <Box>Browser</Box>
            </VStack>
            <VStack w="100%">
              <HStack spacing={4} w="100%">
                <Box>Browser requests the page from server</Box>
                <Icon as={CgArrowLongRight} />
              </HStack>
              <Box w="100%" justifyContent="right" pos="relative">
                <Box
                  pos="absolute"
                  mt="14px"
                  border={1}
                  borderColor="gray.600"
                  borderStyle="dashed"
                  initial="hidden"
                  animate="visible"
                  w="100%"
                />
                <MotionBox
                  pos="relative"
                  color="gray.400"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      marginLeft: "86%",
                      transition: {
                        duration: 2,
                        repeat: 1,
                        repeatType: "reverse",
                      },
                    },
                    hidden: {
                      marginLeft: "0%",
                    },
                  }}
                >
                  <HStack
                    bg="gray.900"
                    rounded="full"
                    w="fit-content"
                    px={2}
                    py={1}
                    borderWidth={1}
                    shadow="lg"
                  >
                    <Icon as={MdDataSaverOn} />
                    <Box fontSize="xs">Request</Box>
                  </HStack>
                </MotionBox>
              </Box>
              <HStack spacing={4} w="100%" justifyContent="right">
                <Icon as={CgArrowLongLeft} />
                <Box>Server sends pre-rendered HTML response</Box>
              </HStack>
            </VStack>
            <VStack spacing={0} p={4} rounded="sm" color="gray.400">
              <Icon as={FaServer} h={14} w={14} />
              <Box>Server</Box>
            </VStack>
          </HStack>
          <Box fontSize="sm" bg="gray.900" p={4} rounded="sm" w="100%">
            In this step, Next.js request the page from the server. The server
            returns the data in HTML format.
          </Box>
        </MotionVStack>
      </Center>
    );
  };

  const renderLayoutStep = () => {
    if (currentStep < 2) {
      return false;
    }

    return (
      <VStack spacing={4} w="100%">
        <MockBrowser address="projects.html">
          <Center h="100%">
            <MotionVStack
              w="100%"
              h="100%"
              bg="gray.800"
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
              <MotionCenter
                w="100%"
                bg="gray.700"
                p={2}
                rounded="sm"
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: -10 },
                }}
              >
                <VStack w="100%">
                  <Box w="100%" fontWeight="bold">
                    Project 1
                  </Box>
                  <Box w="100%" fontSize="xs">
                    This is a description of the project.
                  </Box>
                </VStack>
              </MotionCenter>
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
                    Project 2
                  </Box>
                  <Box w="100%" fontSize="xs">
                    This is a description of the project.
                  </Box>
                </VStack>
              </MotionBox>
            </MotionVStack>
          </Center>
        </MockBrowser>
        <Box fontSize="sm" bg="gray.900" p={4} rounded="sm">
          Next.js takes the JSON response from the server and generates HTML for
          the page. Once the HTML has been generated, it is rendered on the
          browser.
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
        {renderLayoutStep()}
      </VStack>
    </Wrapper>
  );
};

export default NextJSSSR;
