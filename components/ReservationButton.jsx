import { Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
const ReservationButton = () => {
  const MotionText = motion(Text);
  return (
    <a
      href="https://wa.me/905435403160?text=Merhaba+rezervasyon+yaptırmak+istiyorum."
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button size={{ base: "sm", md: "lg" }} colorScheme={'red'}>
        <MotionText
          fontSize={{ base: "xl", md: "3xl" }}
          fontWeight="bold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          Hemen Rezervasyon Yapın!
        </MotionText>
      </Button>
    </a>
  );
};

export default ReservationButton;
