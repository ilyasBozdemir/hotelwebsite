import {
  Box,
  Stack,
  Text,
  Flex,
  HStack,
  Button,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { AiOutlineMenu } from "react-icons/ai";
export default function Header(props) {
  return (
    <>
      <HStack
        as={Flex}
        w={"full"}
        h={10}
        justifyContent={"space-between"}
        textAlign={"center"}
        fontSize={{
          base: "12px",
          md: "14px",
          lg: "16px",
          xl: "28px",
          "2xl": "24px",
        }}
        pos={'fixed'}
        top={0}
        left={0}
        right={0}
        zIndex={100}
        bg={'white'}
      >
        <HStack direction={'row'}>
          <IconButton
            variant={"ghost"}
            onClick={props.onOpen}
            icon={<AiOutlineMenu />}
            display={{ base: "initial", md: "none" }}
            p={3}
          />

          <Logo  />
        </HStack>

        <Stack
          display={{ base: "none", md: "initial" }}
          direction={"row"}
          spacing={6}
        >
          <Link href={"/"} legacyBehavior>
            <a>Anasayfa</a>
          </Link>
          <Link href={"/hakkimizda"} legacyBehavior>
            <a>Hakkımızda</a>
          </Link>
          <Link href={"/foto-galeri"} legacyBehavior>
            <a>Foto Galeri</a>
          </Link>
          <Link href={"/iletisim"} legacyBehavior>
            <a>İletişim</a>
          </Link>
        </Stack>
      </HStack>
    </>
  );
}
