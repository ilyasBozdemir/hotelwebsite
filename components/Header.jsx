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
    >
       <Stack
          direction={"row"}
          spacing={6}
          as={Flex}
          justifyContent={"space-between"}  direction={"row"}
          fontSize={{base:'12px',md:'15px'}}
        >
          <HStack   spacing={3}   >
            <Icon as={BsFillTelephoneFill} />
            <Link href={"tel:+903387368005"} legacyBehavior>
              <a>0338 736 80 05</a>
            </Link>
            </HStack>

            <HStack  spacing={3} >
            <Icon as={BsFillTelephoneFill} />
            <Link href={"tel:+905435403160"} legacyBehavior>
              <a>0543 540 31 60</a>
            </Link>
          </HStack>
          <HStack  spacing={3} >
            <Icon as={BsFillTelephoneFill} />
            <Link href={"tel:+905312486322"} legacyBehavior>
              <a>0531 248 63 22</a>
            </Link>
          </HStack>

        </Stack>
        <Divider/>
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
    </Stack>
  );
}
