
import {
  Divider,
  HStack,
  Icon,
  Link,
  Stack,
  Tag,
  TagLabel,
  VisuallyHidden,
  chakra
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BiMap } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { SiZalo } from "react-icons/si";

export const SocialButton = ({
  children,
  label,
  href,
  bagr,
}: {
  children: ReactNode;
  label: string;
  href: string;
  bagr: string;
}) => {
  return (
    <chakra.button
      bg={bagr}
      rounded={"md"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      border={"1.8px solid white"}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
export const Tags = ({
  label,
  type,
  children,
}: {
  label: string;
  type: string;
  children: ReactNode;
}) => {
  return (
    <Tag
      borderRadius="full"
      variant="solid"
      bg={"transparent"}
      py="4px"
      px="4px"
      as={Link}
      href={`${type}:${label}`}
    >
      {children}
      <TagLabel fontSize={{ base: ".6rem", md: "sm" }}>{label}</TagLabel>
    </Tag>
  );
};

export const HeaderTop = () => {
  return (


    <><HStack
      align={"center"}
      py={1}
      height={"57px"}
    >

      <HStack
        w={{ base: "100vw", lg: "-moz-fit-content" }}
        display="flex"
        justifyContent={{ base: "space-between", lg: "flex" }}
      >
        <Stack direction={"row"} spacing={5} alignItems={"center"}>
          <Tags type="address" label="Tại Hà Nội: Số 116 Trần Vĩ, Mai Dịch, Cầu Giấy, Hà Nội">
            <Icon as={BiMap} style={{ marginRight: "10px", fontSize: "20px" }} />
          </Tags>
          <Tags type="tel" label="0914709118">
            <Icon as={LuPhone} style={{ marginRight: "10px" }} />
          </Tags>

          <Tags type="mailto" label="daihoctructuyen@tnu.edu.vn">
            <Icon as={MdOutlineMail} style={{ marginRight: "10px" }} />
          </Tags>
        </Stack>

      </HStack>

      <HStack spacing={3} display={{ base: "none", lg: "flex" }}>
        <Link
          href={"https://www.facebook.com/TNUElearning"}
          target="_blank"
          border={"1px solid #fff"}
          p={"7px"}
          borderRadius={"5px"}
        >
          <FaFacebook color="white" />
        </Link>
        <Link
          href={"https://zalo.me/0914709118"}
          target="_blank"
          border={"1px solid #fff"}
          p={"7px"}
          borderRadius={"5px"}
        >
          <SiZalo color="white" />
        </Link>
      </HStack>


    </HStack>
      <Divider borderBottom={"1px solid rgba(255, 255, 255, 0.08)"} />
    </>

  );
};
