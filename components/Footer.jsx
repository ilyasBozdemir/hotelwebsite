import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Icon,
  useColorModeValue,
  VisuallyHidden,
  Flex,
  HStack,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaMapMarkerAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

import { ReactNode } from "react";
import Link from "next/link";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <>[Güven Otel Logo]</>
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
        <Stack
          spacing={6}
          direction={{ base: "column", md: "row" }}
          justify={{ base: "space-between", md: "space-between" }}
        >
          <HStack >
            <Icon as={FaMapMarkerAlt} />
            <>Güneyyurt Kasabası Belediye Yanı Ermenek - KARAMAN</>
          </HStack>
          <HStack>
            <Icon as={BsFillTelephoneFill} />
            <Link href={"tel:905435403160"} legacyBehavior>
            <a>0543 540 31 60</a>
          </Link>
          </HStack>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "space-between", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>
            &copy; {new Date().getFullYear()} Güven Otel. Tüm Hakları Saklıdır.
          </Text>
          <Text>Desing By İlyas Bozdemir</Text>
        </Container>
      </Box>
    </Box>
  );
}
