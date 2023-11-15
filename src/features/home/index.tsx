"use client";

import { FormPoup } from "@/components/FormContact";
import { Loading } from "@/components/Loading";
import { Box, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Banner = dynamic(() => import("./Banner").then((mod) => mod.Banner), {
  loading: () => <Loading />,
});

const Introduce = dynamic(
  () => import("./Introduce").then((mod) => mod.Introduce),
  {
    loading: () => <Loading />,
  }
);
const Category = dynamic(
  () => import("./Category").then((mod) => mod.Categorys),
  {
    loading: () => <Loading />,
  }
);
const VideoTiktok = dynamic(
  () => import("./VideoTiktok").then((mod) => mod.VideoTiktok),
  {
    loading: () => <Loading />,
  }
);
const Counters = dynamic(
  () => import("./Counters").then((mod) => mod.Counters),
  {
    loading: () => <Loading />,
  }
);
const Comment = dynamic(
  () => import("./Comment").then((mod) => mod.Comment),
  {
    loading: () => <Loading />,
  }
);

const Event = dynamic(() => import("./Event").then((mod) => mod.Event), {
  loading: () => <Loading />,
});
const Question = dynamic(() => import("./Question").then((mod) => mod.Question), {
  loading: () => <Loading />,
});

const ModalBase = dynamic(
  () => import("./Modal").then((mod) => mod.ModalBase),
  {
    loading: () => <Loading />,
  }
);


export const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [id, setId] = useState("");
  const [href, setHref] = useState("");
  const [news, setNews] = useState<any[]>([]);
  const [notifis, setNotifis] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getForm = async () => {
      try {
        const res = await fetch(`/api/data-form/?type=form-poup`);
        const data = await res.json();
        const id = data?.id || "";
        id && setId(id);
        const href = data?.href || "";
        href && setHref(href);
      } catch (error) {
        console.log(error);
      }
    };
    getForm();
  }, [id, href, isOpen]);
  useEffect(() => {
    setTimeout(() => {
      onOpen();
    }, 3000);
  }, []);

  useEffect(() => {

    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts/?type=notifis&page=1`, {
          next: { revalidate: 3 },
        });

        const data: { posts: any[] } = await res.json();
        const { posts } = data;
        posts?.length && setNotifis(posts.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getPosts();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts/?type=news&page=1`, {
          next: { revalidate: 3 },
        });

        const data: { posts: any[] } = await res.json();
        const { posts } = data;
        posts?.length && setNews(posts.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getPosts();
  }, []);
  return (
    <>
      <Banner />
      <Introduce />
      <Category />
      <VideoTiktok />
      <Counters />
      <Comment />
      <Event news={news} notifis={notifis} />
      <Question />
      <ModalBase
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        form={<FormPoup title="Để lại thông tin" id={id} href={href} />}
      />
      <Box
        pos={"fixed"}
        top={"50%"}
        right={"0"}
        transform={"translateY(-50%)"}
        className="CTA"
        zIndex={5}
      ></Box>
    </>
  );
};
