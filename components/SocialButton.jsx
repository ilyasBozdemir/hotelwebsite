import React from "react";
import { VisuallyHidden, chakra, useColorModeValue } from "@chakra-ui/react";

function SocialButton({ children, label, href }) {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={{ base: 7, md: 8 }}
      h={{ base: 7, md: 8 }}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("#e8910e", "#ff5e13"),
        color: "white",
      }}
      px={1}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
}

export default SocialButton;
