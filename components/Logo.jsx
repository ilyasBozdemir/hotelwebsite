import React from "react";
import Link from "next/link";
import { Text } from "@chakra-ui/react";
export default function Logo(props) {
  const { colorState = false } = props;
  const date = new Date();
  const currentHour = date.getHours();
 
  return (
    <>
      <Text
        color={"black"}
        fontSize={"25px"}
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
