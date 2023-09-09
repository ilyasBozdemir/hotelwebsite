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
  Divider,
} from "@chakra-ui/react";

import Link from "next/link";
import { LinkItems } from "../constants/LinkItems";
import Logo from "./Logo";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bgGradient={{
        base: "linear(to-r, gray.100, gray.400)",
        md: "linear(to-r, gray.200, gray.300)",
      }}
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

export default function Footer() {
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
        <Logo />

        <Stack direction={"row"} spacing={6}>
          {LinkItems.map((link, i) => (
            <>
              <Link key={i} href={link.href} passHref>
                <Text
                  as="span"
                  _hover={{
                    borderBottom: "3px solid #fa3628",
                    color: "gray.600",
                  }}
                  cursor={"pointer"}
                >
                  {link.label}
                </Text>
              </Link>
            </>
          ))}
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

          <HStack>
            <Link
              href={"https://appizsoft.com/ref=guvenotell.com"}
              target={"_blank"}
              passHref
            >
              {" "}
              <img
                src={"https://appizsoftcom.vercel.app/logo-mobile.png"}
                width={20}
              ></img>
            </Link>
            <Text as={"small"}>
              <Link
                href={"https://appizsoft.com/ref=guvenotell.com"}
                target={"_blank"}
                passHref
              >
                <>Appizsoft Yazılım</>
              </Link>{" "}
              tarafından geliştirilimiştir
            </Text>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}
