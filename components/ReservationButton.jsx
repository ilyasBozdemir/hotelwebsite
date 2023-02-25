import { Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
const ReservationButton = () => {
  const MotionText = motion(Text);
  return (
    <Link href="/rezervasyon">
      <Button size={{ base: "sm", md: "lg" }} colorScheme={'red'}>
        <MotionText
          fontSize={{ base: "xl", md: "3xl" }}
          fontWeight="bold"
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          Hemen Rezervasyon Yapın!
        </MotionText>
      </Button>
    </Link>
  );
};

export default ReservationButton;
