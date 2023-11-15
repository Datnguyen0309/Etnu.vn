"use client";

import { Box } from "@chakra-ui/react";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Loading } from "@/components/Loading";
import { SamePosts } from "@/features/post/Sames";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";

const Qtkd = dynamic(
  () => import("@/features/nganh-qtkd").then((mod) => mod.Qtkd),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Ngành quản trị kinh doanh - Học viện Công nghệ Bưu chính Viễn thông"
        description="Ngành quản trị kinh doanh - Học viện Công nghệ Bưu chính Viễn thông"
      />
      <Qtkd />
    </>
  )
};

export default Page;
