"use client";

import { Loading } from "@/components/Loading";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const Nna = dynamic(
  () => import("@/features/nganh-nna").then((mod) => mod.Nna),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Ngành ngôn ngữ Anh - Đại học Thái Nguyên"
        description="Ngành ngôn ngữ Anh - Đại học Thái Nguyên, thông tin ngành ngôn ngữ Anh Đại học Thái nguyên"
      />
      <Nna />

    </>
  )
};

export default Page;
