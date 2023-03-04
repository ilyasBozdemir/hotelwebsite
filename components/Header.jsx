import {
  Stack,
  Text,
  Flex,
  HStack,
  Divider,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LinkItems } from "../constants/LinkItems";
import { useRouter } from "next/router";
import OnlineReservationButton from "./OnlineReservationButton";
export default function Header(props) {
  const router = useRouter();
  const linkHoverStyles = {
    transition: "transform 0.2s ease-in-out",
    transform: "scale(1)",
    _hover: {
      color: "#fa3628",
      transform: "scale(1.1)",
    },
  };
  return (
    <Stack
      direction={"column"}
      //pos={"fixed"}
      //top={0}
      //left={0}
      //right={0}
      zIndex={100}
      w={"full"}
      h={"auto"}
      bg={"white"}
      color={"black"}
      boxShadow={'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}
    >

      <Stack
        direction={"row"}
        spacing={6}
        as={Flex}
        justifyContent={"space-around"}
        fontSize={{ base: "12px", md: "15px" }}
        my={1}
      >
        <>
          <HStack as={Link} href="tel:+905435403160" spacing={3} _hover={{ color: 'gray.600' }}>
            <Icon as={BsFillTelephoneFill} />
            <button>

              <div itemscope itemtype="http://schema.org/Organization">
                <span itemprop="telephone">0543 540 31 60</span>
              </div>

            </button>
          </HStack>
        </>
        <>
          <HStack as={Link} href="tel:+905312486322" spacing={3} _hover={{ color: 'gray.600' }}>
            <Icon as={BsFillTelephoneFill} />
            <button>

              <div itemscope itemtype="http://schema.org/Organization">
                <span itemprop="telephone">0531 248 63 22</span>
              </div>

            </button>
          </HStack>
        </>
        <>
          <HStack
            as={Link}
            href={
              "https://www.google.com/maps?hl=tr&gl=TR&um=1&ie=UTF-8&fb=1&sa=X&geocode=KXUd0-WP69sUMX2ft-nHjTBQ&daddr=G%C3%BCven+Otel,+Oda+Mahallesi+Belediye+Sokak+G%C3%BCneyyurt+Belediyesi+Yan%C4%B1,+70400,+70450+Ermenek/Karaman"
            }
            spacing={3}
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ color: 'gray.600' }}
          >
            <Icon as={FaMapMarkerAlt} />
            <button>Yol Tarifi</button>
          </HStack>
        </>
      </Stack>
      <Divider orientation='horizontal' bg={'#f70f4d'} />
      <HStack
        as={Flex}
        h={10}
        justifyContent={"space-between"}
        textAlign={"center"}
        bg={"white"}
      >
        <HStack direction={"row"}>
          <Stack
            as={Flex}
            pos={"relative"}
            alignItems={"center"}
            cursor="pointer"
            display={"flex !important"}
            direction={"column"}
            overflow={"auto"}
            px={3}
            top={"5px"}
            fontWeight={"semibold"}
            onClick={props.onOpen}
          >
            <Icon
              pos={"absolute"}
              display={{ base: "initial", md: "none" }}
              variant="ghost"
              aria-label="open menu"
              as={AiOutlineMenu}
              bg="transparent"
              size={"md"}
            />

            <Text py={1} display={{ base: "initial", md: "none" }} as="small">
              Menü
            </Text>
          </Stack>
          <Logo />
        </HStack>

        <Stack display={{ base: "initial", md: "none" }}
          direction={"row"}>
          <OnlineReservationButton />
        </Stack>
        <Stack
          display={{ base: "none", md: "initial" }}
          direction={"row"}
          spacing={6}
        >
          {LinkItems.map((link, i) => (
            <>
              <Link key={i} href={link.href} shallow passHref >
                <Text
                  as="span"
                  _hover={{ opacity: 0.8 }}
                  color={router.pathname === link.href ? "#fa3628" : "gray.600"}
                  cursor={"pointer"}
                  textTransform='uppercase'
                  fontWeight={'semibold'}
                  sx={linkHoverStyles}
                >
                  {link.label}
                </Text>
              </Link>
            </>
          ))}
          <>
            <OnlineReservationButton />
          </>
        </Stack>

      </HStack>

    </Stack>
  );
}

