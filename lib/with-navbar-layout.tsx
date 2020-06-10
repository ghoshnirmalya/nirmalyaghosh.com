import React, { Component } from "react";
import { NextComponentType, NextPageContext } from "next";
import dynamic from "next/dynamic";

const Navbar = dynamic(import("components/navbar"));

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
          <Navbar />
          <Page {...this.props} />
        </>
      );
    }
  };
};

export default higherOrderComponent;
