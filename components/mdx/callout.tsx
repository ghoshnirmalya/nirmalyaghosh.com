import { Box, HStack } from "@chakra-ui/react";
import React, { FC, ReactChildren } from "react";
import { theme } from "@chakra-ui/react";
import { IoIosAlert, IoIosHelpCircle, IoIosWarning } from "react-icons/io";

interface IProps {
  type?: "error" | "info" | "warning";
  children: ReactChildren;
}
const Callout: FC<IProps> = ({ type = "info", children }) => {
  const allowedTypes = {
    error: {
      icon: <IoIosAlert />,
      bgColor: "red.800",
      color: "white",
    },
    info: {
      icon: <IoIosHelpCircle />,
      bgColor: "gray.800",
      color: "white",
    },
    warning: {
      icon: <IoIosWarning />,
      bgColor: "yellow.800",
      color: "white",
    },
  };
  return (
    <Box
      p={4}
      rounded="sm"
      bgColor={allowedTypes[type].bgColor}
      color={allowedTypes[type].color}
      mb={8}
    >
      <HStack spacing={2}>
        <Box fontSize={48}>{allowedTypes[type].icon}</Box>
        <Box
          sx={{
            "> p": {
              margin: 0,
              color: theme.colors.gray[200],
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
