import _Link from "next/link";
import React, { FC } from "react";

interface IProps {
  href: string;
  text: string;
}

const Link: FC<IProps> = ({ href, text }) => {
  return (
    <_Link href={href}>
      <a>{text}</a>
    </_Link>
  );
};

export default Link;
