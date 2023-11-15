import { SwBanner } from "@/components/SwBanner";
import styles from "@/styles/Home.module.css";
import { Box, Container, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import "swiper/css";

export const Banner = () => {
  return (
    <Box
      bgSize="cover"
      bgRepeat={"no-repeat"}
      position="relative"

    >
      <Image

        priority
        alt="banner"
        src={"/dhtnbanner.webp"}
        fill
        quality={100}
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: "-1",
        }}
      />
      <Container maxW="7xl" >
        <SimpleGrid
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          spacing={30}

        >
          <GridItem
            pt={{ base: "100px", md: "40px", lg: "40px" }}
            pb={{ base: "0", md: "70px", lg: "40px" }}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            justifyContent={"center"}
          >
            <Box ml={0} display={"flex"}>
              <Text
                fontWeight={"bold"}
                textAlign={"left"}
                pt={"12px"}
                fontSize={{ base: "26px", md: "26px", lg: "48px" }}
                color={"white"}
              >
                <span className={styles["appearing-text"]}>Đại học Thái Nguyên</span><br></br>
                <span className={styles["appearing-text"]}>hệ</span>
                <span className={styles["appearing-text"]}> &nbsp;</span>
                <span className={styles["appearing-text"]}>Đại </span>
                <span className={styles["appearing-text"]}>&nbsp; </span>
                <span className={styles["appearing-text"]}>học</span>
                <span className={styles["appearing-text"]}>&nbsp; </span>
                <span className={styles["appearing-text"]}>từ</span>
                <span className={styles["appearing-text"]}>&nbsp; </span>
                <span className={styles["appearing-text"]}>xa</span>
              </Text>
            </Box>
            <Text
              fontWeight={"500"}
              textAlign={"left"}
              fontSize={{ base: "16px", md: "16px", lg: "18px" }}
              color={"#ffffff"}
              className={styles["flashing-text"]}
              py={4}
            >
              Cùng kiến tạo những giá trị mới - Together we create new success.
            </Text>
          </GridItem>
          <GridItem
            pt={{ base: "50px", md: "128px", lg: "150px" }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            pb={{ base: "50px", }}
          >
            <Image
              priority
              alt="banner"
              src={"/bannner.png"}
              quality={100}
              sizes="100vw"
              width={500}
              height={200}
            />
          </GridItem>
        </SimpleGrid>
        <SwBanner />
      </Container>
    </Box>
  );
};