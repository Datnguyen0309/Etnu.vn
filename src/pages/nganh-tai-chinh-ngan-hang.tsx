"use client";

import { Loading } from "@/components/Loading";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const Tcnh = dynamic(
  () => import("@/features/nganh-tcnh").then((mod) => mod.Tcnh),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Ngành tài chính ngân hàng - Đại học Thái Nguyên"
        description="Ngành tài chính ngân hàng - Đại học Thái Nguyên, thông tin ngành tài chính ngân hàng Đại học Thái nguyên"
      />
      <Tcnh />

    </>
  )
};

export default Page;
