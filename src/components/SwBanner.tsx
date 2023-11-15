import { useSize } from "@/hooks/useSizeWindow";
import { Box, Container, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const SwBanner = () => {
  const { size } = useSize();

  interface CardProps {
    heading: string;
    description: string;
    image: string;
  }

  const Card = ({ heading, description, image, }: CardProps) => (
    <Box
      overflow="hidden"
      p={"28px 30px 25px"}
      bg={"rgba(255, 255, 255, 0.25)"}
      height={"180px"}
    >
      <Flex align={"center"}>
        <Box w={"90px"} h={"90px"}>
          <Image src={image} alt={heading} />
        </Box>
        <Stack align={"start"} spacing={2} p={"20px"} color={"white"}>
          <Box h={"100px"} >
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={"sm"} >
              {description}
            </Text>
          </Box>

        </Stack>
      </Flex>
    </Box>
  );

  const cardsData = [
    {
      heading: "Học online 100%",
      image: "/02.webp",
      description: "Học mọi lúc, mọi nơi; tiết kiệm thời gian và chi phí",
    },
    {
      heading: "Thời gian đào tạo ",
      image: "/001.webp",
      description: "Thời gian đào tạo từ 2-2,5 năm tùy đối tượng đầu vào",
    },
    {
      heading: "Phương thức tuyển sinh",
      image: "/mu.webp",
      description: "Xét tuyển hồ sơ đăng ký (không thi tuyển)",
    },
    {
      heading: "Bằng tốt nghiệp Đại học",
      image: "/05.webp",
      description: "Bằng có giá trị tương đương hệ chính quy, được Bộ GD&ĐT công nhận",
    },

  ];

  return (
    <Box >
      <Container maxW={"7xl"} pb={"10px"} px={0}>
        <Swiper
          slidesPerView={size.width > 820 ? 3 : 1} // Display 3 cards on screens wider than 768px, and 1 card on smaller screens
          spaceBetween={5}
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {cardsData.map((card, index) => (
            <SwiperSlide key={index}>
              <Card
                key={index}
                heading={card.heading}
                image={card.image}
                description={card.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Event;
