import { useEffect } from "react";
import { useRouter } from "next/router";

import { Box, CloseButton, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import { LinkItems } from '../constants/LinkItems'

import NavLink from "./NavLink";
import Logo from "./Logo";

export default function Sidebar({ onClose, ...rest }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", onClose);
    return () => {
      router.events.off("routeChangeComplete", onClose);
    };
  }, [router.events, onClose]);

  return (
    <Box transition="3s ease" bg="white" pos="fixed" h="full" w={'full'} {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Logo />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Divider />
      <Stack ml={3}>
        {LinkItems.map((link, i) => (
          <NavLink key={i} link={link} />
        ))}
      </Stack>
    </Box>
  );
}
