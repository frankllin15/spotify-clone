import type { AppProps } from "next/app";
import { Fragment } from "react";
import { Layout } from "../components/Layout";
import AuthProvider from "../context/Auth/AuthProvider";
import ContentProvider from "../context/Content/ContentProvider";
import GlobalStyle from "../styles/globals";
import { GlobalStyleProvider } from "../styles/thema";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      {/* <GlobalStyle theme={theme} /> */}

      <AuthProvider>
        <ContentProvider>
          <GlobalStyleProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </GlobalStyleProvider>
        </ContentProvider>
      </AuthProvider>
    </Fragment>
  );
}

export default MyApp;
