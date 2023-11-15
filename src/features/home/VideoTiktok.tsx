import {
  AspectRatio,
  Box,
  Container
} from "@chakra-ui/react";
import Image from "next/image";

export const VideoTiktok = () => {
  return (
    <Container maxW={"5xl"} height={"auto"} mb={"40px"} >
      <Box pos={"relative"} top={{ lg: "100px", base: "22px" }} zIndex={2} left={{ lg: "-98px", base: "-23" }} maxW={{ base: "100px", lg: "305px" }}>
        <Image
          priority
          alt="Mountains"
          src={"/cap.webp"}
          width={384}
          height={194}
          style={{
          }}
        />
      </Box>
      <Box pos={"relative"}>
        <Image
          priority
          alt="Mountains"
          src={"/laptop.webp"}
          width={1073}
          height={769}
          style={{
            width: "100%",
          }}
        />
        <AspectRatio maxW='952px' ratio={1} pos={"absolute"} top={{ lg: "20px", base: "8px" }} maxH={{ lg: "555px", base: "190px", md: "450px" }} zIndex={1} right={0} left={{ lg: "19px", base: "0" }}>
          <iframe
            title='naruto'
            src='/Video FB.mp4'
            allowFullScreen
          />
        </AspectRatio>
      </Box>
    </Container>
  );
};
