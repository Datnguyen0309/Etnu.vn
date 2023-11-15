"use client";

import { Loading } from "@/components/Loading";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const Nnt = dynamic(
  () => import("@/features/nganh-nnt").then((mod) => mod.Nnt),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Ngành ngôn ngữ Trung - Đại học Thái Nguyên"
        description="Ngành ngôn ngữ Trung - Đại học Thái Nguyên, thông tin ngành ngôn ngữ Trung Đại học Thái nguyên"
      />
      <Nnt />

    </>
  )
};

export default Page;
