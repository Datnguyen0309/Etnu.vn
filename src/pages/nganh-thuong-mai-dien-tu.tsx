"use client";

import { Loading } from "@/components/Loading";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const Tmdt = dynamic(
  () => import("@/features/nganh-tmdt").then((mod) => mod.Tmdt),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Ngành thương mại điện tử và Marketing số - Đại học Thái Nguyên"
        description="Ngành thương mại điện tử và Marketing số - Đại học Thái Nguyên, thông tin ngành thương mại điện tử và Marketing số Đại học Thái nguyên"
      />
      <Tmdt />

    </>
  )
};

export default Page;
