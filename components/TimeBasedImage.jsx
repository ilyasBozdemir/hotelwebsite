import React from "react";
import { Image } from "@chakra-ui/react";
function TimeBasedImageTimeBasedImage({ nightImage, dayImage }) {
  const date = new Date();
  const currentHour = date.getHours();
  let imageUrl;
  if (currentHour >= 6 && currentHour < 18) imageUrl = dayImage;
  else imageUrl = nightImage;

  return (
    <>
      <Image src={imageUrl} alt="Guven-otel" />;
    </>
  );
}

export default TimeBasedImageTimeBasedImage;
