import {
  Box,
  Stack,
  Text,
  Flex,
  HStack,
  Button,
  IconButton,
  Divider,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Header(props) {
  return (
    <Stack
      direction={"column"}
      pos={"fixed"}
      top={0}
      left={0}
      right={0}
      zIndex={100}
      w={"full"}
      h={"auto"}
      bg={"white"}
      color={"black"}
    >
      <Stack
        direction={"row"}
        spacing={6}
        as={Flex}
        justifyContent={"space-around"}
        fontSize={{ base: "12px", md: "15px" }}
      >
        <HStack spacing={3}>
          <Icon as={BsFillTelephoneFill} />

       
          <Link href="tel:+905435403160">
<button>0543 540 31 60</button>
</Link>
        </HStack>
        <HStack spacing={3}>
          <Icon as={BsFillTelephoneFill} />
          <Link href={"tel:+905312486322"} legacyBehavior>
            <button>0531 248 63 22</button>
          </Link>
        </HStack>
        <HStack spacing={3}>
          <Icon as={FaMapMarkerAlt} />
          <Link
            href={
              "https://www.google.com/maps/place/G%C3%BCven+Otel/@36.6812645,32.8054781,15z/data=!4m5!3m4!1s0x0:0x50308dc7e9b79f7d!8m2!3d36.6812645!4d32.8054781"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Yol Tarifi</button>
          </Link>
        </HStack>
      </Stack>
      <Divider />
      <HStack
        as={Flex}
        h={10}
        justifyContent={"space-between"}
        textAlign={"center"}
        bg={"white"}
      >
        <HStack direction={"row"}>
          <IconButton
            variant={"ghost"}
            onClick={props.onOpen}
            icon={<AiOutlineMenu />}
            display={{ base: "initial", md: "none" }}
            p={3}
          />

          <Logo />
        </HStack>

        <Stack
          display={{ base: "none", md: "initial" }}
          direction={"row"}
          spacing={6}
        >
          <Link href={"/"} legacyBehavior>
            <Text
              as="a"
              _hover={{ borderBottom: "5px solid #26a2e0" }}
              cursor={"pointer"}
            >
              Anasayfa
            </Text>
          </Link>
          <Link href={"/hakkimizda"} legacyBehavior>
            <Text
              as="a"
              _hover={{ borderBottom: "5px solid #26a2e0" }}
              cursor={"pointer"}
            >
              Hakkımızda
            </Text>
          </Link>
          <Link href={"/foto-galeri"} legacyBehavior>
            <Text
              as="a"
              _hover={{ borderBottom: "5px solid #26a2e0" }}
              cursor={"pointer"}
            >
              Foto Galeri
            </Text>
          </Link>
          <Link href={"/iletisim"} legacyBehavior>
            <Text
              as="a"
              _hover={{ borderBottom: "5px solid #26a2e0" }}
              cursor={"pointer"}
            >
              İletişim
            </Text>
          </Link>
        </Stack>
      </HStack>
    </Stack>
  );
}
