import { Icon, Button, Box } from "@chakra-ui/react";
import { BsChevronUp } from "react-icons/bs";

import React, { useState, useEffect } from "react";

const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

function useWindowPosition() {
  const [scrollPosition, setPosition] = useState(0);

  useEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return scrollPosition;
}

function ScrollToTop() {
  let windowPosition = useWindowPosition();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (windowPosition >= 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [windowPosition]);

  return (
    <>
      {show && (
        <Box zIndex={1001}>
          <Button
            onClick={scrollToTop}
            borderRadius={"25px 25px 25px 25px"}
            color={"white"}
            bg="#54bec3"
            _hover={{ bg: "#6ebec2" }}
            position={"fixed"}
            bottom={{ base: "50%", lg: "50%" }}
            right={"30px"}
            transition={"transform 0.5s"}
            transform="scale(1.3)"
            zIndex={500}
            boxShadow={
              " rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px"
            }
          >
            <Icon as={BsChevronUp} m={3} fontSize={20} />
          </Button>
        </Box>
      )}
    </>
  );
}

export default ScrollToTop;
