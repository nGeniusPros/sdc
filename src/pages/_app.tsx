import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
// import { useRouter } from "next/router";
import Head from "next/head";
import { SITE_DATA } from "../lib/constants";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>{`${SITE_DATA.name} | ${SITE_DATA.tagline}`}</title>
        <meta name="description" content={`${SITE_DATA.name} - ${SITE_DATA.tagline}. ${SITE_DATA.secondaryTagline}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
