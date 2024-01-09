// The theme colors have been generated on the website https://aicolors.co/.

import { useColorModeValue } from "@chakra-ui/react";

const aiColorstoObject = (text) => {
  const lines = text.trim().split(/\r?\n/);

  const colors = lines.reduce((acc, line) => {
    const [key, value] = line.split(":");
    if (key && value) {
      const colorName = key.trim().replace("--", "").replace("-", "_");
      acc[colorName] = value.trim().replace(";", "");
    }
    return acc;
  }, {});

  return colors;
};

const inputWhitenText = `
    --primary-100:#1F3A5F;
    --primary-200:#4d648d;
    --primary-300:#acc2ef;
    --accent-100:#3D5A80;
    --accent-200:#cee8ff;
    --text-100:#FFFFFF;
    --text-200:#e0e0e0;
    --bg-100:#0F1C2E;
    --bg-200:#1f2b3e;
    --bg-300:#374357;
      
`;

const inputDarkenText = `
--primary-100:#1F3A5F;
--primary-200:#4d648d;
--primary-300:#acc2ef;
--accent-100:#3D5A80;
--accent-200:#cee8ff;
--text-100:#FFFFFF;
--text-200:#e0e0e0;
--bg-100:#0F1C2E;
--bg-200:#1f2b3e;
--bg-300:#374357;
  
`;

const whitenColors = aiColorstoObject(inputWhitenText);
const darkenColors = aiColorstoObject(inputDarkenText);

export const colors = {
  darken: aiColorstoObject(inputWhitenText),
  whiten: aiColorstoObject(inputDarkenText),
};
