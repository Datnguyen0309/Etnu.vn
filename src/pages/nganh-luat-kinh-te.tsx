"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";


const Lkt = dynamic(
  () => import("@/features/nganh-lkt").then((mod) => mod.Lkt),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Ngành luật kinh tế - Đại học Thái Nguyên"
        description="Ngành luật kinh tế - Đại học Thái Nguyên, thông tin ngành luật kinh tế Đại học Thái nguyên"
      />
      <Lkt />

    </>
  )
};

export default Page;
