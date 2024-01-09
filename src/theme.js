import { extendTheme } from "@chakra-ui/react";
import { styles } from "./foundations/styles";
import { config } from "./foundations/config";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";
import { fontSizes } from "./foundations/fontSizes";
import { fontWeights } from "./foundations/fontWeights";
import { lineHeights } from "./foundations/lineHeights";
import { letterSpacings } from "./foundations/letterSpacings";
import { breakpoints } from "./foundations/breakpoints";
import { shadows } from "./foundations/shadows";
import { space } from "./foundations/space";
import { sizes } from "./foundations/sizes";
import { zIndices } from "./foundations/zIndices";

const theme = extendTheme({
  styles,
  config,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  breakpoints,
  //shadows,
  space,
  sizes,
  zIndices,
});

export default theme;