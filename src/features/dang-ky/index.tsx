import { FormMain } from "@/components/FormContact";
import { Layout } from "@/layouts/layoutNganh";
import {
  Box,
  Container,
  GridItem,
  HStack,
  Heading,
  ListItem,
  SimpleGrid,
  UnorderedList,
  VStack
} from "@chakra-ui/react";

export const dangky = () => {
  return (
    <>
      <Layout titleNganh="Đăng ký" path="dang-ky" title="Đăng ký" />
      <Box  >
        <Container maxW={"7xl"} py="60px">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"16px"}>
            <GridItem border={"1px solid"} borderColor={"gray.400"} p={"16px"} py={20}>
              <Heading
                as={"h2"}
                size={{ base: "md", lg: "lg" }}
                textAlign={"center"}
                pb={"40px"}
              >
                Đăng ký nhận tư vấn và nhận lộ trình học nhanh chóng
              </Heading>
              <VStack align={"start"} fontWeight={500} spacing={"16px"}>
                <HStack>
                  <VStack align={"start"}>
                    <UnorderedList spacing={5} textAlign={"justify"}>
                      <ListItem ml={"38px"}>
                        Chương trình do Đại học Thái Nguyên đào tạo và cấp bằng, được Bộ GD&ĐT công nhận
                      </ListItem>
                      <ListItem ml={"38px"}>
                        Thời gian học nhanh, tiết kiệm chi phí. Học 100% Online mọi lúc mọi nơi
                      </ListItem>
                      <ListItem ml={"38px"}>
                        Chỉ xét tuyển hồ sơ đầu vào. Không phải thi tuyển
                      </ListItem>
                      <ListItem ml={"38px"}>
                        Đối tượng xét tuyển: Người đã có bằng tốt nghiệp Cao đẳng, Đại học
                      </ListItem>
                    </UnorderedList>
                  </VStack>
                </HStack>
                {/* <HStack>
                  <Circle p={"8px"} bg={"blue.500"}>
                    <Icon as={MdOutlineMailOutline} color={"white"} />
                  </Circle>
                  <Link href={"mailto:daihoctructuyen@tnu.edu.vn"}>
                    Email: daihoctructuyen@tnu.edu.vn
                  </Link>
                </HStack> */}
                {/* <HStack>
                  <Circle p={"8px"} bg={"blue.500"}>
                    <Icon as={MdPhone} color={"white"} />
                  </Circle>
                  <Link href={"tel:0914709118"}>Hotline: 0914709118</Link>
                </HStack> */}
              </VStack>
            </GridItem>
            <GridItem border={"1px solid"} borderColor={"gray.400"} p={"16px"}>
              <FormMain title="Vui lòng điền thông tin" />
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 2 }}></GridItem>
          </SimpleGrid>
        </Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.7609480745314!2d105.77113527669943!3d21.04224898731216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454c918a64e17%3A0x6a26c7ecd7ef4df2!2zMTE2IFAuIFRy4bqnbiBW4bu5LCBNYWkgROG7i2NoLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1695417775713!5m2!1sen!2s"
          width="100%"
          height="500"
          style={{ border: "none" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>

    </>
  );
};
