import { createGetInitialProps } from "@mantine/next";
import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

Document.getInitialProps = createGetInitialProps();

export default Document;
