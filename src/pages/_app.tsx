import Layout from "@/layouts";
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { DefaultSeo } from "next-seo";

import "@/styles/globals.css";
import { ModalProvider } from "@/components/ModalContext";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <DefaultSeo
        title="Đại học Thái Nguyên hệ Đào tạo từ xa"
        description="Đại học Thái Nguyên hệ Đào tạo từ xa tuyển sinh 2023"
        openGraph={{
          images: [
            {
              url: "/seo.jpg",
              width: 1620,
              height: 1080,
              alt: "Đại học Thái Nguyên hệ Đào tạo từ xa",
            },
          ],
        }}
      />

      <ChakraProvider theme={theme}>
        <ModalProvider>
          <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        </ModalProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
