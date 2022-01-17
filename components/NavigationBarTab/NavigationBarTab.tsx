import { Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";

interface IProps {
  index: number;
  label: string;
  isActive: boolean;
  onClick: (id:number) => void;
}

const NavigationBarButton = (props: IProps) => {
  const { index, label, isActive, onClick } = props;

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
      borderBottom='2px'
      borderColor={isActive ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)'}
      _hover={ !isActive ? {borderColor: 'rgba(255,255,255,0.5)'} : {}}
      onClick={() => onClick(index)}
    >
      <Flex direction="row" flex="1" align="center">
        <HStack>
          <Text fontWeight="bold">{twoDigitsNumber(index)}</Text>
          <Text>{label}</Text>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default NavigationBarButton;
