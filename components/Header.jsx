import { Box, Stack, Text, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import Logo from './Logo'
export default function Header() {

  return (
    <>
    <HStack
            as={Flex}
            w={"full"}
            h={10}
            zIndex={2}
            top={0}
            left={0}
         
            position="absolute"
            justifyContent={"space-between"}
            textAling={"center"}
          >
            <Logo/>
            <Stack direction={"row"} spacing={6}>
              <Link href={"/"} legacyBehavior>
                <a>Anasayfa</a>
              </Link>
              <Link href={"/hakkimizda"} legacyBehavior>
                <a>Hakkımızda</a>
              </Link>
              <Link href={"/galeri"} legacyBehavior>
                <a>Galeri</a>
              </Link>
              <Link href={"/iletisim"} legacyBehavior>
                <a>İletişim</a>
              </Link>
            </Stack>
          </HStack>
    </>
  );
}
