import { Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import PagesBreadcrumb from "./PagesBreadcrumb";

function PagesCTA({ imgSrc, currentPage }) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    handleWindowSize();

    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  const handleWindowSize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  return (
    <>
      <Flex
        as="section"
        h={{ base: 180, md: 250 }}
        bgGradient="linear(to-l, #e8910e, #ff5e13)"
        w="100%"
        color="white"
        justify={"center"}
      >
        <Flex direction={"column"} justifyContent={"center"}>
          <Text fontFamily={"corbel"} fontSize={{ base: 30, md: 55 }}>
            {currentPage}
          </Text>
          <PagesBreadcrumb currentPage={currentPage} />
        </Flex>
      </Flex>
    </>
  );
}

export default PagesCTA;
