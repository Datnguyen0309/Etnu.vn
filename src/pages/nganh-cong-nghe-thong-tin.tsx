"use client";
import { Box } from "@chakra-ui/react";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Loading } from "@/components/Loading";
import { SamePosts } from "@/features/post/Sames";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const Cntt = dynamic(
  () => import("@/features/nganh-cntt").then((mod) => mod.Cntt),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
       title="Ngành công nghệ thông tin - Đại học Thái Nguyên"
       description="Ngành công nghệ thông tin - Đại học Thái Nguyên, thông tin ngành công nghệ thông tin Đại học Thái nguyên"
      />
      <Cntt />
     
    </>
  );
};

export default Page;
