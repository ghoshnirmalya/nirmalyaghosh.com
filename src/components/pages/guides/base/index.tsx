"use client";

import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Guides = dynamic(
  () => import(/* webpackChunkName: "guides" */ "components/layouts/guides")
);

const Page = () => {
  return (
    <Box as="main" maxW="2xl" mx="auto" p={8}>
      <Guides />
    </Box>
  );
};

export default Page;
