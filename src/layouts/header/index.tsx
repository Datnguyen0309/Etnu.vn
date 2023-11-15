"use client";
import { FormPoup } from "@/components/FormContact";
import { ModalBase } from "@/components/Modal";
import { Box, Container, Divider, Flex, HStack, useDisclosure } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { DesktopNav } from "../components/DeskhopNav";
import { HeaderTop } from "../components/HeaderTop";
import { MobileNav } from "../components/MobileNav";
import { Logo } from "../components/Logo";
import { useModal } from "@/components/ModalContext";

interface NavProps {
  isSticky: boolean;
}
const navtransDown = keyframes`
  from {
    transform: translate(0, -90px);
  }
  to {
    transform: translate(0, 0);
  }
`;
const NavContainer = styled.nav`
  z-index: 1000;
  transition: all 0s ease-out;

  &.sticky {
    position: fixed;
    z-index: 1000;
    width: 100%;
    top: 0px;
    background:radial-gradient(circle, rgba(5,70,89,1) 2%, rgba(98,212,245,1) 100%, rgba(252,89,52,1) 100%) !important;
    animation: ${navtransDown} 0.7s 1 linear;
  }

  @media (max-width: 992px) {
    &.sticky {
      top: 0px;
    }
  }
`;

const NavbarBrand = styled.div`
  display: flex;
  justify-content: center;

  &.sticky {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }
`;

const HiddenBox = styled(Box)`
  display: none;
  height: 90px;

  &.sticky {
    display: block;
  }
`;

export const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { onToggle, onOpen, onClose, isOpen } = useDisclosure();

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navContainerClass = isSticky ? "sticky" : "";
  const navbarBrandClass = isSticky ? "sticky" : "";
  const hiddenBoxClass = isSticky ? "sticky" : "";

  const [id, setId] = useState("");
  const [href, setHref] = useState(
    ""
  );

  return (
    <>
      <NavContainer className={navContainerClass}>
        <NavbarBrand className={navbarBrandClass}>
          <Container
            as={Flex}
            color={"gray.600"}
            minH={"60px"}
            py={{ base: 2 }}
            align={"center"}
            maxW={"7xl"}
            mt={{ lg: isSticky ? "0px" : "60px", base: "0px" }}
            boxShadow={isSticky
              ? "none"
              : "#000"}
            pos={"absolute"}
            zIndex={5}
          >
            <Flex ml={{ base: -2 }} display={{ base: "flex", lg: "none" }}>
              <MobileNav />
            </Flex>
            <Flex
              flex={{ base: 1 }}
              justify={{ base: "center", lg: "space-between" }}
              align={"center"}
            >
              <Logo />
              <Flex display={{ base: "none", lg: "flex" }}>
                <DesktopNav />
              </Flex>
            </Flex>

          </Container>
          <HiddenBox className={hiddenBoxClass}></HiddenBox>
        </NavbarBrand>
      </NavContainer></>
  );
};
export const Header = () => {
  const [id, setId] = useState("");
  const [href, setHref] = useState("");
  const { onOpen, onClose, isOpen, onToggle } = useModal();

  return (

    <Box>

      <Container
        zIndex={"1"}
        display={{ base: "none", lg: "block" }}
        pos={"absolute"}
        overflow={"hidden"}
        maxW={"7xl"}
        right={"0"}
        left={"0"}
      >
        <HeaderTop />
      </Container>
      <Navigation />
    </Box>
  );
};

