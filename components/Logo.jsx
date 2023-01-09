import React from "react";
import Link from "next/link";
import { Text } from "@chakra-ui/react";
export default function Logo() {
  const date = new Date();
  const currentHour = date.getHours();
  const [bg, setBg] = React.useState(null);

  React.useEffect(() => {
    if (currentHour >= 6 && currentHour < 18) {
      setBg("light");
    } else {
      setBg("dark");
    }
  }, [currentHour]);

  return (
    <>
      <Text
        color={bg !== "dark" ? "white" : "black"}
        fontSize="3xl"
        fontFamily={"Georgia"}
        cursor={"pointer"}
      >
        <Link href={"/"} legacyBehavior>
          <a>Güven Otel</a>
        </Link>
      </Text>
    </>
  );
}
