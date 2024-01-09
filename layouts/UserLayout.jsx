import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Box, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";

function UserLayout({ children,translations  }) {
  const { colorMode, toggleColorMode } = useColorMode();

  const [darkMode, setDarkMode] = React.useState(false);
  const isDarkMode = colorMode === "dark";

  React.useEffect(() => {
    setDarkMode(isDarkMode);
  }, [isDarkMode]);

  return (
    <Box>
      <Header/>
      <Flex direction={"column"}>{children}</Flex>
      <Footer />

      <ScrollToTop />
    </Box>
  );
}



export default UserLayout;
