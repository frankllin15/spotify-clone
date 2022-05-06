import type { AppProps } from "next/app";
import { Fragment } from "react";
import { Layout } from "../components/Layout";
import AuthProvider from "../context/Auth/AuthProvider";
import ContentProvider from "../context/Content/ContentProvider";
import GlobalStyle from "../styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyle />
      <AuthProvider>
        <ContentProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ContentProvider>
      </AuthProvider>
    </Fragment>
  );
}

export default MyApp;
