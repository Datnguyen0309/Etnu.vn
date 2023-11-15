"use client";

import ErrorBoundary from "@/components/ErrorBoundary";
import { Loading } from "@/components/Loading";
import { SamePosts } from "@/features/post/Sames";
import { Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const Ktdtvt = dynamic(
  () => import("@/features/nganh-ktdtvt").then((mod) => mod.Ktdtvt),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Ngành điện tử viễn thông - Đại học Thái Nguyên"
        description="Ngành điện tử viễn thông - Đại học Thái Nguyên, thông tin ngành điện tử viễn thông Đại học Thái nguyên"
      />
      <Ktdtvt />
    </>
  );
};

export default Page;
