import { background, Box, Flex, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface IProps {
  index: number;
  label: string;
}

const NavigationBarButton = (props: IProps) => {
  const { index, label } = props;
  const [show, setShow] = useState<Boolean>(false);

  const twoDigitsNumber = (value: number): string => {
    if (value > 9) {
      return value.toString();
    }
    return `0${value}`;
  };

  return (
    <Flex
      as="button"
      h="100%"
      textStyle="nav"
      direction="column"
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      <Flex direction="row" flex="1" align="center">
        <HStack>
          <Text fontWeight="bold">{twoDigitsNumber(index)}</Text>
          <Text>{label}</Text>
        </HStack>
      </Flex>
      <Flex className="bar" w="100%" bgColor={show && 'white'} h="3px" />
    </Flex>
  );
};

export default NavigationBarButton;
