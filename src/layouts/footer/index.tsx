"use client";

import { FormPoup } from "@/components/FormContact";
import { ModalBase } from "@/components/Modal";
import { useModal } from "@/components/ModalContext";
import {
  Box,
  Container,
  Flex,
  GridItem,
  Heading,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
  VisuallyHidden,
  chakra,
  useColorModeValue
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { InputRes } from "../../components/InputRes";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  const [id, setId] = useState("");
  const [href, setHref] = useState("");

  const { onOpen, onClose, isOpen, onToggle } = useModal();

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
  return (
    <>
      <Box bg={"blue.900"} color={"white"} mt={"135px"}>
        <Container as={Stack} maxW={"7xl"} mb={"20px"}>
          <Flex justify="space-around" align={"center"} direction={{ lg: "row", base: "column" }} pos={"relative"} padding={"40px"} top={{ lg: "-79px", base: "-117px", md: "-105px" }} boxShadow='dark-lg' rounded='md' bg='white'>
            <Box>
              <Heading size="md" mb={4} color={"#030d47"}>
                Đăng ký nhận bản tin
              </Heading>
              <Text size="md" mb={4} color={"#565872"}>
                Để lại email để cập nhật tin tức và thông báo mới nhất bạn nhé!
              </Text>
            </Box>
            <Box maxW="md">
              <InputRes
                placeholder="Nhập email để đăng ký"
                label="Đăng ký"
                onClick={() => onToggle && onToggle()}
              />
            </Box>
          </Flex>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8} mt={{ lg: "-25px", base: "-90px" }}>
            <GridItem colSpan={{ base: 1, sm: 2 }}>
              <Stack align={"flex-start"}>
                <ListHeader>Thông tin liên hệ</ListHeader>
                <Box as={Link} href={"#"}>
                  Văn phòng tuyển sinh:
                </Box>
                <UnorderedList>
                  <ListItem>
                    Hà Nội: Số 116 Trần Vĩ, Phường Mai Dịch, Quận Cầu Giấy,
                    Thành Phố Hà Nội
                  </ListItem>
                  <ListItem>
                    Hồ Chí Minh: Số 91 Ký Con, phường Nguyễn Thái Bình, Quận 1,
                    TP Hồ Chí Minh
                  </ListItem>
                </UnorderedList>
                <Box as={Link} href={"tel:0914709118"}>
                  Hotline: 0914709118
                </Box>
                <Box as={Link} href={"mailto:daihoctructuyen@tnu.edu.vn"}>
                  Email: daihoctructuyen@tnu.edu.vn
                </Box>
                <Box
                  as={Link}
                  href={
                    "https://www.facebook.com/groups/800071498531146?locale=vi_VN"
                  }
                  textDecor={"underline"}
                  target="_blank"
                >
                  Group Facebook: daihocthainguyen - elearning
                </Box>
                <Box
                  as={Link}
                  href={"https://www.facebook.com/TNUElearning?locale=vi_VN"}
                  textDecor={"underline"}
                  target="_blank"
                >
                  Fanpage: daihocthainguyen - elearning
                </Box>
              </Stack>
            </GridItem>

            <Stack align={"flex-start"}>
              <ListHeader>Hỗ trợ</ListHeader>
              <Box as={Link} href={"/gioi-thieu"} target="_blank">
                Về chúng tôi
              </Box>
              <Box as={Link} href={"/lich-khai-giang"} target="_blank">
                Lịch khai giảng
              </Box>
              <Box as={Link} href={"/dang-ky"} target="_blank">
                Đăng ký
              </Box>
              <Box as={Link} href={"/tin-tuc"} target="_blank">
                Tin tức
              </Box>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Hợp tác tuyển sinh</ListHeader>
              <Link href={"https://timdoitac.aum.edu.vn/"} target="_blank">
                <Image
                  src={"/timdoitac.jpg"}
                  width={150}
                  height={100}
                  alt="Tìm đối tác"
                  style={{ borderRadius: "6px" }}
                />
              </Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Mạng xã hội</ListHeader>
              <Stack direction={"row"} spacing={6}>
                <Link
                  href={"https://www.facebook.com/TNUElearning"}
                  target="_blank"
                >
                  <FaFacebook color="white" fontSize="30px" />
                </Link>
                <Link
                  href={"https://zalo.me/0914709118"}
                  target="_blank"
                >
                  <SiZalo color="white" fontSize="30px" />
                </Link>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>

        <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"gray.200"}>
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "center" }}
            align={{ md: "center" }}
          >
            <Text textAlign="center">© 2023 Copyright by IT AUM</Text>
          </Container>
        </Box>
      </Box>
      <ModalBase
        isOpen={isOpen || false}
        onClose={() => onClose && onClose()}
        onOpen={() => onOpen && onOpen()}
      >
        <FormPoup id={id} href={href} title="Để lại thông tin" />
      </ModalBase>
    </>
  );
};
