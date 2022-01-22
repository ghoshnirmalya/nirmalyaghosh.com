import {
  Box,
  Button,
  Center,
  Fade,
  HStack,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { MdOutlineRestartAlt } from "react-icons/md";

const NextJSSSG: FC = () => {
  const [currentStep, setCurrentStep] = useState<0 | 1 | 2>(0);

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
        <Center pos="relative" w={24} h={48} left={-12}>
          <Center
            pos="absolute"
            p={4}
            bg="gray.700"
            rounded="lg"
            color="gray.400"
            w={32}
            h={32}
            left={-12}
            transform="rotate(10deg)"
            shadow="lg"
            fontWeight="bold"
          >
            <Fade in>home.js</Fade>
          </Center>
          <Center
            pos="absolute"
            p={4}
            bg="gray.700"
            rounded="lg"
            color="gray.400"
            w={32}
            h={32}
            left={30}
            transform="rotate(15deg)"
            shadow="lg"
            fontWeight="bold"
          >
            <Fade in>blogs.js</Fade>
          </Center>
          <Center
            pos="absolute"
            p={4}
            bg="gray.700"
            rounded="lg"
            color="gray.400"
            w={32}
            h={32}
            left="125px"
            transform="rotate(20deg)"
            shadow="lg"
            fontWeight="bold"
          >
            <Fade in>projects.js</Fade>
          </Center>
        </Center>
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
        borderColor="gray.700"
        borderStyle="dashed"
        rounded="sm"
        color="gray.400"
        w="100%"
      >
        <VStack spacing={4} w="100%">
          <Fade in>Building all the pages...</Fade>
          <Box fontSize="sm" bg="gray.900" p={4} rounded="sm">
            In this step, Next.js takes all the pages that your created inside
            your application and builds them into HTML files.
          </Box>
        </VStack>
      </Center>
    );
  };

  const finishStep = () => {
    if (currentStep < 2) {
      return false;
    }

    return (
      <VStack spacing={4} w="100%">
        <HStack spacing={2} h={48}>
          <VStack
            p={4}
            bg="gray.700"
            rounded="lg"
            color="gray.400"
            shadow="lg"
            fontWeight="bold"
            w={32}
          >
            <Fade in>
              <Icon as={BsReverseLayoutTextWindowReverse} h={16} w={16} />
            </Fade>
            <Fade in>home.html</Fade>
          </VStack>
          <VStack
            p={4}
            bg="gray.700"
            rounded="lg"
            color="gray.400"
            shadow="lg"
            fontWeight="bold"
            w={32}
          >
            <Fade in>
              <Icon as={BsReverseLayoutTextWindowReverse} h={16} w={16} />
            </Fade>
            <Fade in>blogs.html</Fade>
          </VStack>
          <VStack
            p={4}
            bg="gray.700"
            rounded="lg"
            color="gray.400"
            shadow="lg"
            fontWeight="bold"
            w={32}
          >
            <Fade in>
              <Icon as={BsReverseLayoutTextWindowReverse} h={16} w={16} />
            </Fade>
            <Fade in>projects.html</Fade>
          </VStack>
        </HStack>
        <Box fontSize="sm" bg="gray.900" p={4} rounded="sm">
          Post the build process of Next.js, you will get a bunch of HTML,
          JavaScript and CSS files. You can deploy these files to a server to
          make it available to everyone in the world. Since these are static
          files, these files are immediately available when someone visits them.
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
    <VStack bg="gray.800" p={4} rounded="sm" spacing={8}>
      {startStep()}
      {buildingStep()}
      {finishStep()}
    </VStack>
  );
};

export default NextJSSSG;
