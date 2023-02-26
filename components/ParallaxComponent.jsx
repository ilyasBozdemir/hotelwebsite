import { Box } from "@chakra-ui/react";
import { Parallax, Background } from "react-parallax";

const ParallaxComponent = () => {
  return (
    <Box h="100vh" w="100vw" position="relative">
      <Parallax strength={300}>
        <Background>
          <img
            src="/image.jpg"
            alt="background image"
            style={{ width: "100%", height: "auto" }}
          />
        </Background>
        <Box
          h="100vh"
          w="100vw"
          position="absolute"
          top="0"
          left="0"
          bg="rgba(0, 0, 0, 0.5)"
        >
          <Box
            h="100%"
            w="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box color="white" fontSize="3xl" fontWeight="semibold">
              Parallax Component
            </Box>
          </Box>
        </Box>
      </Parallax>
    </Box>
  );
};

export default ParallaxComponent;
