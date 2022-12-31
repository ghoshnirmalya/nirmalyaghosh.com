import NextLink from "next/link";
import React, { FC } from "react";

interface IProps {
  href: string;
  text: string;
}

const Link: FC<IProps> = ({ href, text }) => {
  return (
    <NextLink href={href}>
      <a>{text}</a>
    </NextLink>
  );
};

export default Link;
