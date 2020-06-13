import React, { Component } from "react";
import { NextComponentType, NextPageContext } from "next";
import dynamic from "next/dynamic";

const Navbar = dynamic(import("components/navbar"));
const SocialLinks = dynamic(import("components/social-links"));
const Footer = dynamic(import("components/footer"));

const higherOrderComponent = (Page: NextComponentType<NextPageContext>) => {
  return class extends Component<any> {
    static async getInitialProps(ctx: NextPageContext) {
      if (Page.getInitialProps) {
        return Page.getInitialProps(ctx);
      }
    }

    render() {
      return (
        <>
          <SocialLinks />
          <Navbar />
          <Page {...this.props} />
          <Footer />
        </>
      );
    }
  };
};

export default higherOrderComponent;
