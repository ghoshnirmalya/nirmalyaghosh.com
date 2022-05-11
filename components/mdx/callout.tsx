import { Box, HStack, Icon } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import { theme } from "@chakra-ui/react";
import { IoIosAlert, IoIosHelpCircle, IoIosWarning } from "react-icons/io";

interface IProps {
  type?: "error" | "info" | "warning";
  children: ReactNode;
}
const Callout: FC<IProps> = ({ type = "info", children }) => {
  const allowedTypes = {
    error: {
      icon: IoIosAlert,
      bgColor: "red.800",
      color: "red.200",
    },
    info: {
      icon: IoIosHelpCircle,
      bgColor: "gray.900",
      color: "gray.200",
    },
    warning: {
      icon: IoIosWarning,
      bgColor: "yellow.800",
      color: "yellow.200",
    },
  };

  return (
    <Box
      p={4}
      rounded="sm"
      bgColor={allowedTypes[type].bgColor}
      color={allowedTypes[type].color}
      mr={2}
      borderWidth={1}
      borderColor="gray.700"
    >
      <HStack spacing={2} pos="relative">
        <Icon
          as={allowedTypes[type].icon}
          fontSize={40}
          pos="absolute"
          top="-30px"
          right="-25px"
          bgColor="gray.900"
          rounded="full"
          padding={1}
          color={allowedTypes[type].color}
          borderWidth={1}
          borderColor="gray.700"
        />
        <Box
          sx={{
            "> p": {
              margin: 0,
              color: theme.colors.gray[200],
              fontSize: theme.fontSizes.sm,
            },
          }}
        >
          {children}
        </Box>
      </HStack>
    </Box>
  );
};

export default Callout;
