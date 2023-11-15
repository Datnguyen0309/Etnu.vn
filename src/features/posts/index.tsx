"use client";

import { Loading } from "@/components/Loading";
import { Box, Container, Divider, Heading } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { Layout } from "@/layouts/layoutNganh";
const ListPosts = dynamic(
  () => import("./ListPosts").then((mod) => mod.ListPosts),
  {
    loading: () => <Loading />,
  }
);

export const Posts = () => {
  const router = useRouter();
  const handleRouter = ({ selected }: { selected: number }) => {
    router.push(`/tin-tuc?page=${selected + 1}`);
  };

  return (
    <>
    <Layout titleNganh="Tin tức và Sự kiện " path="tin-tuc" title="Tin tức và Sự Kiện" /><Box pb={"40px"}>
      <Box mt={"32px"}>
        <Suspense fallback={<Loading />}>
        </Suspense>
      </Box>

      <Divider size={"xl"} />
      <Box pt={"32px"}>
        <Suspense fallback={<Loading />}>
          <ListPosts handleRouter={handleRouter} />
        </Suspense>
      </Box>
    </Box></>
  );
};
