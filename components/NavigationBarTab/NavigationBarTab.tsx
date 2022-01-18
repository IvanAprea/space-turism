import { Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from 'next/router';
interface INavTab {
  label: string;
  path: string;
}
interface IProps {
  index: number;
  item: INavTab;
  isActive: boolean;
  setCurrentTab: (id:number) => void;
}

const NavigationBarButton = (props: IProps) => {
  const { index, item, isActive, setCurrentTab } = props;
  const router = useRouter();

  const twoDigitsNumber = (value: number): string => {
    if (value > 9) {
      return value.toString();
    }
    return `0${value}`;
  };

  const handleClick = () => {
    setCurrentTab(index);
    router.push(item.path);
  }

  return (
    <Flex
      as="button"
      h="100%"
      textStyle="nav"
      direction="column"
      borderBottom='2px'
      borderColor={isActive ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)'}
      _hover={ !isActive ? {borderColor: 'rgba(255,255,255,0.5)'} : {}}
      onClick={() => handleClick()}
    >
      <Flex direction="row" flex="1" align="center">
        <HStack>
          <Text fontWeight="bold">{twoDigitsNumber(index)}</Text>
          <Text>{item.label}</Text>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default NavigationBarButton;
