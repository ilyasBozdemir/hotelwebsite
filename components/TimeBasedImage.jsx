import React from "react";
import Image from "next/image";
function TimeBasedImageTimeBasedImage({ nightImage, dayImage }) {
  const date = new Date();
  const currentHour = date.getHours();
  let imageUrl;
  if (currentHour >= 6 && currentHour < 18) {
    imageUrl = dayImage;
  } else {
    imageUrl = nightImage;
  }

  return (
    <>
      <Image
        src={imageUrl}
        alt="Guven-otel"
        width={1600}
        height={1200} />
    </>
  );
}

export default TimeBasedImageTimeBasedImage;
