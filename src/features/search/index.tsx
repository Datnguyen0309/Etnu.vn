"use client";
import { CardBlogS } from "@/components/CardBlog";
import { Loading } from "@/components/Loading";
import { clean } from "@/lib/sanitizeHtml";
import { formatDate } from "@/ultil/date";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  HStack,
  Heading,
  Input,
  SimpleGrid,
  VStack
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Layout } from "@/layouts/layoutNganh";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const StyledPaginate = styled(ReactPaginate)`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0 1rem;

  li a {
    border-radius: 7px;
    padding: 0.1rem 0.5rem;
    border: gray 1px solid;
    cursor: pointer;
    margin-right: 3px;
    margin-left: 3px;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 24px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
export const Search = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const search = useSearchParams();
  const searchQuery2 = search ? search.get("s") : null;

  const encodedSearchQuery2 = encodeURI(searchQuery2 || "");
  const router = useRouter();
  const [posts, setPosts] = useState<any[]>([]);
  const [totalPosts, setTotalPosts] = useState("0");
  const [isLoading, setIsLoading] = useState(true);
  const changePage = ({ selected }: { selected: any }) => {
    setPageNumber(selected);
  };

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery || "");
    router.push(`/search?s=${encodedSearchQuery}`);
  };
  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts/?type=news&page=${pageNumber}`, {
          next: { revalidate: 3 },
        });

        const data: { posts: any[]; totalPosts: string } = await res.json();
        const { posts, totalPosts } = data;
        posts?.length && setPosts(posts);
        totalPosts && setTotalPosts(totalPosts);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getPosts();
  }, [pageNumber]);

  const len = Math.ceil(Number(totalPosts) / 9) || 1;

  return (
    <Box>
      <Layout title="" path="/tin-tuc" titleNganh="Tin tức và Sự kiện"></Layout>

      <Container maxW={"8xl"}>
        <Box pt={"32px"}>
          <Suspense fallback={<Loading />}>
            <Box>
              <Heading
                size={"xl"}
                color={"red.600"}
                pb={"12px"}
                textAlign={{ base: "center", lg: "center" }}
              >
                Kết quả trả về cho từ khóa : '{encodedSearchQuery2}''
              </Heading>

              <Box pb={8}>
                <form onSubmit={onSearch}>
                  <HStack justifyContent={"center"} py={8} columnGap={0}>
                    <Input
                      value={searchQuery}
                      type="Text"
                      border={"1px solid #BFBFBF "}
                      borderRadius={0}
                      py={2}
                      maxW={820}
                      px={4}
                      placeholder="Tìm kiếm..."
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button
                      borderRadius={0}
                      onClick={onSearch}
                      bg={"blue.800"}
                      color={"white"}
                      _hover={{
                        bg: "red.600",
                      }}
                    >
                      Tìm kiếm
                    </Button>
                  </HStack>
                </form>
              </Box>

              {!isLoading && (
                <VStack spacing={"0px"}>
                  <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 2 }}
                  >
                    {posts?.map((post: any, index: number) => (
                      <CardBlogS
                        date={post?.date ? formatDate(post.date) : ""}
                        key={index}
                        title={post?.title?.rendered}
                        desc={clean(post.excerpt.rendered)}
                        tag="tin tức"
                        image={post?.featured_image || ""}
                        path={`/tin-tuc/${post?.slug}`}
                      />
                    ))}
                    {posts?.length === 0 && (
                      <Grid placeItems={"center"} height={"40vh"}>
                        Dữ liệu đang được chúng tôi cập nhập
                      </Grid>
                    )}
                  </SimpleGrid>
                </VStack>
              )}

              {isLoading && <Loading />}
            </Box>

            <HStack pt={"32px"} justify={"center"}>
              <StyledPaginate
                previousLabel="<"
                nextLabel=">"
                pageCount={Math.round(len / 3)}
                onPageChange={changePage}
                pageRangeDisplayed={1}
                marginPagesDisplayed={1}
              />
            </HStack>
          </Suspense>
        </Box>
        <Divider size={"xl"} />
      </Container>
    </Box>
  );
};
