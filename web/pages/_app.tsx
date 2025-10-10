import type { AppProps } from "next/app";
import "../styles/global.css";
import Layout from "@/components/Layout";
import localFont from "next/font/local";

const sfFont = localFont({ src: "/fonts/SF-Pro.ttf" });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={sfFont.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
