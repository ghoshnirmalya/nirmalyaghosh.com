import { Box } from "@chakra-ui/react";
import { Guide } from "contentlayer/generated";
import dynamic from "next/dynamic";
import { FC } from "react";

const Guides = dynamic(
  () => import(/* webpackChunkName: "guides" */ "components/layouts/guides")
);

interface Props {
  guides: Guide[];
}

const Page: FC<Props> = ({ guides = [] }) => {
  return (
    <Box as="main" maxW="2xl" mx="auto" p={8}>
      <Guides guides={guides} />
    </Box>
  );
};

export default Page;
