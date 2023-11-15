"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";

const Dangky = dynamic(
  () => import("@/features/dang-ky").then((mod) => mod.dangky),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Đăng ký học từ xa Đại học Thái Nguyên"
        description="Đăng ký  học từ xa Đại học Thái Nguyên, tiết kiệm chi phí và thời gian"
      />
      <Dangky />
    </>
  );
};

export default Page;
