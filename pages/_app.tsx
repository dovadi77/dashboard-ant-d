import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Layout from "../components/BaseLayout";
import "../styles/globals.css";
import "../styles/antd.less";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
