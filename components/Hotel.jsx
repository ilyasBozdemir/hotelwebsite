import {
  Flex, Box
} from "@chakra-ui/react";
import React, { useState } from "react";
import TimeBasedImageTimeBasedImage from "./TimeBasedImage";

import ReservationButton from "./ReservationButton";
import { motion } from "framer-motion";
function Hotel() {
  const date = new Date();
  const currentHour = date.getHours();
  const [bg, setBg] = useState(null);


  React.useEffect(() => {
    if (currentHour >= 6 && currentHour < 18) {
      setBg("light");
    } else {
      setBg("dark");
    }
  }, [currentHour]);

  return (
    <>

      <Flex alignItems="center" justifyContent="center" position="relative">
        <TimeBasedImageTimeBasedImage
          dayImage={"/images/otel-dis-gunduz.png"}
          nightImage={"/images/otel-dis-gece.png"}
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="blackAlpha.500"
          opacity="0.7"
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          zIndex="1"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <ReservationButton />
          </motion.div>

        </Box>

      </Flex>
    </>
  );
}

export default Hotel;
