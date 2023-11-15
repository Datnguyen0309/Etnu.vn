"use client";

import { CardBlog } from "@/components/CardBlog";
import { HeadSection } from "@/components/HeadSection";
import { formatDate } from "@/ultil/date";
import {
  Button,
  Container,
  GridItem,
  HStack,
  Heading,
  SimpleGrid
} from "@chakra-ui/react";
import Link from "next/link";

export const Event = ({ news, notifis }: { news: any[]; notifis: any[] }) => {
  return (
    <Container maxW={"7xl"} py={"48px"}>
      <HeadSection
        title="Tin tức mới nhất"
        subtitle=""
        desc=""

      />
      <SimpleGrid columns={{ base: 1, md: 2 }} pt={"24px"} spacing={"8"}>
        <GridItem>
          <Heading
            as={"h3"}
            size={{ base: "sm", lg: "md" }}
            borderBottom={"1px solid"}
            borderColor={"gray.100"}
            textAlign={{ base: "center", lg: "left" }}
            color={"blue.800"}
          >
            Tin tức
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap={"10px"}>
            {news?.map((post, index) => (
              <CardBlog
                key={index}
                image={post?.featured_image || ""}
                tag="Tin tức"
                bgTag="red.500"
                title={post?.title?.rendered || ""}
                desc={post?.excerpt?.rendered || ""}
                path={`/${post.slug}`}
                date={post?.date ? formatDate(post.date) : ""}
              />
            ))}
          </SimpleGrid>
        </GridItem>
        {notifis?.length > 0 && (
          <GridItem>
            <Heading
              as={"h3"}
              size={{ base: "sm", lg: "md" }}
              textAlign={{ base: "center", lg: "right" }}
              borderBottom={"1px solid"}
              borderColor={"gray.100"}
              color={"blue.800"}
            >
              Thông báo
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap={"10px"}>
              {notifis?.map((post, index) => (
                <CardBlog
                  key={index}
                  image={post?.featured_image || ""}
                  tag="Thông báo"
                  bgTag="green.500"
                  title={post?.title?.rendered || ""}
                  desc={post?.excerpt?.rendered || ""}
                  path={`/${post.slug}`}
                  date={post?.date ? formatDate(post.date) : ""}
                />
              ))}
            </SimpleGrid>
          </GridItem>
        )}
      </SimpleGrid>

      <HStack justify={"center"}>
        <Button
          as={Link}
          href={"/tin-tuc"}
          colorScheme={"#064121"}
          variant={"link"}
          fontSize={{ base: "md", md: "xl" }}
          py={3}
        >
          Xem tất cả
        </Button>
      </HStack>
    </Container>
  );
};
