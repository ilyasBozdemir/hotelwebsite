import React from "react";
import Link from "next/link";
import { Text } from "@chakra-ui/react";
export default function Logo(props) {
  const { colorState = false } = props;
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
        color={bg === "dark" ? "white" : "black"}
        fontSize={{
          base: "12px",
          sm: "14px",
          md: "16px",
          lg: "18px",
          xl: "20px",
          "2xl": "24px",
        }}
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
