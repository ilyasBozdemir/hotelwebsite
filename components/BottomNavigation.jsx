// components/BottomNavigation.js
import {
  Box,
  Flex,
  Text,
  Link as CLink,
  useColorMode,
  HStack,
} from "@chakra-ui/react";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { BiMap } from "react-icons/bi";

const BottomNavigation = () => {
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      display="flex"
      justifyContent="space-around"
      padding="1rem"
      background="white"
      borderTop="1px solid #e0e0e0"
    >
      <CLink as={Link} href="/" color={isActive("/") ? "blue.500" : "gray.500"}>
        <Flex direction="column" alignItems="center">
          <FaHome size={20} />
          <Text fontSize="sm">Ana Sayfa</Text>
        </Flex>
      </CLink>
      <CLink
        as={Link}
        href="/urunlerimiz"
        color={isActive("/urunlerimiz") ? "blue.500" : "gray.500"}
      >
        <Flex direction="column" alignItems="center">
          <FaSearch size={20} />
          <Text fontSize="sm">Ürünler</Text>
        </Flex>
      </CLink>
      <CLink
        as={Link}
        href="/foto-galeri"
        color={isActive("/foto-galeri") ? "blue.500" : "gray.500"}
      >
        <Flex direction="column" alignItems="center">
          <FaUser size={20} />
          <Text fontSize="sm">Foto Galeri</Text>
        </Flex>
      </CLink>
    </Box>
  );
};

const BottomNavigationContact = () => {
  const router = useRouter();
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  const { colorMode, toggleColorMode } = useColorMode();

  const [darkMode, setDarkMode] = React.useState(false);
  const isDarkMode = colorMode === "dark";

  React.useEffect(() => {
    setDarkMode(isDarkMode);
  }, [isDarkMode]);

  const isActive = true;

  const phoneNumber = '905435403160';

  let whatsappLink;

  const handleWhatsAppClick = () => {
    if (isMobileDevice()) {
      whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}}`;
    } else {
      whatsappLink = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    }

    window.open(whatsappLink, "_blank");
  };

  return (
    <Box
      display={["flex", "flex", "none"]}
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      justifyContent="space-around"
      padding="1rem"
      background={!isDarkMode ? "white" : "gray.700"}
      borderTop={isDarkMode ? "1px solid #e0e0e0" : "1px solid #efefef"}
      zIndex={10}
    >
      <HStack
        _hover={{ cursor: "pointer", color: "#fa3628" }}
        color={isActive ? "blue.500" : "gray.500"}
      >
        <Link href={`tel:905435403160`}>
          <BsTelephone size={25} style={{ color: "#fa3628" }} />
        </Link>
      </HStack>

      <Box
        href="/urunlerimiz"
        color={isActive ? "blue.500" : "gray.500"}
        cursor={"pointer"}
        onClick={handleWhatsAppClick}
      >
        <Flex direction="column" alignItems="center">
          <BsWhatsapp size={25} style={{ color: "#fa3628" }} />
        </Flex>
      </Box>

      <DirectionsLink
        destination={
          "Lavanta Kömür San. Tic. Ltd. Şti."
        }
      />
    </Box>
  );
};

const DirectionsLink = ({ destination }) => {
  const handleClick = () => {
    // Google Haritalar URL'i oluştur
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURI(
      destination
    )}`;

    // Yeni bir pencere aç ve Google Haritalar'da yol tarifini göster
    window.open(googleMapsUrl);
  };

  return (
    <Box cursor={"pointer"} color="blue.500">
      <Flex direction="column" alignItems="center" onClick={handleClick}>
        <BiMap size={25}  style={{ color: "#fa3628" }} />
      </Flex>
    </Box>
  );
};

export default BottomNavigationContact;