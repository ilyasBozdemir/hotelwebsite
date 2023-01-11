import { useEffect } from "react";
import { useRouter } from "next/router";

import { Box, CloseButton, Flex, Text } from "@chakra-ui/react";

import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";

import NavLink from "./NavLink";

const LinkItems = [
  { label: "Anasayfa", icon: FiHome, href: "/" },
  { label: "Hakkımızda", icon: FiTrendingUp, href: "/hakkimizda" },
  { label: "Foto Galeri", icon: FiCompass, href: "/foto-galeri" },
  { label: "İletişim", icon: FiStar, href: "/iletisim" },
];

export default function Sidebar({ onClose, ...rest }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", onClose);
    return () => {
      router.events.off("routeChangeComplete", onClose);
    };
  }, [router.events, onClose]);

  return (
    <Box transition="3s ease" bg="white" pos="fixed" h="full" {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
      </Flex>
      {LinkItems.map((link, i) => (
        <NavLink key={i} link={link} />
      ))}
    </Box>
  );
}
