import { Flex, HStack } from "@chakra-ui/react";
import React from "react";

interface IProps {
  children: JSX.Element[];
}

export const NavigationBar = (props: IProps) => {
  const { children } = props;

  return (
    <HStack
      h="80px"
      bgColor="rgba(255, 255, 255, 0.05)"
      sx={{ backdropFilter: "blur(5px)" }}
      w="500px"
      justify="center"
      spacing={12}
    >
      {children}
    </HStack>
  );
};

export default NavigationBar;
