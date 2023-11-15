import { Heading, VStack, Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      style={{ display: "flex", alignItems: "center", gap: "10px" }}
    >
      <Image
        priority
        width={70}
        height={70}
        src={`/logo-dhthainguyen.webp`}
        alt="logo DHTN "
        style={{ borderRadius: "50%" }}
      />
      <VStack color={"white"}>
        <Box maxW={"25rem"}>
          <Heading
            as="h2"
            size={{ lg: "md", base: "xs" }}
            textAlign={"center"}
          >
            Đại học Thái Nguyên
          </Heading>
        </Box>
      </VStack>
    </Link>
  );
};
