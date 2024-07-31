import Layout from "@/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";

const iranSans = localFont({ src: "../../public/fonts/IRANSansWeb.ttf" });

function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlClientProvider locale="fa" messages={pageProps.messages}>
      <main className={iranSans.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </NextIntlClientProvider>
  );
}

export default App;
