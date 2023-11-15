"use client";
import { FormMain } from "@/components/FormContact";

import {
  Box,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

export const Introduce = () => {
  return (
    <Box py={{ base: "4", lg: "20" }}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        maxW={"7xl"}
        margin={"0 auto"}
      >
        <Stack bg="White" height="full" padding={"22px"}>
          <Heading fontSize={{ base: "25px", md: "25px", lg: "46px" }} color={"#030d47"} fontWeight={700}>
            Đại học Thái Nguyên
          </Heading>
          <Heading fontSize={{ base: "25px", md: "25px", lg: "40px" }} color={"#030d47"} fontWeight={700}>
            Hệ đại học từ xa có gì nổi bật?
          </Heading>
          <Text
            fontSize={{ base: "22px", md: "md", lg: "16px" }}
            pb={{ lg: "5px" }}
            mt={"17px"}
          >
            Cùng với sự phát triển mạnh mẽ của Công nghệ thông tin, việc ứng dụng công nghệ số vào lĩnh vực giáo dục là một xu hướng tất yếu. Vậy đại học trực tuyến mang lại cho bạn những lợi ích gì?
          </Text>
          <List spacing={4} mt={"17px"}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='#565872' />
              Tiết kiệm thời gian và chi phí
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='#565872' />
              Bằng Đại học do Đại học Thái Nguyên cấp, không ghi hình thức đào tạo và được Bộ GD&DDT công nhận
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='#565872' />
              Đại học phù hợp với những người đi làm
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='#565872' />
              Mở ra cơ hội việc làm cho bạn
            </ListItem>
          </List>
        </Stack>
        <Stack mt={{ lg: "60px" }} paddingX={{ lg: "106px" }}><FormMain /></Stack>
      </SimpleGrid>
    </Box>
  );
};
