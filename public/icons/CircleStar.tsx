import { Circle, Icon } from "@chakra-ui/react";

export const CircleStar = ({
  color = "currentColor",
  style = {},
  viewBox = "3 0 48 48",
}): JSX.Element => (
  <Circle bgColor='white' >
    <Icon viewBox={viewBox} h={12} w={12}>
      <svg
        style={style}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28 0C28 0 28 24 4 24C27.5776 24.1714 28 48 28 48C28 48 28 24 52 24C28 24 28 0 28 0Z"
          fill={color}
        />
      </svg>
    </Icon>
  </Circle>
);
