import { Icon } from "@chakra-ui/react";

function LogoSVG({ svgColor, width, height }) {
  return (
    <Icon
      viewBox={`0 0 ${width} ${height}`}
      fill={svgColor}
      width={width}
      height={height}
    >
      <rect
        width="100%"
        height="100%"
        fill={svgColor}
      />
     
    </Icon>
  );
}

export default LogoSVG;
